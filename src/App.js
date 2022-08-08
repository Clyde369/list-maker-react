import React, {useState} from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (userName , userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}]
    });
  }
  return (
    <div className="App">
      <h1>Simple List Maker with age</h1>
      <AddUser onAddUser={addUserHandler} />
      <UsersList 
        users={usersList}
      />
    </div>
  );
}

export default App;
