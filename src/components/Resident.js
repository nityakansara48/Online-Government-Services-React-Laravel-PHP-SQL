import { React, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/basic.css';
import '../styles/navbar.css';
import ResidentDashboard from './Resident_Dashboard/ResidentDashboard';
import Navigation from './Navigation';

function Resident() {

    const authorised = localStorage.getItem("g_flag");
    const name = localStorage.getItem("g_name");
    const email = localStorage.getItem("g_email");

    const [pageName, setPageName] = useState("residentDashboard");

    if (authorised === "false") {
        return <Redirect to="/login" />;
    }

    const residenthandle = (page) => {
        setPageName(page);
    }

    const logouthandle = () => {
        localStorage.removeItem("g_flag");
        localStorage.removeItem("g_name");
        localStorage.removeItem("g_email");
    }

    return (
        <>
            <Navigation/>
            <br/>
            <br/>
            <div className='container-2 row'>
                <div className='column-2 left-20'>
                    <ul>
                        <li onClick={() => residenthandle("residentDashboard")}><Link><p><h2>Resident Dashboard</h2></p></Link></li>
                    </ul>
                    <ul>
                        <li onClick={() => residenthandle("residentFlight")}><Link><p>Book Flights</p></Link></li>
                        <li onClick={() => residenthandle("residentSchool")} ><Link><p>Register Schools</p></Link></li>
                        <li onClick={() => residenthandle("residentEvent")} ><Link><p>Book Events</p></Link></li>
                        <li onClick={() => residenthandle("residentBusiness")} ><Link><p>View Businesses</p></Link></li>
                        <li onClick={() => residenthandle("residentChat")} ><Link><p>Chat with Inspector</p></Link></li>
                        <li onClick={() => logouthandle()}><Link to='/login'><p>Logout</p></Link></li>
                    </ul>
                </div>
                <div className='column-2 right-80'>
                    <h2>Welcome to Siremar, {name}.</h2>
                </div>
                <div className='column-2 right-80-1'>
                    <p>
                        {
                            <ResidentDashboard pageName={pageName} />
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Resident