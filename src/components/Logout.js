// Logout.js
import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Perform any necessary cleanup on the client side (e.g., remove tokens, clear local storage)
      localStorage.removeItem("token");
      setIsAuthenticated(false);

      // Example: Make a request to the server to log out (optional)
      await axios.post("http://localhost:3001/logout");

      // Redirect to login page after logout
      navigate("/login");
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="body-content">
      <h2>Logout</h2>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
