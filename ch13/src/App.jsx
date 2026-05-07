import { useState } from 'react'
import UserListTable from './components/UserListTable';
import UserRegister from './components/UserRegister';

function App() {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <UserRegister users={users} setUsers={setUsers} />
            <UserListTable users={users} setUsers={setUsers} />
        </div>
    )
}

export default App
