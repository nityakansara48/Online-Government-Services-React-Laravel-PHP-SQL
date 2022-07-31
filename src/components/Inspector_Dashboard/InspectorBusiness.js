import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';

function InspectorBusiness() {

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

  const [addBusiness, setAddBusiness] = useState({
    b_id: "",
    b_name: "",
    b_location: "",
    b_description: "",
    b_turnover: "",
  });

  const [delBusiness, setDelBusiness] = useState({
    b_id: "",
  });

  const handleBusinessRow = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddBusiness({ ...addBusiness, [name]: value });
  };

  const addBusinessRow = (e) => {
    e.preventDefault();
    // axios.post("http://localhost/siremar_data/Add_business.php", { userData: addBusiness }).then(
    axios.post("http://localhost:8000/business", addBusiness).then(
      res => {
        if (res.data.message === 'Success') {
          alert(res.data.response_msg);
          handleBusinessRowReset(e);
        }
        else {
          alert(res.data.response_msg);
          handleBusinessRowReset(e);
        }
      })
    handleBusinessRowReset(e);
  };

  const handleBusinessRowReset = (e) => {
    e.preventDefault();
    setAddBusiness({ b_id: "", b_name: "", b_location: "", b_description: "", b_turnover: "" });
  };

  const handleDelBusiness = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDelBusiness({ [name]: value });
  };

  const handleDeleteBusiness = (e) => {
    e.preventDefault();
    //axios.post("http://localhost/siremar_data/Delete_business.php", { delBusiness: delBusiness }).then(
    axios.get("http://localhost:8000/business/delete/" + delBusiness.b_id).then(
      res => {
        if (res.data.message === 'Success') {
          alert("Business Deleted Successfully.");
          handleDeleteBesinessReset(e);
        } else {
          alert("Business Record Not Found.");
          handleDeleteBesinessReset(e);
        }
      })
    handleDeleteBesinessReset(e);
  };

  const handleDeleteBesinessReset = (e) => {
    e.preventDefault();
    setDelBusiness({ b_id: "" });
  };

  return (
    <div>
      <div>
        <h1>Manage Besinesses.</h1><br/><br/>
      </div>
      <div>
        <table className="dashboardTableData">
          <caption>Business Details</caption>
          <thead><tr>
            <th>Business ID</th>
            <th>Business Name</th>
            <th>Business Location</th>
            <th>Business Description</th>
            <th>Business Turnover</th>
            <th>Action</th>
          </tr></thead>
          {
            businessData.map((res) => {
              return (
                <tbody>
                  <td>{res.b_id}</td>
                  <td>{res.b_name}</td>
                  <td>{res.b_location}</td>
                  <td>{res.b_description}</td>
                  <td>{res.b_turnover}</td>
                  <td>-</td>
                </tbody>
              )
            })
          }<tr>
            <td>Add Business</td>
            <td><input name="b_name" value={addBusiness.b_name} onChange={handleBusinessRow} className="td-w" placeholder="Name"></input></td>
            <td><input name="b_location" value={addBusiness.b_location} onChange={handleBusinessRow} className="td-w" placeholder="Location"></input></td>
            <td><input name="b_description" value={addBusiness.b_description} onChange={handleBusinessRow} className="td-w" placeholder="Description"></input></td>
            <td><input name="b_turnover" value={addBusiness.b_turnover} onChange={handleBusinessRow} className="td-w" placeholder="Turnover"></input></td>
            <td class="link " onClick={addBusinessRow}>Add</td>
          </tr>
        </table>
      </div>
      <form onSubmit={handleDeleteBusiness}>
        <p>Delete Business Id: <input type="text" name="b_id" value={delBusiness.b_id} onChange={handleDelBusiness} />   <input type="submit" value="Delete" /></p>
      </form>
    </div>
  )
}

export default InspectorBusiness
