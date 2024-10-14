import React from 'react';
interface User {
    id: number;
    name: string;
    email: string
}
const UsersPage = async () => {
    const res = await fetch (
      'https://jsonplaceholder.typicode.com/users',
      {next: {revalidate: 10}}
    );

    const users : User[] = await res.json();
  return (
    <div>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
            {users.map(user => <table key={user.id}>
              <tr>
                <th>
                  {user.name}
                </th>
                <th>
                  {user.email}
                </th>
              </tr>
              </table> )}
        </table>
    </div>
  )
}

export default UsersPage
