import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function ResidentSchool() {

  const name = localStorage.getItem("g_name");
  const email = localStorage.getItem("g_email");

  const [schoolData, setSchoolData] = useState([]);


  const getAllData = async () => {
    // let resp = await fetch('http://localhost/siremar_data/Get_school.php');
    let resp = await fetch('http://localhost:8000/school');
    setSchoolData(await resp.json());
  }

  useEffect(() => {
    getAllData();
  }, []);

  const [bookSchool, setBookSchool] = useState({
    s_id: "",
    s_class: "",
    r_email: "",
  });

  const handleBookSchool = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setBookSchool({ ...bookSchool, [name]: value, r_email: email });
  };

  const handleBookSchoolSubmit = (e) => {
    e.preventDefault();
    console.log(bookSchool);
    axios.post("http://localhost/siremar_data/Book_school.php", { bookSchool: bookSchool }).then(
      res => {
        console.log("Response: " + Object.values(res.data));
        if (res.data.message === 'Success') {
          alert("School Registration Successfully.");
          handleBookSchoolReset(e);
        } else {
          alert(res.data.response_msg);
          handleBookSchoolReset(e);
        }
      })
    handleBookSchoolReset(e);
  };

  const handleBookSchoolReset = (e) => {
    e.preventDefault();
    setBookSchool({ s_id: "", s_class: "" });
  };


  return (
    <div>
      <div>
        <h1>School Registration.</h1><br /><br />
      </div>
      <div>
        <table class="dashboardTableData">
          <caption>School Details</caption>
          <thead><tr>
            <th>School ID</th>
            <th>School Name</th>
            <th>School Location</th>
            <th>Annual Fees</th>
          </tr></thead>
          {
            schoolData.map((res) => {
              return (
                <tbody>
                  <td>{res.s_id}</td>
                  <td>{res.s_name}</td>
                  <td>{res.s_location}</td>
                  <td>{res.s_fees}</td>
                </tbody>
              )
            })
          }
        </table>
      </div>
      <form onSubmit={handleBookSchoolSubmit}>
        <p>School Id: <input type="text" name="s_id" value={bookSchool.s_id} onChange={handleBookSchool} placeholder="School ID" />  Class: <input type="text" name="s_class" value={bookSchool.s_class} onChange={handleBookSchool} placeholder="Class" className='td-w' /> <input type="submit" value="Register to School" /></p>
      </form>
    </div>
  )
}

export default ResidentSchool
