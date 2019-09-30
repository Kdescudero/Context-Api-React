import React, { useState } from "react";

const AddUserForm = ({ addNewUser }) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputOnchange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const disable = user.name === "" || user.username === "";

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addNewUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputOnchange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputOnchange}
      />
      <button disabled={disable}>Add new user</button>
    </form>
  );
};

export default AddUserForm;
