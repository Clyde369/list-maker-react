import React from 'react'
import classes from './AddUser.css'
import Card from '../UI/Card'
import Button from '../UI/Button'


const AddUser = (props) => {
   const addUserHandler = (event) => {
      event.preventDefault();
   }
  return (
  <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <div class="mb-3 formDiv-container">
        <label for="username" class="form-label">Enter Username</label>
        <input type="username" class="form-control" id="username" aria-describedby="userNameHelp"/>
        <div id="userNameHelp" class="form-text">Please Enter your username here</div>
      </div>
      <div class="mb-3 formDiv-container">
        <label for="age" class="form-label">Enter Age (years)</label>
        <input type="number" class="form-control" id="age" aria-describedby="ageHelp"/>
        <div id="ageHelp" class="form-text">Please Enter your age here</div>
        <br/>
        {/* button using dynamic module styling  */}
        {/* <Button type='submit'>Add user</Button> */}
        <button class="btn btn-success">Add user</button>
      </div>
    </form>
  </Card>
  )
}

export default AddUser