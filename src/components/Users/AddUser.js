import React, {useState} from 'react'
import classes from './AddUser.css'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'


const AddUser = (props) => {
    
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const errorHandler = () => {
    setError(null)
  }

  const addUserHandler = (event) => {
      event.preventDefault();
      if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
          title: "Invalid Input",
          message: "Please enter a valid name and age"
        })
        return;
      }
      if(+enteredAge < 1 ) {
        setError({
          title: "Invalid age",
          message: "Please enter a valid age (no negative numbers)"
        })
        return;
      }
      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername('');
      setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
    
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  return (
    <div>
      {error && <ErrorModal
        onConfirm={errorHandler}
        title={error.title}
        message={error.message}
      />}
      
        <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div class="mb-3 formDiv-container">
          <label htmlFor="username" class="form-label">Enter Username</label>
          <input type="username" class="form-control" id="username" value={enteredUsername} onChange={usernameChangeHandler}  />
          <div id="userNameHelp" class="form-text">Please Enter your username here</div>
        </div>
        <div class="mb-3 formDiv-container">
          <label htmlFor="age" class="form-label">Enter Age (years)</label>
          <input type="number" class="form-control" id="age" value={enteredAge} onChange={ageChangeHandler}  />
          <div id="ageHelp" class="form-text">Please Enter your age here</div>
          <br/>
          {/* button using dynamic module styling  */}
          {/* <Button type='submit'>Add user</Button> */}
          <button class="btn btn-success" type="submit">Add user</button>
        </div>
      </form>
        </Card>
    </div>
  )
}

export default AddUser