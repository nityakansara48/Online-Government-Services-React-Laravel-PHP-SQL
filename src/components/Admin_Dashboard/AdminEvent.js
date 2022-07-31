import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function AdminEvent() {

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

  const [addEvent, setAddEvent] = useState({
    e_id: "",
    e_name: "",
    e_date: "",
    e_discount: "",
    e_price: "",
  });

  const [delEvent, setDelEvent] = useState({
    e_id: "",
  });

  const handleEventRow = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddEvent({ ...addEvent, [name]: value });
  };

  const addEventRow = (e) => {
    e.preventDefault();
    //axios.post("http://localhost/siremar_data/Add_event.php", { userData: addEvent }).then(
    axios.post("http://localhost:8000/events", addEvent).then(
      res => {
        if (res.data.message === 'Success') {
          alert(res.data.response_msg);
          handleEventRowReset(e);
        }
        else {
          alert(res.data.response_msg);
          handleEventRowReset(e);
        }
      })
    handleEventRowReset(e);
  };

  const handleEventRowReset = (e) => {
    e.preventDefault();
    setAddEvent({ e_id: "", e_name: "", e_date: "", e_discount: "", e_price: "" });
  };

  const handleDelEvent = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDelEvent({ [name]: value });
  };

  const handleDeleteEvent = (e) => {
    e.preventDefault();
    //axios.post("http://localhost/siremar_data/Delete_event.php", { delEvent: delEvent }).then(
    axios.get("http://localhost:8000/events/delete/" + delEvent.e_id).then(
      res => {
        if (res.data.message === 'Success') {
          alert("Event Deleted Successfully.");
          handleDeleteEventReset(e);
        } else {
          alert("Event Record Not Found.");
          handleDeleteEventReset(e);
        }
      })
    handleDeleteEventReset(e);
  };

  const handleDeleteEventReset = (e) => {
    e.preventDefault();
    setDelEvent({ e_id: "" });
  };


  return (
    <div>
      <div>
        <h1>Manage Events</h1><br/><br/>
      </div>
      <div>
        <table className="dashboardTableData">
          <caption>Event Details</caption>
          <thead><tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Discount</th>
            <th>Event Price</th>
            <th>Action</th>
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
                  <td>-</td>
                </tbody>
              )
            })
          }
          <tr>
            <td>Add Event</td>
            <td><input name="e_name" value={addEvent.e_name} onChange={handleEventRow} className="td-w" placeholder="Name"></input></td>
            <td><input name="e_date" value={addEvent.e_date} onChange={handleEventRow} className="td-w" placeholder="yyyy-mm-dd"></input></td>
            <td><input name="e_discount" value={addEvent.e_discount} onChange={handleEventRow} className="td-w" placeholder="Discount"></input></td>
            <td><input name="e_price" value={addEvent.e_price} onChange={handleEventRow} className="td-w" placeholder="Price"></input></td>
            <td className="link " onClick={addEventRow}>Add</td>
          </tr>
        </table>
      </div>
      <form onSubmit={handleDeleteEvent}>
        <p>Delete Event Id: <input type="text" name="e_id" value={delEvent.e_id} onChange={handleDelEvent} />   <input type="submit" value="Delete" /></p>
      </form>

    </div>
  )
}

export default AdminEvent
