import React from 'react'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
   <div>
      <div onClick={props.onConfirm}/>
      <div className={classes.modal} class="alert alert-danger" role="alert">
         <h5>{props.title}</h5>
         <p>{props.message}</p>
         <button class="btn btn-danger" onClick={props.onConfirm}>Okay, I got it </button>
      </div>
   </div>
  )
}

export default ErrorModal