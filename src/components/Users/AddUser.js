import React, {useState} from 'react'
import classes from './AddUser.css'
import Card from '../UI/Card'
import Button from '../UI/Button'


const AddUser = (props) => {
  const addUserHandler = (event) => {
      event.preventDefault();
      console.log(enteredUsername, enteredAge);
  }
  
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
    
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  return (
  <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <div class="mb-3 formDiv-container">
        <label htmlFor="username" class="form-label">Enter Username</label>
        <input type="username" class="form-control" id="username" onChange={usernameChangeHandler} />
        <div id="userNameHelp" class="form-text">Please Enter your username here</div>
      </div>
      <div class="mb-3 formDiv-container">
        <label htmlFor="age" class="form-label">Enter Age (years)</label>
        <input type="number" class="form-control" id="age" onChange={ageChangeHandler} />
        <div id="ageHelp" class="form-text">Please Enter your age here</div>
        <br/>
        {/* button using dynamic module styling  */}
        <Button type='submit'>Add user</Button>
        <button class="btn btn-success" type="submit">Add user</button>
      </div>
    </form>
  </Card>
  )
}

export default AddUser