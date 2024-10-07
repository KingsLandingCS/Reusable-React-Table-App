// src/shared/components/ServiceManagement.js
import React from 'react';
import Table from '../../shared/table/Table';

// Sample data for services
const serviceData = [
    { id: 1, serviceName: 'Web Hosting', price: '$10/month', status: 'Active' },
    { id: 2, serviceName: 'Domain Registration', price: '$15/year', status: 'Inactive' },
    // Add more service data as needed
];

// Define columns specific to Service Management
const serviceColumns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Service Name', accessor: 'serviceName' },
    { Header: 'Price', accessor: 'price' },
    { Header: 'Status', accessor: 'status' },
];

const ServiceManagement = () => {
    return (
        <div>
            <h1>Service Management</h1>
            <Table columns={serviceColumns} data={serviceData} />
        </div>
    );
};

export default ServiceManagement;
