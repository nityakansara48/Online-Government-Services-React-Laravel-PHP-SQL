import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function ResidentEvent() {

  const name = localStorage.getItem("g_name");
  const email = localStorage.getItem("g_email");

  const [eventData, setEventData] = useState([]);

  const getAllData = async () => {
    //let resp = await fetch('http://localhost/siremar_data/Get_event.php');
    let resp = await fetch('http://localhost:8000/events');
    setEventData(await resp.json());
  }

  useEffect(() => {
    getAllData();
  }, []);

  const [boolEvent, setBookEvent] = useState({
    event_id: "",
    resident_email: "",
  });

  const handleBookEvent = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setBookEvent({ [name]: value, resident_email: email });
  };

  const handleBookEventSubmit = (e) => {
    e.preventDefault();
    console.log(boolEvent);
    axios.post("http://localhost/siremar_data/Book_event.php", { boolEvent: boolEvent }).then(
      res => {
        console.log("Response: " + res.data);
        if (res.data.message === 'Success') {
          alert("Event Bookes Successfully.");
          handleBookEventReset(e);
        } else {
          alert(res.data.response_msg);
          handleBookEventReset(e);
        }
      })
    handleBookEventReset(e);
  };

  const handleBookEventReset = (e) => {
    e.preventDefault();
    setBookEvent({ event_id: "" });
  };


  return (
    <div>
      <div>
        <h1>Book Events.</h1><br /><br />
      </div>
      <div>
        <table class="dashboardTableData">
          <caption>Event Details</caption>
          <thead><tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Discount</th>
            <th>Event Price</th>
          </tr></thead>
          {
            eventData.map((res) => {
              return (
                <tbody>
                  <td>{res.event_id}</td>
                  <td>{res.event_name}</td>
                  <td>{res.event_date}</td>
                  <td>{res.event_discount}</td>
                  <td>{res.event_price}</td>
                </tbody>
              )
            })
          }
        </table>
      </div>
      <form onSubmit={handleBookEventSubmit}>
        <p>Event Id: <input type="text" name="event_id" value={boolEvent.event_id} onChange={handleBookEvent} placeholder="Event ID" />   <input type="submit" value="Book Event" /></p>
      </form>
    </div>
  )
}

export default ResidentEvent