import React, { useState, useEffect } from 'react';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace 'apiEndpoint' with the actual URL of your user API
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((res) => setUsers(res.data));
      
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
           {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
