import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function AdminInspector() {

  const name = localStorage.getItem("g_name");
  const email = localStorage.getItem("g_email");

  const [inspectorData, setInspectorData] = useState([]);


  const getAllData = async () => {
    //let resp = await fetch('http://localhost/siremar_data/Get_inspector.php');
    let resp = await fetch('http://localhost:8000/inspectors');
    setInspectorData(await resp.json());
  }

  useEffect(() => {
    getAllData();
  }, []);

  const [addInspector, setAddInspector] = useState({
    name: "",
    birthdate: "",
    number: "",
    gender: "",
    email: "",
    password: "",
    role: "Inspector",
  });

  const [delResident, setDelResident] = useState({
    id: "",
    table: ""
  });

  const handleInspector = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddInspector({ ...addInspector, [name]: value });
  }

  const addInspectorRow = (e) => {
    e.preventDefault();
    console.log(Object.values(addInspector));
    //axios.post("http://localhost/siremar_data/Add_resident.php", { userData: addInspector }).then(
    axios.get("http://localhost:8000/residents/delete/" + delResident.id).then(
      res => {
        console.log("Response Data after Add Inspector: " + Object.values(res.data));
        if (res.data.message === 'Success') {
          //alert(res.data.response_msg);
          alert("Inspector Registered Successfull.");
          handleInspectorReset(e);
        }
        else {
          alert(res.data.response_msg);
          handleInspectorReset(e);
        }
      })
    handleInspectorReset(e);
  };

  const handleInspectorReset = (e) => {
    e.preventDefault();
    setAddInspector({ name: "", birthdate: "", number: "", gender: "", email: "", password: "" });
  };

  const deleteRow = (e) => {
    e.preventDefault();
    axios.post("http://localhost/siremar_data/Delete_resident.php", { delResident: delResident }).then(
      res => {
        if (res.data.message === 'Success') {
          alert("Inspector Deleted Successfully.");
        } else {
          alert("Inspector Not Found.");
        }
      })
    handleDelReset(e);
  };

  const handleDelReset = (e) => {
    e.preventDefault();
    setDelResident({ id: "", table: "" });
  }

  const handleDelete = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDelResident({ id: value, table: name });
  }


  return (
    <div>
      <div>
        <h1>Manage Inspectors.</h1><br/><br/>
      </div>
      <div>
        <table className="dashboardTableData">
          <caption>Inspector Details</caption>
          <thead><tr>
            <th>Inspector ID</th>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Number</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr></thead>
          {
            inspectorData.map((res) => {
              return (
                <tbody>
                  <td>{res.id}</td>
                  <td>{res.name}</td>
                  <td>{res.birthdate}</td>
                  <td>{res.contact_no}</td>
                  <td>{res.gender}</td>
                  <td>{res.email}</td>
                  <td>{res.password}</td>
                  <td>-</td>
                </tbody>
              )
            })
          }
          <tr>
            <td>Add Inspector</td>
            <td><input name="name" value={addInspector.name} onChange={handleInspector} className="td-w" placeholder="name"></input></td>
            <td><input name="birthdate" value={addInspector.birthdate} onChange={handleInspector} className="td-w" placeholder="yyyy-mm-dd"></input></td>
            <td><input name="number" value={addInspector.number} onChange={handleInspector} className="td-w" placeholder="10 Digits only"></input></td>
            <td><input name="gender" value={addInspector.gender} onChange={handleInspector} className="td-w" placeholder='Male/Female'></input></td>
            <td><input name="email" value={addInspector.email} onChange={handleInspector} className="td-w" placeholder="Email"></input></td>
            <td><input name="password" value={addInspector.password} onChange={handleInspector} className="td-w" placeholder="Password"></input></td>
            <td className="link " onClick={addInspectorRow}>Add</td>
          </tr>
        </table>
      </div>
      <form onSubmit={deleteRow}>
        <p>Delete Inspector Id: <input type="text" name="Inspector" value={setDelResident.id} onChange={handleDelete} />   <input type="submit" value="Delete" /></p>
      </form>

    </div>
  )
}

export default AdminInspector
