import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function InspectorSchool() {

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

  const [addSchool, setAddSchool] = useState({
    s_id: "",
    s_name: "",
    s_location: "",
    s_fees: "",
  });

  const [delSchool, setDelSchool] = useState({
    s_id: "",
  });

  const handleSchoolRow = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddSchool({ ...addSchool, [name]: value });
  };

  const addSchoolRow = (e) => {
    e.preventDefault();
    console.log(Object.values(addSchool));
    //axios.post("http://localhost/siremar_data/Add_school.php", { userData: addSchool }).then(
    axios.post("http://localhost:8000/school", addSchool).then(
      res => {
        console.log("Response Data after Add School: " + Object.values(res.data));
        if (res.data.message === 'Success') {
          alert(res.data.response_msg);
          handleSchoolRowReset(e);
        }
        else {
          alert(res.data.response_msg);
          handleSchoolRowReset(e);
        }
      })
    handleSchoolRowReset(e);
  };

  const handleSchoolRowReset = (e) => {
    e.preventDefault();
    setAddSchool({ s_id: "", s_name: "", s_location: "", s_fees: "" });
  };

  const handleDelSchool = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDelSchool({ [name]: value });
  };

  const handleDeleteSchool = (e) => {
    e.preventDefault();
    //axios.post("http://localhost/siremar_data/Delete_school.php", { delSchool: delSchool }).then(
    axios.get("http://localhost:8000/school/delete/" + delSchool.s_id).then(
      res => {
        if (res.data.message === 'Success') {
          alert("School Deleted Successfully.");
          handleDeleteSchoolReset(e);
        } else {
          alert("School Record Not Found.");
          handleDeleteSchoolReset(e);
        }
      })
    handleDeleteSchoolReset(e);
  };

  const handleDeleteSchoolReset = (e) => {
    e.preventDefault();
    setDelSchool({ s_id: "" });
  };


  return (
    <div>
      <div>
        <h1>Manage Schools.</h1><br/><br/>
      </div>
      <div>
        <table className="dashboardTableData">
          <caption>School Details</caption>
          <thead><tr>
            <th>School ID</th>
            <th>School Name</th>
            <th>School Location</th>
            <th>Annual Fees</th>
            <th>Action</th>
          </tr></thead>
          {
            schoolData.map((res) => {
              return (
                <tbody>
                  <td>{res.s_id}</td>
                  <td>{res.s_name}</td>
                  <td>{res.s_location}</td>
                  <td>{res.s_fees}</td>
                  <td>-</td>
                </tbody>
              )
            })
          }
          <tr>
            <td>Add School</td>
            <td><input name="s_name" value={addSchool.s_name} onChange={handleSchoolRow} className="td-w" placeholder="Name"></input></td>
            <td><input name="s_location" value={addSchool.s_location} onChange={handleSchoolRow} className="td-w" placeholder="Location"></input></td>
            <td><input name="s_fees" value={addSchool.s_fees} onChange={handleSchoolRow} className="td-w" placeholder="Fees"></input></td>
            <td className="link " onClick={addSchoolRow}>Add</td>
          </tr>
        </table>
      </div>
      <form onSubmit={handleDeleteSchool}>
        <p>Delete School Id: <input type="text" name="s_id" value={delSchool.s_id} onChange={handleDelSchool} />   <input type="submit" value="Delete" /></p>
      </form>
    </div>
  )
}

export default InspectorSchool
