import React, {useEffect, useState} from 'react';

function MainPage({user}) {
    const [users, setUsers] = useState({
        name: "",
        lastName: ""
    })
    useEffect(() => {
        setUsers(user)
    }, [user]);
    return (
        <div>
            <h1>Добро пожаловать {users.name} {users.lastName} мы тебя ждали</h1>
        </div>
    );
}

export default MainPage;