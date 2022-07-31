import React from 'react';
import ResidentBusiness from './ResidentBusiness';
import ResidentChat from './ResidentChat';
import ResidentEvent from './ResidentEvent';
import ResidentFlight from './ResidentFlight';
import ResidentSchool from './ResidentSchool';

const ResidentDashboard = (data) => {
    const pageName = data.pageName;
    switch (pageName) {
        case 'residentFlight':
            return <ResidentFlight/>
        case 'residentSchool':
            return <ResidentSchool/>
        case 'residentEvent':
            return <ResidentEvent/>
        case 'residentBusiness':
            return <ResidentBusiness/>
        case 'residentChat':
            return <ResidentChat/>
        case 'residentDashboard':
            return <div><h3>Resident Dashboard.</h3></div>
    }
}

export default ResidentDashboard