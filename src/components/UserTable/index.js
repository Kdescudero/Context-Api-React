import React from "react";

const UserTable = ({ users, deleteUser, editRow }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td>No users</td>
          </tr>
        ) : (
          users.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>
                <button className="button muted-button" onClick={()=>editRow(item)}>Edit</button>
                <button className="button muted-button" onClick={()=>deleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
