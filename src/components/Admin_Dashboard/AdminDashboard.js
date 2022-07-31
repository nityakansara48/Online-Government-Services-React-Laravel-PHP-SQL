import React from 'react';
import AdminResident from './AdminResident';
import AdminInspector from './AdminInspector';
import AdminFlight from './AdminFlight';
import AdminSchool from './AdminSchool';
import AdminEvent from './AdminEvent';
import AdminBusiness from './AdminBusiness';
import AdminGraph from './AdminGraph';


const AdminDashboard = (data) => {
    const pageName = data.pageName;
    switch (pageName) {
        case 'adminResident':
            return <AdminResident/>
        case 'adminGraph':
            return <AdminGraph/>
        case 'adminInspector':
            return <AdminInspector/>
        case 'adminFlight':
            return <AdminFlight/>
        case 'adminSchool':
            return <AdminSchool/>
        case 'adminEvent':
            return <AdminEvent/>
        case 'adminBusiness':
            return <AdminBusiness/>
        case 'adminDashboard':
            return <div><h3>Admin Dashboard.</h3></div>
    }
}

export default AdminDashboard