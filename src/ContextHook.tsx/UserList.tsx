import React, { useContext } from 'react'
import { AppContext } from './contextAPI'
import Users from './Users'

interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
     const { users }: any = useContext(AppContext)
     return (
          <div>
               <h5>Available Users</h5>
               {users.map((user: any) => (
                    <Users key={user.id} user={user} />
               ))}
          </div>
     )
}

export default UserList
