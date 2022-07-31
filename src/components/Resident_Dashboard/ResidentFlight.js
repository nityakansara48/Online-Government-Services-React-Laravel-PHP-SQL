import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function ResidentFlight() {

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

  const [bookFlight, setBookFlight] = useState({
    flight_id: "",
    resident_email: "",
  });

  const handleBookFlight = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setBookFlight({ [name]: value, resident_email: email });
  };

  const handleBookFlightSubmit = (e) => {
    e.preventDefault();
    console.log(bookFlight);
    axios.post("http://localhost/siremar_data/Book_flight.php", { bookFlight: bookFlight }).then(
      res => {
        // console.log("Response: "+res.data);
        if (res.data.message === 'Success') {
          alert("Flight Bookes Successfully.");
          handleBookFlightReset(e);
        } else {
          alert(res.data.response_msg);
          handleBookFlightReset(e);
        }
      })
    handleBookFlightReset(e);
  };

  const handleBookFlightReset = (e) => {
    e.preventDefault();
    setBookFlight({ flight_id: "" });
  };

  return (
    <div>
      <div>
        <h1>Book Flight.</h1><br/><br/>
      </div>
      <div>
        <table class="dashboardTableData">
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
                </tbody>
              )
            })
          }
        </table>
      </div>
      <form onSubmit={handleBookFlightSubmit}>
        <p>Flight Id: <input type="text" name="flight_id" value={bookFlight.flight_id} onChange={handleBookFlight} placeholder="Flight ID" />   <input type="submit" value="Book Flight" /></p>
      </form>
    </div>
  )
}

export default ResidentFlight