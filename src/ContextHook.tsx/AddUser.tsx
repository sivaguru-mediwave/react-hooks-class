import React, { useContext, useState } from 'react'
import { AppContext } from './contextAPI'

const AddUser = () => {
     const { dispatchUserEvent }: any = useContext(AppContext)
     const [name, setName] = useState('')
     const [age, setAge] = useState('')
     const [bio, setBio] = useState('')

     const handleAddUser = () => {
          const user = { id: Math.random(), name, age, bio }
          dispatchUserEvent('ADD_USER', { newUser: user })
          setName('')
          setAge('')
          setBio('')
     }

     return (
          <div>
               <h5>Add New User</h5>
               <div className="form-group m-3">
                    <label>Name:</label>
                    <input
                         type="text"
                         name="name"
                         value={name}
                         className="form-control"
                         onChange={(e) => {
                              setName(e.target.value)
                         }}
                         placeholder="name"
                    />
               </div>

               <div className="form-group m-3">
                    <label>Age:</label>
                    <input
                         type="text"
                         value={age}
                         className="form-control"
                         name="age"
                         onChange={(e) => {
                              setAge(e.target.value)
                         }}
                         placeholder="age"
                    />
               </div>

               <div className="form-group m-3">
                    <label>Bio:</label>
                    <textarea
                         value={bio}
                         className="form-control"
                         onChange={(e: any) => {
                              setBio(e.target.value)
                         }}
                         placeholder="bio"
                    />
               </div>

               <button
                    type="button"
                    className="btn btn-secondary m-3"
                    onClick={handleAddUser}
               >
                    Add User
               </button>
          </div>
     )
}

export default AddUser
