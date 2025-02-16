import React, {useEffect, useState} from 'react';

function ErrorPage({user}) {
    const [users, setUsers] = useState({
        name: "",
        lastName: ""
    })
    useEffect(() => {
        setUsers(user)
    }, [user]);
    return (
        <div>
            <h1>Тебе сюда нельзя {users.name} {users.lastName} </h1>
        </div>
    );
}

export default ErrorPage;