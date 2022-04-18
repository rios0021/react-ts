import { useState } from 'react';


interface User {
    uid: string;
    name: string;
}

export const User = () => {

    const [user, setUser] = useState<User>( );
    
    const login = () => {
        setUser({
            uid: '1456',
            name: 'Eduardo'
        })
    }
    return (
        <div className='mt-5'>
            <h3>User: useState</h3>
            <button
                className='btn btn-outline-primary'
                onClick={login}
            >
                Login
            </button>
            <pre>{JSON.stringify(user)}</pre>
        </div>
    )
}