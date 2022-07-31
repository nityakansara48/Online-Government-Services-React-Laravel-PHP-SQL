import { React, useEffect, useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import '../styles/basic.css';
import '../styles/navbar.css';
import axios from 'axios';


function Inspector_old() {

    const location = useLocation();

    const [authorised, setAuthorized] = useState("false");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [residentData, setResidentData] = useState([]);
    const [flightData, setFlightData] = useState([]);
    const [schoolData, setSchoolData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [businessData, setBusinessData] = useState([]);

    useEffect(() => {
        setAuthorized(location.state.authorised);
        setName(location.state.name);
        setEmail(location.state.email);
    }, [location]);

    const getAllData = async () => {
        let resp = await fetch('http://localhost/siremar_data/Get_flight.php');
        setFlightData(await resp.json());
        resp = await fetch('http://localhost/siremar_data/Get_school.php');
        setSchoolData(await resp.json());
        resp = await fetch('http://localhost/siremar_data/Get_event.php');
        setEventData(await resp.json());
        resp = await fetch('http://localhost/siremar_data/Get_business.php');
        setBusinessData(await resp.json());
        resp = await fetch('http://localhost/siremar_data/Get_resident.php');
        setResidentData(await resp.json());
    }

    useEffect(() => {
        getAllData();
    }, []);

    const [addResident, setAddResident] = useState({
        name: "",
        birthdate: "",
        number: "",
        gender: "",
        email: "",
        password: "",
        role: "Resident",
    });

    const [delResident, setDelResident] = useState({
        id: "",
        table: ""
    });

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

    const [addSchool, setAddSchool] = useState({
        s_id: "",
        s_name: "",
        s_location: "",
        s_fees: "",
    });

    const [delSchool, setDelSchool] = useState({
        s_id: "",
    });

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

    if (useState.authorised === "false") {
        return <Redirect to="/login" />;
    }

    const gotoDashboard = (e) => {
        e.preventDefault();
    };

    const handleAddResident = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setAddResident({ ...addResident, [name]: value });
    }

    const addResidentRow = (e) => {
        e.preventDefault();
        axios.post("http://localhost/siremar_data/Add_resident.php", { userData: addResident }).then(
            res => {
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
        setAddResident({ name: "", birthdate: "", number: "", gender: "", email: "", password: "" });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setDelResident({ id: value, table: name });
    }

    const deleteRow = (e) => {
        e.preventDefault();
        axios.post("http://localhost/siremar_data/Delete_resident.php", { delResident: delResident }).then(
            res => {
                if (res.data.message === 'Success') {
                    alert("Resident Record Deleted Successfully.");
                } else {
                    alert("Resident Record Not Found.");
                }
            })
        handleDelReset(e);
    };

    const handleDelReset = (e) => {
        e.preventDefault();
        setDelResident({ id: "", table: "" });
    };

    const handleFlightRow = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setAddFlight({ ...addFlight, [name]: value });
    };

    const addFlightRow = (e) => {
        e.preventDefault();
        axios.post("http://localhost/siremar_data/Add_flight.php", { userData: addFlight }).then(
            res => {
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
        axios.post("http://localhost/siremar_data/Delete_flight.php", { delResident: delFlight }).then(
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

    const handleSchoolRow = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setAddSchool({ ...addSchool, [name]: value });
    };

    const addSchoolRow = (e) => {
        e.preventDefault();
        axios.post("http://localhost/siremar_data/Add_school.php", { userData: addSchool }).then(
            res => {
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
        axios.post("http://localhost/siremar_data/Delete_school.php", { delSchool: delSchool }).then(
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

    const handleEventRow = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setAddEvent({ ...addEvent, [name]: value });
    };

    const addEventRow = (e) => {
        e.preventDefault();
        axios.post("http://localhost/siremar_data/Add_event.php", { userData: addEvent }).then(
            res => {
                if (res.data.message === 'Success') {
                    alert(res.data.response_msg);
                    //handleEventRowReset(e);
                }
                else {
                    alert(res.data.response_msg);
                    //handleEventRowReset(e);
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
        axios.post("http://localhost/siremar_data/Delete_event.php", { delEvent: delEvent }).then(
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
        setDelSchool({ e_id: "" });
    };

    const handleBusinessRow = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setAddBusiness({ ...addBusiness, [name]: value });
    };

    const addBusinessRow = (e) => {
        e.preventDefault();
        axios.post("http://localhost/siremar_data/Add_business.php", { userData: addBusiness }).then(
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
        e.preventDefault(delBusiness);
        axios.post("http://localhost/siremar_data/Delete_business.php", { delBusiness: delBusiness }).then(
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

        <>
            <div>
                <ul>
                    <li className='right bold'><Link onClick={gotoDashboard}>Siremar</Link>&nbsp;</li>
                    <li className='left'><Link to='/login'>Logout</Link>&nbsp;</li>
                    <li className='left'><Link onClick={gotoDashboard}>Inspector Dashboard</Link>&nbsp;</li>
                </ul>
            </div>

            <div className='ScrollStyle'>
                <h2>Welcome to Siremar, {name}</h2>

                <div>
                    <table class="dashboardTable">
                        <tr>
                            <td colSpan="2">
                                <div>
                                    <table class="dashboardTableData">
                                        <caption>Resident Details</caption>
                                        <thead><tr>
                                            <th>Resident ID</th>
                                            <th>Name</th>
                                            <th>Birthdate</th>
                                            <th>Number</th>
                                            <th>Gender</th>
                                            <th>Email</th>
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
                                            <td><input name="number" value={addResident.number} onChange={handleAddResident} className="td-w" placeholder="10 Digits only"></input></td>
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
                            </td>
                        </tr>
                        <tr>
                            <td>
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
                            </td>
                            <td>
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
                            </td>
                        </tr>
                        <tr>
                            <td>
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
                            </td>
                            <td>
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
                            </td>
                        </tr>
                    </table>
                </div>
            </div><br /><br />
            <div class="max-width-1">
                <div class="div-right">
                    <h3>Chat with Residents</h3>
                    <select id="res_name" name="res_name">
                        <option value="Resident_1">Resident 1</option>
                        <option value="Resident_2">Resident 2</option>
                        <option value="Resident_3">Resident 3</option>
                        <option value="Resident_4">Resident 4</option>
                    </select>
                    <div class="div-scroll-1">
                        <p>You: Hello Resident.</p>
                        <p>Resident: Hello {name}.</p>
                        <p>You: Hello Resident.</p>
                        <p>Resident: Hello {name}.</p>
                        <p>You: Hello Resident.</p>
                        <p>Resident: Hello {name}.</p>
                        <p>You: Hello Resident.</p>
                        <p>Resident: Hello {name}.</p>
                        <p>You: Hello Resident.</p>
                        <p>Resident: Hello {name}.</p>
                        <p>You: Hello Resident.</p>
                        <p>Resident: Hello {name}.</p>
                    </div><br />
                    <b>Reply: </b><input type="text" placeholder='Your Message' /><br /><br />
                    <button>Send Your Message</button><br />
                </div>
            </div>
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </>
    )
}

export default Inspector_old