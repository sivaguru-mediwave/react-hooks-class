import React, { useState } from 'react'
import contextImage from '../assets/img/usecontext.png'
import AddUser from './AddUser'
import { AppContext } from './contextAPI'
import UserList from './UserList'

interface ContextHookProps {}

const ContextHook: React.FC<ContextHookProps> = () => {
     const [users, setUsers] = useState<any>([])
     const dispatchUserEvent = (actionType: any, payload: any) => {
          switch (actionType) {
               case 'ADD_USER':
                    setUsers([...users, payload.newUser])
                    return
               case 'REMOVE_USER':
                    setUsers(
                         users.filter((user: any) => user.id !== payload.userId)
                    )
                    return
               default:
                    return
          }
     }
     return (
          <div className="container">
               <AppContext.Provider value={{ users, dispatchUserEvent }}>
                    <div className="card px-3 py-3 mb-4">
                         <h1>React useContext hook</h1>
                         <div className="card-body">
                              <h4>What are React useContext hook</h4>
                              <p>
                                   React’s useContext hook makes it easy to pass
                                   data throughout your app without manually
                                   passing props down the tree
                              </p>
                              <h4>
                                   Using the context in React requires 3 simple
                                   steps:
                              </h4>
                              <ul>
                                   <li>
                                        <p>creating the context</p>
                                   </li>
                                   <li>
                                        <p>providing the context</p>
                                   </li>
                                   <li>
                                        <p>consuming the context</p>
                                   </li>
                              </ul>
                              <img
                                   className="state-image"
                                   src={contextImage}
                                   alt=""
                              />
                              <br />
                              <br />
                              <h4>useContext Example:</h4>
                              <AddUser />
                              <hr />
                              <UserList />
                         </div>
                    </div>
               </AppContext.Provider>
          </div>
     )
}

export default ContextHook
