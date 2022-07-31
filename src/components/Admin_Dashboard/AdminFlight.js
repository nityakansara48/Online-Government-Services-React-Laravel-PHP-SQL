import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function AdminFlight() {

  const name = localStorage.getItem("g_name");
  const email = localStorage.getItem("g_email");

  const [flightData, setFlightData] = useState([]);

  const getAllData = async () => {
    //let resp = await fetch('http://localhost/siremar_data/Get_flight.php');
    let resp = await fetch('http://localhost:8000/flight');
    setFlightData(await resp.json());
  }

  useEffect(() => {
    getAllData();
  }, []);

  const [addFlight, setAddFlight] = useState({
    flight_id: "",
    from_city: "",
    to_city: "",
    date: "",
    time: "",
    duration: "",
    discount: "",
    price: "",
  });

  const [delFlight, setDelFlight] = useState({
    flight_id: "",
  });

  const handleFlightRow = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddFlight({ ...addFlight, [name]: value });
  };

  const addFlightRow = (e) => {
    e.preventDefault();
    console.log(Object.values(addFlight));
    //axios.post("http://localhost/siremar_data/Add_flight.php", { userData: addFlight }).then(
    axios.post("http://localhost:8000/flight", addFlight).then(
      res => {
        console.log("Response Data after Add Flight: " + Object.values(res.data));
        if (res.data.message === 'Success') {
          alert(res.data.response_msg);
          handleFlightRowReset(e);
        }
        else {
          alert(res.data.response_msg);
          handleFlightRowReset(e);
        }
      })
    handleFlightRowReset(e);
  };

  const handleFlightRowReset = (e) => {
    e.preventDefault();
    setAddFlight({ from_city: "", to_city: "", date: "", time: "", duration: "", discount: "", price: "" });
  };

  const handleDelFlight = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDelFlight({ [name]: value });
  };

  const handleDeleteFlight = (e) => {
    e.preventDefault();
    //axios.post("http://localhost/siremar_data/Delete_flight.php", { delFlight: delFlight }).then(
    axios.post("http://localhost:8000/flight/delete/" + delFlight.flight_id).then(
      res => {
        if (res.data.message === 'Success') {
          alert("Flight Deleted Successfully.");
        } else {
          alert("Flight Record Not Found.");
        }
      })
    handleDeleteFlightReset(e);
  };

  const handleDeleteFlightReset = (e) => {
    e.preventDefault();
    setDelFlight({ flight_id: "" });
  };

  return (
    <div>
      <div>
        <h1>Manage Flights.</h1><br/><br/>
      </div>
      <div>
        <table className="dashboardTableData">
          <caption>Flight Details</caption>
          <thead><tr>
            <th>Flight ID</th>
            <th>Departure City</th>
            <th>Arrival City</th>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Discount</th>
            <th>Price</th>
            <th>Action</th>
          </tr></thead>
          {
            flightData.map((res) => {
              return (
                <tbody>
                  <td>{res.flight_id}</td>
                  <td>{res.from_city}</td>
                  <td>{res.to_city}</td>
                  <td>{res.date}</td>
                  <td>{res.time}</td>
                  <td>{res.duration}</td>
                  <td>{res.discount}</td>
                  <td>{res.price}</td>
                  <td>-</td>
                </tbody>
              )
            })
          }
          <tr>
            <td>Add Flight</td>
            <td><input name="from_city" value={addFlight.from_city} onChange={handleFlightRow} className="td-w" placeholder="Dep. City"></input></td>
            <td><input name="to_city" value={addFlight.to_city} onChange={handleFlightRow} className="td-w" placeholder="Arr. City"></input></td>
            <td><input name="date" value={addFlight.date} onChange={handleFlightRow} className="td-w" placeholder="yyyy-mm-dd"></input></td>
            <td><input name="time" value={addFlight.time} onChange={handleFlightRow} className="td-w" placeholder="Time"></input></td>
            <td><input name="duration" value={addFlight.duration} onChange={handleFlightRow} className="td-w" placeholder="Duration"></input></td>
            <td><input name="discount" value={addFlight.discount} onChange={handleFlightRow} className="td-w" placeholder="Discount"></input></td>
            <td><input name="price" value={addFlight.price} onChange={handleFlightRow} className="td-w" placeholder="Price"></input></td>
            <td class="link" onClick={addFlightRow}>Add</td>
          </tr>
        </table>
      </div>
      <form onSubmit={handleDeleteFlight}>
        <p>Delete Flight Id: <input type="text" name="flight_id" value={delFlight.flight_id} onChange={handleDelFlight} />   <input type="submit" value="Delete" /></p>
      </form>
    </div>
  )
}

export default AdminFlight
