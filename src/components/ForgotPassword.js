// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Add your forgot password logic here
      console.log('Forgot password functionality to be implemented.');
    } catch (error) {
      console.error('Forgot password failed:', error.response.data.error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={handleForgotPassword} sx={{ width: '100%', mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Send Reset Email
          </Button>
        </Box>
        <Link to="/">Remembered your password? Login here.</Link>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
