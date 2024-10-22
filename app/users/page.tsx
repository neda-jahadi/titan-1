import UserTable from './UserTable';
import Link from 'next/link';
interface Props {
  searchParams : {sortOrder : string}
}

const UsersPage = (props: Props) => {
    
  return (
    <div>
        <h1>Users</h1>
        <Link href="users/new" className="btn">New User</Link>
        <UserTable sortOrder = {props.searchParams.sortOrder} />
    </div>
  )
}

export default UsersPage
