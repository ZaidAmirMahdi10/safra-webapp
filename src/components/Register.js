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

import classes from "./Register.module.css";

const Register = () => {
  const [userType, setUserType] = useState("admin");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState(null);
  const [companyDocs, setCompanyDocs] = useState(null);
  const navigate = useNavigate();

  function handleLogo(event) {
    setLogo("");
    // const file = event.target.files[0];
    // setLogo(file);
    // console.log(file)
  }

  function handleCompanyDocs(event) {
    setCompanyDocs("");
    // setFileUrl(URL.createObjectURL(file));
    // const file = event.target.files[0];
    // setCompanyDocs(file);
  }

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        userType,
        username,
        email,
        password,
        location,
        website,
        logo,
        companyDocs,
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
              label={
                userType === "admin"
                  ? "Username"
                  : userType === "company"
                  ? "Company name"
                  : "Customer name"
              }
              fullWidth
              required
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {userType === "company" && (
              <>
                <TextField
                  label="Location"
                  type="text"
                  fullWidth
                  required
                  margin="normal"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <TextField
                  label="Website"
                  type="text"
                  fullWidth
                  margin="normal"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <div className={classes["input-container"]}>
                  <input
                    accept="image/*"
                    type="file"
                    onChange={handleLogo}
                    className={classes["file-input"]}
                    id="logoInput"
                  />
                  <label htmlFor="logoInput">
                    <p className={classes["custom-file-input-button"]}>
                      <span>Company logo:</span>
                      <img src="assets/img/trip/upload.svg" />
                    </p>
                  </label>
                  {logo && (
                    <span className={classes.fileName}>{logo.name}</span>
                  )}
                </div>
                <div className={classes["input-container"]}>
                  <input
                    accept="image/*"
                    type="file"
                    onChange={handleCompanyDocs}
                    className={classes["file-input"]}
                    id="companyDocsInput"
                  />
                  <label htmlFor="companyDocsInput">
                    <p className={classes["custom-file-input-button"]}>
                      <span>Company document:</span>
                      <img src="assets/img/trip/upload.svg" />
                    </p>
                  </label>
                  {companyDocs && (
                    <span className={classes.fileName}>{companyDocs.name}</span>
                  )}
                </div>
              </>
            )}
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
