// src/App.js
import React from 'react';
import UserManagement from './components/user-management/UserManagement';
import ServiceManagement from './components/service-management/ServiceManagement';
import QueryManagement from './components/query-management/QueryManagement';

const App = () => {
  return (
    <div>
      <UserManagement />
      <ServiceManagement />
      <QueryManagement />
    </div>
  );
};

export default App;
