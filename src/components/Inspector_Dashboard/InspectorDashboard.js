import React from 'react';
import InspectorBusiness from './InspectorBusiness';
import InspectorChat from './InspectorChat';
import InspectorEvent from './InspectorEvent';
import InspectorFlight from './InspectorFlight';
import InspectorResident from './InspectorResident';
import InspectorSchool from './InspectorSchool';

const InspectorDashboard = (data) => {
    const pageName = data.pageName;
    switch (pageName) {
        case 'inspectorResident':
            return <InspectorResident/>
        case 'inspectorFlight':
            return <InspectorFlight/>
        case 'inspectorSchool':
            return <InspectorSchool/>
        case 'inspectorEvent':
            return <InspectorEvent/>
        case 'inspectorBusiness':
            return <InspectorBusiness/>
        case 'inspectorChat':
            return <InspectorChat/>
        case 'inspectorDashboard':
            return <div><h3>Inspector Dashboard.</h3></div>
    }
}

export default InspectorDashboard