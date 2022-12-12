import React, { useContext } from 'react'
import { AppContext } from './contextAPI'
const Users = ({ user }: any) => {
     const { dispatchUserEvent }: any = useContext(AppContext)

     const handleRemoveUser = () => {
          dispatchUserEvent('REMOVE_USER', { userId: user.id })
     }
     return (
          <div className="User">
               <div className="card m-2">
                    <ul className="list-group list-group-flush">
                         <li className="list-group-item">Name: {user.name}</li>
                         <li className="list-group-item">Age: {user.age}</li>
                         <li className="list-group-item">Bio: {user.bio}</li>
                    </ul>
                    <div className="card-body">
                         <span onClick={handleRemoveUser} className="card-link">
                              Delete user
                         </span>
                    </div>
               </div>
          </div>
     )
}

export default Users
