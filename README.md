<h1>Project Overview</h1>
<p>
  This is a chat app coded with Server-Sent Events (SSE). It is basically a Node.js server that listens for the given URLs below:
</p>
<ul>
  <li>GET / -> Serves the chat app user interface</li>
  <li>GET /chat -> Used to register clients</li>
  <li>POST /chat -> Used to send messages to the registered clients</li>
</ul>

<h2>Example</h2>

<p>First enter the page http://localhost:8080/. You will be prompted for a username. I opened three browser tabs for three clients: Eray, Ahmet, and Mehmet. When you type into the input control 
  and press enter, you will see that the messages are obtained by three of the clients.</p>

<img width="1920" height="230" alt="Capture" src="https://github.com/user-attachments/assets/45f7fa3a-ced1-45b6-a6d8-575b33355808" />
<img width="1920" height="235" alt="Capture2" src="https://github.com/user-attachments/assets/78440fcf-06b0-406e-8601-df5ba28adba4" />
<img width="1920" height="238" alt="Capture3" src="https://github.com/user-attachments/assets/d6ad34d6-90b9-4fe5-9287-01232afff681" />

<p>Reference: JavaScript The Definitive Guide by David Flanagan</p>
