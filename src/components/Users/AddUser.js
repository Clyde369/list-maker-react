import React from 'react'
import './AddUser.css'

const AddUser = (props) => {
   const addUserHandler = (event) => {
      event.preventDefault();
   }
  return (
  <form onSubmit={addUserHandler}>
    <div class="mb-3 formDiv-container">
      <label for="username" class="form-label">Enter Username</label>
      <input type="username" class="form-control" id="username" aria-describedby="userNameHelp"/>
      <div id="userNameHelp" class="form-text">Please Enter your username here</div>
    </div>
    <div class="mb-3 formDiv-container">
      <label for="age" class="form-label">Enter Age</label>
      <input type="number" class="form-control" id="age" aria-describedby="ageHelp"/>
      <div id="ageHelp" class="form-text">Please Enter your age here</div>
    </div>
  </form>
  )
}

export default AddUser