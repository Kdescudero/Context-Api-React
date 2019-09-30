import React, { useState } from "react";

const FormEdit = ({ currentUser, updateUser, setEditing }) => {
   
  const [user, setUser] = useState(currentUser);

  const handleInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default FormEdit;
