import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './styles.css';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(email, password);
    login(res.data.token);
  };

  return (
    <div class="t-cont">
    <form onSubmit={handleSubmit}>
      <div class="l-card">
      <h2 class="head">Login</h2>
      <label for="email">Email:</label><br/>
      <input id="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /><br/>
      <label for="pass">Password:</label><br/>
      <input id="pass" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required /><br/>
      <button type="submit">Login</button>
      </div>
    </form>
    </div>
  );
};

export default Login;
