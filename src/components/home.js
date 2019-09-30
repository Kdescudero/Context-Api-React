import React, { useState, useContext } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./fomUsers";
import FormEdit from "./formEdit";
import { AppContext } from "../contexts";

const Home = () => {
  const { usersData } = useContext(AppContext);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [users, setUsers] = useState(usersData);

  if('username' in usersData){
     console.log('Here')
  }

  const addNewUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setUsers(users.filter(item => item.id !== id));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Add Edit</h2>
              <FormEdit
                editing={editing}
                currentUser={currentUser}
                updateUser={updateUser}
                setEditing={setEditing}
              />
            </>
          ) : (
            <>
              <h2>Add user</h2>
              <AddUserForm addNewUser={addNewUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default Home;
