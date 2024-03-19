// src/components/Register.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// src/components/Register.js
// ... other imports

const Register = () => {
  const [userType, setUserType] = useState("admin");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        userType,
        username,
        email,
        password,
      });
      console.log("Registration successful", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="body-content">
      <Container maxWidth="xs">
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <form>
            <FormControl fullWidth margin="normal">
              <InputLabel>User Type</InputLabel>
              <Select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="company">Company</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleRegister}
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
