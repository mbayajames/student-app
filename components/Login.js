import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const hanleSubmit = (e) => {
        E.preventDefault();
        onLogin(userName, password);
    }
  return (
    <form onSubmit={hanleSubmit}>
        <input
           type="text"
           placeholder="Username"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
        />

        <input
           type="password"
           placeholder="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
    </form>
  )
}

export default Login;