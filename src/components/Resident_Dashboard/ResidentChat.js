import { React, useEffect, useState } from 'react';
import "../../styles/basic.css";
import "../../styles/navbar.css";
import socketClient from "socket.io-client";
const SERVER = "http://localhost:3001";

const socket = socketClient(SERVER);

function ResidentChat() {
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
    setAllMessages((allMessages) => allMessages.concat("Resident: " + message));
  };

  useEffect(() => {
    console.log(2);
    socket.on("recv_all_msg", (data) => {
      console.log(data + " " + data.message);
      setMessageReceived(data.message);
      setAllMessages((allMessages) => allMessages.concat("Inspector: " + data.message));
    });
  }, [socket]);

  console.log(allMessages);

  return (
    <div class>
      <div>
        <br />
        <div>
          <h2>Chat with Inspector.</h2><br /><br /><br/>
        </div>
        <div className="div-scroll-1">
        {allMessages.map((a, i) => (
          <p key={i}>{a}</p>))}
        </div><br/>
        <div className="chat-app">
          <p><input placeholder="type your message" value={message} onChange={(event) => {setMessage(event.target.value);}}/> &nbsp; <button onClick={sendMsg}>Send Message</button> </p>
          <br />
          {/* <h3>Message from Inspector: </h3> */}
         
        </div>
      </div>
    </div>
  );
}

export default ResidentChat;

//import { React, useEffect, useState } from 'react';
// import '../../styles/basic.css';
// import '../../styles/navbar.css';
// import axios from 'axios';

// function ResidentChat() {

//   const name = localStorage.getItem("g_name");
//   const email = localStorage.getItem("g_email");

//   return (
//     <div>
//       <div>
//         <h1>Chat with Inspector.</h1><br /><br />
//       </div>
//       <div>
//         <div>
//           <div class="div-scroll-1">
//             <p>{name}: Question 1</p>
//             <p>Inspector: Answer 1</p>
//             <p>{name}: Question 2</p>
//             <p>Inspector: Answer 2</p>
//             <p>{name}: Question 3</p>
//             <p>Inspector: Answer 3</p>
//             <p>{name}: Question 4</p>
//             <p>Inspector: Answer 4</p>
//             <p>{name}: Question 5</p>
//             <p>Inspector: Answer 5</p>
//             <p>{name}: Question 6</p>
//             <p>Inspector: Answer 6</p>
//             <p>{name}: Question 7</p>
//             <p>Inspector: Answer 7</p>
//             <p>{name}: Question 8</p>
//             <p>Inspector: Answer 8</p>
//             <p>{name}: Question 9</p>
//             <p>Inspector: Answer 9</p>
//             <p>{name}: Question 10</p>
//             <p>Inspector: Answer 10</p>
//           </div><br />
//           <b>Reply: </b><input type="text" placeholder='Your Message' /><br /><br />
//           <button>Send Your Message</button><br />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ResidentChat