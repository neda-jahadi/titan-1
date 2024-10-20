import React from 'react';
import UserTable from './UserTable';
interface Props {
  searchParams : {sortOrder : string}
}

const UsersPage = (props: Props) => {
    
  return (
    <div>
        <h1>Users</h1>
        <UserTable sortOrder = {props.searchParams.sortOrder} />
    </div>
  )
}

export default UsersPage
