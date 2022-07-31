import { React, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/basic.css';
import '../styles/navbar.css';
import InspectorDashboard from './Inspector_Dashboard/InspectorDashboard';
import Navigation from './Navigation';

function Inspector() {

    const authorised = localStorage.getItem("g_flag");
    const name = localStorage.getItem("g_name");
    const email = localStorage.getItem("g_email");

    const [pageName, setPageName] = useState("inspectorDashboard");

    if (authorised === "false") {
        return <Redirect to="/login" />;
    }

    const inspectorhandle = (page) => {
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
            <div className='container-2 row'>
                <div className='column-2 left-20'>
                    <ul>
                        <li onClick={() => inspectorhandle("inspectorDashboard")}><Link><p><h2>Inspector Dashboard</h2></p></Link></li>
                    </ul>
                    <ul>
                        <li onClick={() => inspectorhandle("inspectorResident")}><Link><p >Manage Residents</p></Link></li>
                        <li onClick={() => inspectorhandle("inspectorFlight")}><Link><p>Manage Flights</p></Link></li>
                        <li onClick={() => inspectorhandle("inspectorSchool")} ><Link><p>Manage Schools</p></Link></li>
                        <li onClick={() => inspectorhandle("inspectorEvent")} ><Link><p>Manage Events</p></Link></li>
                        <li onClick={() => inspectorhandle("inspectorBusiness")} ><Link><p>Manage Businesses</p></Link></li>
                        <li onClick={() => inspectorhandle("inspectorChat")} ><Link><p>Chat with Residents</p></Link></li>
                        <li onClick={() => logouthandle()}><Link to='/login'><p>Logout</p></Link></li>
                    </ul>
                </div>
                <div className='column-2 right-80'>
                    <h2>Welcome to Siremar, {name}.</h2>
                </div>
                <div className='column-2 right-80-1'>
                    <p>
                        {
                            <InspectorDashboard pageName={pageName} />
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Inspector