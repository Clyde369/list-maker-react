import React from 'react'
import Card from '../UI/Card'
import './UserList.css'

const UsersList = (props) => {
   return (
   <Card>
      <div class='card'>
         <div>
            {props.users.map((user) => (
               <div class='card-body'>
                  <h5 class='card-title' key={user.id}>
                     {user.name}
                  </h5>
                  <p class="card-text">({user.age} years old)</p>
                  <br/>
               </div>
            ))}
         </div>
      </div>
   </Card>
   )
}

export default UsersList