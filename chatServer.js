const http = require("http");
const fs = require("fs");

const clientHTML = fs.readFileSync("chatClient.html");
let clients = [];
let server = new http.Server();

server.listen(8080);
console.log("Server is listening on port 8080");

server.on("request", (request, response) => {
    let host = request.headers.host;
    let protocol = "http";
    let baseUrl = `${protocol}://${host}`;
    let pathname = URL.parse(request.url, baseUrl).pathname;

    if (pathname === "/")
        response.writeHead(200, {"Content-Type": "text/html"}).end(clientHTML);
    else if (pathname === "/chat" && request.method === "GET")
        acceptNewClient(request, response);
    else if (pathname === "/chat" && request.method === "POST")
        broadcastNewMessage(request, response);
    else
        response.writeHead(404).end();

});

function acceptNewClient(request, response)
{
    clients.push(response);

    request.connection.on("end", () => {
        clients.splice(clients.indexOf(response), 1);
        response.end();
    });

    response.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache"
    });

    response.write("event: chat\ndata: Connected\n\n");
}

async function broadcastNewMessage(request, response)
{
    request.setEncoding("utf8");
    let body = "";
    for await (let chunk of request)
        body += chunk;

    response.writeHead(200).end();

    let message = "data: " + body.replace("\n", "\ndata: ");
    let event = `event: chat\n${message}\n\n`;
    clients.forEach(client => client.write(event));
}
