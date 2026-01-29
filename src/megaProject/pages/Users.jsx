import { useState } from 'react';
import '../styles/Users.css';

const Users = () => {
  const [users] = useState([
    { id: 1, name: 'Ahmed Hassan', email: 'ahmed@example.com', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Fatima Khan', email: 'fatima@example.com', status: 'Active', joinDate: '2024-02-20' },
    { id: 3, name: 'Ali Raza', email: 'ali@example.com', status: 'Inactive', joinDate: '2024-01-10' },
    { id: 4, name: 'Sarah Ahmed', email: 'sarah@example.com', status: 'Active', joinDate: '2024-03-05' },
    { id: 5, name: 'John Doe', email: 'john@example.com', status: 'Active', joinDate: '2024-02-28' }
  ]);

  return (
    <div className="users-page">
      <h1>User Management</h1>
      <p className="subtitle">Manage all system users and their permissions</p>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td>
                  <button className="action-btn edit">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
