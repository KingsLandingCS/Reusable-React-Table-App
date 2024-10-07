// src/shared/components/UserManagement.js
import React from 'react';
import Table from '../../shared/table/Table';

// Sample data for users
const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    // Add more user data as needed
];

// Define columns specific to User Management
const userColumns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Role', accessor: 'role' },
];

const UserManagement = () => {
    return (
        <div>
            <h1>User Management</h1>
            <Table columns={userColumns} data={userData} />
        </div>
    );
};

export default UserManagement;
