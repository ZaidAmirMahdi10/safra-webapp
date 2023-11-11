// inanna-app/src/components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users. Please try again.');
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return (
      <div>
        <div>Error fetching users: {error}</div>
        <div>{JSON.stringify(error, null, 2)}</div>
      </div>
    );
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username || user.name || user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
