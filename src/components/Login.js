// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });

      const { userId, token, username, email: userMail, userType } = response.data;

      // Store the token in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);
      localStorage.setItem('email', userMail);
      localStorage.setItem('userType', userType);

      console.log('Login successful', response.data);
      setIsAuthenticated(true);

      console.log('User ID:', userId);
      console.log('User Token:', token);
      console.log('User Email:', userMail);
      console.log('User Type:', userType);

      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  useEffect(() => {
    // Check if the token is present in local storage
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    if (storedToken && storedUserId) {
      setIsAuthenticated(true);
      console.log('User ID:', storedUserId);
      console.log('User Token:', storedToken);
    }
  }, [setIsAuthenticated]);

  return (
    <Container maxWidth="xs">
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
