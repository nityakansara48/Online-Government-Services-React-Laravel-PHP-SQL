import { React, useEffect, useState } from 'react';
import "../../styles/basic.css";
import "../../styles/navbar.css";
import socketClient from "socket.io-client";
const SERVER = "http://localhost:3001";

const socket = socketClient(SERVER);

function InspectorChat() {
  const name = localStorage.getItem("g_name");
  const email = localStorage.getItem("g_email");

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [allMessages, setAllMessages] = useState([""]);

  const sendMsg = (e) => {
    e.preventDefault();
    socket.emit("send_msg", { message: message });
    console.log(message);
    setMessage("");
    setAllMessages((allMessages) => allMessages.concat("Inspector: " + message));
  };

  useEffect(() => {
    console.log(2);
    socket.on("recv_all_msg", (data) => {
      console.log(data + " " + data.message);
      setMessageReceived(data.message);
      setAllMessages((allMessages) => allMessages.concat("Resident: " + data.message));
    });
  }, [socket]);

  console.log(allMessages);

  return (
    <div class>
      <div>
        <br />
        <div>
          <h2>Chat with Residents.</h2><br /><br /><br/>
        </div>
        <div className="div-scroll-1">
        {allMessages.map((a, i) => (
          <p key={i}>{a}</p>))}
        </div><br/>
        <div className="chat-app">
          <p><input placeholder="type your message" value={message} onChange={(event) => {setMessage(event.target.value);}}/> &nbsp; <button onClick={sendMsg}>Send Message</button> </p>
          <br />
          {/* <h3>Message from Resident: </h3> */}
         
        </div>
      </div>
    </div>
  );
}

export default InspectorChat;

// import { React, useEffect, useState } from 'react';
// import '../../styles/basic.css';
// import '../../styles/navbar.css';
// import axios from 'axios';

// function InspectorChat() {

//   const name = localStorage.getItem("g_name");
//   const email = localStorage.getItem("g_email");

//   const [chatResident, setChatResident] = useState("Resident 1");

//   const chatresidenthandle = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     setChatResident(e.target.value);
//   }

//   return (
//     <div class>
//       <div>
//         <div>
//           <h1>Chat with Residents.</h1><br /><br />
//         </div>
//         <select id="res_name" name="res_name" onChange={chatresidenthandle}>
//           <option value="Resident 1">Resident 1</option>
//           <option value="Resident 2">Resident 2</option>
//           <option value="Resident 3">Resident 3</option>
//           <option value="Resident 4">Resident 4</option>
//         </select><br /><br />
//         <div class="div-scroll-1">
//           <p>{chatResident}: Question 1</p>
//           <p>{name}: Answer 1</p>
//           <p>{chatResident}: Question 2</p>
//           <p>{name}: Answer 2</p>
//           <p>{chatResident}: Question 3</p>
//           <p>{name}: Answer 3</p>
//           <p>{chatResident}: Question 4</p>
//           <p>{name}: Answer 4</p>
//           <p>{chatResident}: Question 5</p>
//           <p>{name}: Answer 5</p>
//           <p>{chatResident}: Question 6</p>
//           <p>{name}: Answer 6</p>
//           <p>{chatResident}: Question 7</p>
//           <p>{name}: Answer 7</p>
//           <p>{chatResident}: Question 8</p>
//           <p>{name}: Answer 8</p>
//           <p>{chatResident}: Question 9</p>
//           <p>{name}: Answer 9</p>
//           <p>{chatResident}: Question 10</p>
//           <p>{name}: Answer 10</p>
//         </div><br /><br />
//         <b>Reply: </b><input type="text" placeholder='Your Message' /><br /><br /><br />
//         <button>Send Your Message</button><br />
//       </div>
//     </div>
//   )
// }

// export default InspectorChat
