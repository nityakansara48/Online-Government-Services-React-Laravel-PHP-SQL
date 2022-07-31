import { React, useEffect, useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import '../styles/basic.css';
import '../styles/navbar.css';
import axios from 'axios';


function Resident_old() {

    // const first = localStorage.getItem("name");
    // const first1 = localStorage.getItem("email");
    // console.log('first', first);
    // console.log('first1', first1);

    const location = useLocation();

    const [authorised, setAuthorised] = useState("false");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [flightData, setFlightData] = useState([]);
    const [schoolData, setSchoolData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [businessData, setBusinessData] = useState([]);

    useEffect(() => {
        setAuthorised(location.state.authorised);
        setName(location.state.name);
        setEmail(location.state.email);
        console.log(location.state.email);

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
    }

    useEffect(() => {
        getAllData();
    }, []);


    const [bookFlight, setBookFlight] = useState({
        flight_id: "",
        resident_email: "",
    });

    const [bookSchool, setBookSchool] = useState({
        s_id: "",
        s_class: "",
        r_email: "",
    });

    const [boolEvent, setBookEvent] = useState({
        event_id: "",
        resident_email: "",
    });


    if (useState.authorised === "false") {
        return <Redirect to="/login" />;
    }

    const gotoDashboard = (e) => {
        e.preventDefault();
    };

    const handleBookFlight = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setBookFlight({ [name]: value, resident_email: location.state.email });
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

    const handleBookSchool = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setBookSchool({ ...bookSchool, [name]: value, r_email: location.state.email });
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

    const handleBookEvent = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setBookEvent({ [name]: value, resident_email: location.state.email });
    };

    const handleBookEventSubmit = (e) => {
        e.preventDefault();
        console.log(boolEvent);
        axios.post("http://localhost/siremar_data/Book_event.php", { boolEvent: boolEvent }).then(
            res => {
                console.log("Response: "+res.data);
                if (res.data.message === 'Success') {
                    alert("Event Bookes Successfully.");
                    handleBookEventReset(e);
                } else {
                    alert(res.data.response_msg);
                    handleBookEventReset(e);
                }
            })
        handleBookEventReset(e);
    };

    const handleBookEventReset = (e) => {
        e.preventDefault();
        setBookEvent({ event_id: "" });
    };

    return (

        <>
            <div>
                <ul>
                    <li className='right bold'><Link onClick={gotoDashboard}>Siremar</Link>&nbsp;</li>
                    <li className='left'><Link to='/login'>Logout</Link>&nbsp;</li>
                    <li className='left'><Link onClick={gotoDashboard}>Resident Dashboard</Link>&nbsp;</li>
                </ul>
            </div>

            <div className='ScrollStyle'>
                <h2>Welcome to Siremar, {name}</h2>
                <div>
                    <table class="dashboardTable">
                        <tr>
                            <td>
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
                            </td>
                            <td>
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
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <table class="dashboardTableData">
                                        <caption>Event Details</caption>
                                        <thead><tr>
                                            <th>Event ID</th>
                                            <th>Event Name</th>
                                            <th>Event Date</th>
                                            <th>Discount</th>
                                            <th>Event Price</th>
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
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </table>
                                </div>
                                <form onSubmit={handleBookEventSubmit}>
                                    <p>Event Id: <input type="text" name="event_id" value={boolEvent.event_id} onChange={handleBookEvent} placeholder="Event ID" />   <input type="submit" value="Book Event" /></p>
                                </form>
                            </td>
                            <td>
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
                                </div><br />
                            </td>
                        </tr>
                    </table>
                </div>
            </div><br /><br />
            <div class="max-width-1">
                <div class="div-right">
                    <h3>Chat with Inspector</h3>
                    <div class="div-scroll-1">
                        <p>You: Hello Inspector.</p>
                        <p>Inspector: Hello {name}.</p>
                        <p>You: Hello Inspector.</p>
                        <p>Inspector: Hello {name}.</p>
                        <p>You: Hello Inspector.</p>
                        <p>Inspector: Hello {name}.</p>
                        <p>You: Hello Inspector.</p>
                        <p>Inspector: Hello {name}.</p>
                        <p>You: Hello Inspector.</p>
                        <p>Inspector: Hello {name}.</p>
                        <p>You: Hello Inspector.</p>
                        <p>Inspector: Hello {name}.</p>
                        <p>You: Hello Inspector.</p>
                    </div><br />
                    <b>Reply: </b><input type="text" placeholder='Your Message'/><br /><br />
                    <button>Send Your Message</button><br />
                </div>
            </div>
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </>
    )
}

export default Resident_old