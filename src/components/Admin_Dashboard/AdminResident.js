import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';


function AdminResident() {

  const name = localStorage.getItem("g_name");
  const email = localStorage.getItem("g_email");

  const [residentData, setResidentData] = useState([]);

  const getAllData = async () => {
    //let resp = await fetch('http://localhost/siremar_data/Get_resident.php');
    let resp = await fetch('http://localhost:8000/residents');
    setResidentData(await resp.json());
  }

  useEffect(() => {
    getAllData();
  }, []);

  const [addResident, setAddResident] = useState({
    name: "",
    birthdate: "",
    contact_no: "",
    gender: "",
    email: "",
    password: "",
    role: "Resident",
  });

  const [delResident, setDelResident] = useState({
    id: "",
    table: ""
  });

  const handleAddResident = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddResident({ ...addResident, [name]: value });
  }

  const addResidentRow = (e) => {
    e.preventDefault();
    //axios.post("http://localhost/siremar_data/Add_resident.php", { userData: addResident }).then(
    axios.post("http://localhost:8000/residents", addResident).then(
      res => {
        console.log("Response Data after Add Resident: " + Object.values(res.data));
        if (res.data.message === 'Success') {
          alert(res.data.response_msg);
          handleAddResidentReset(e);
        }
        else {
          alert("Email ID Already registered.");
          handleAddResidentReset(e);
        }
      })
    handleAddResidentReset(e);
  };

  const handleAddResidentReset = (e) => {
    e.preventDefault();
    setAddResident({ name: "", birthdate: "", contact_no: "", gender: "", email: "", password: "" });
  }

  const handleDelete = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDelResident({ id: value, table: name });
  }

  const deleteRow = (e) => {
    e.preventDefault();
    //axios.post("http://localhost/siremar_data/Delete_resident.php", { delResident: delResident }).then(
    axios.get("http://localhost:8000/residents/delete/" + delResident.id).then(
      res => {
        if (res.data.message === 'Success') {
          alert("Resident Record Deleted Successfully.");
          handleDelReset(e);
        } else {
          alert("Resident Record Not Found.");
          handleDelReset(e);
        }
      })
    handleDelReset(e);
  };

  const handleDelReset = (e) => {
    e.preventDefault();
    setDelResident({ id: "", table: "" });
  }


  return (
    <div>
      <div>
        <h1>Manage Residents.</h1><br/><br/>
      </div>
      <div>
        <table className="dashboardTableData">
          <caption>Resident Details</caption>
          <thead><tr>
            <th>Resident ID</th>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Number</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr></thead>
          {
            residentData.map((res) => {
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
            <td>Add Resident</td>
            <td><input name="name" value={addResident.name} onChange={handleAddResident} className="td-w" placeholder="name"></input></td>
            <td><input name="birthdate" value={addResident.birthdate} onChange={handleAddResident} className="td-w" placeholder="yyyy-mm-dd"></input></td>
            <td><input name="contact_no" value={addResident.contact_no} onChange={handleAddResident} className="td-w" placeholder="10 Digits only"></input></td>
            <td><input name="gender" value={addResident.gender} onChange={handleAddResident} className="td-w" placeholder='Male/Female'></input></td>
            <td><input name="email" value={addResident.email} onChange={handleAddResident} className="td-w" placeholder="Email"></input></td>
            <td><input name="password" value={addResident.password} onChange={handleAddResident} className="td-w" placeholder="Password"></input></td>
            <td className="link " onClick={addResidentRow}>Add</td>
          </tr>
        </table>
      </div>
      <form onSubmit={deleteRow}>
        <p>Delete Resident Id: <input type="text" name="Resident" value={delResident.id} onChange={handleDelete} />   <input type="submit" value="Delete" /></p>
      </form>
    </div>
  )
}

export default AdminResident
