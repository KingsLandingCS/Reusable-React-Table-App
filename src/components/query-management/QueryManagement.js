// src/shared/components/QueryManagement.js
import React from 'react';
import Table from '../../shared/table/Table';

// Sample data for queries
const queryData = [
    { id: 1, user: 'Alice', query: 'How to reset password?', date: '2024-10-01' },
    { id: 2, user: 'Bob', query: 'Issues with payment', date: '2024-10-02' },
    // Add more query data as needed
];

// Define columns specific to Query Management
const queryColumns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'User', accessor: 'user' },
    { Header: 'Query', accessor: 'query' },
    { Header: 'Date', accessor: 'date' },
];

const QueryManagement = () => {
    return (
        <div>
            <h1>Query Management</h1>
            <Table columns={queryColumns} data={queryData} />
        </div>
    );
};

export default QueryManagement;
