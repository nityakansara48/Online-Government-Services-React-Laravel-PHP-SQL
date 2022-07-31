import { React, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/basic.css';
import '../styles/navbar.css';
import AdminDashboard from './Admin_Dashboard/AdminDashboard';
import Navigation from './Navigation';

function Admin_New() {

    const authorised = localStorage.getItem("g_flag");
    const name = localStorage.getItem("g_name");
    const email = localStorage.getItem("g_email");

    const [pageName, setPageName] = useState("adminDashboard");

    if (authorised === "false") {
        return <Redirect to="/login" />;
    }

    const adminhandle = (page) => {
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
            <div className='container-2 row'>
                <div className='column-2 left-20'>
                    <ul>
                        <li onClick={() => adminhandle("adminDashboard")}><Link><p><h2>Admin Dashboard</h2></p></Link></li>
                    </ul>
                    <ul>
                        <li onClick={() => adminhandle("adminGraph")}><Link><p >View Report</p></Link></li>
                        <li onClick={() => adminhandle("adminResident")}><Link><p >Manage Residents</p></Link></li>
                        <li onClick={() => adminhandle("adminInspector")}><Link><p >Manage Inspectors</p></Link></li>
                        <li onClick={() => adminhandle("adminFlight")}><Link><p>Manage Flights</p></Link></li>
                        <li onClick={() => adminhandle("adminSchool")} ><Link><p>Manage Schools</p></Link></li>
                        <li onClick={() => adminhandle("adminEvent")} ><Link><p>Manage Events</p></Link></li>
                        <li onClick={() => adminhandle("adminBusiness")} ><Link><p>Manage Businesses</p></Link></li>
                        <li onClick={() => logouthandle()}><Link to='/login'><p>Logout</p></Link></li>
                    </ul>
                </div>
                <div className='column-2 right-80'>
                    <h2>Welcome to Siremar, {name}.</h2>
                </div>
                <div className='column-2 right-80-1'>
                    <p>
                        {
                            <AdminDashboard pageName={pageName} />
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Admin_New