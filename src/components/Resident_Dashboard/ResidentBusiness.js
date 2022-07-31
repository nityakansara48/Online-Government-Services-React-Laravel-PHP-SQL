import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function ResidentBusiness() {

  const name = localStorage.getItem("g_name");
  const email = localStorage.getItem("g_email");

  const [businessData, setBusinessData] = useState([]);


  const getAllData = async () => {
    //let resp = await fetch('http://localhost/siremar_data/Get_business.php');
    let resp = await fetch('http://localhost:8000/business');
    setBusinessData(await resp.json());
  }

  useEffect(() => {
    getAllData();
  }, []);


  return (
    <div>
      <div>
        <h1>View Besinesses.</h1><br /><br />
      </div>
      <div>
        <table class="dashboardTableData">
          <caption>Business Details</caption>
          <thead><tr>
            <th>Business ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
          </tr></thead>
          {
            businessData.map((res) => {
              return (
                <tbody>
                  <td>{res.b_id}</td>
                  <td>{res.b_name}</td>
                  <td>{res.b_location}</td>
                  <td>{res.b_description}</td>
                </tbody>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default ResidentBusiness
