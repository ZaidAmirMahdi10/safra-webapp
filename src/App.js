// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Safra from "./components/Safra";
import Logout from "./components/Logout";
import Feed from "./components/Feed";
import { ProvideAuth } from "./hooks/useAuth";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ViewTrip from "./Pages/Trips/ViewTrip";
import BookTrip from "./Pages/Trips/BookTrip";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ProvideAuth>
        <Navigation />

        <Routes>
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/feed"
            element={isAuthenticated ? <Feed /> : <Navigate to="/login" />}
          />
          <Route path="/explore" element={<Location />} />
          <Route path="/safra-page" element={<Safra />} />
          <Route
            path="/logout"
            element={<Logout setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/trip/:id" element={<ViewTrip />} />
          <Route path="/book" element={<BookTrip />} />
        </Routes>

        <Footer />
      </ProvideAuth>
    </Router>
  );
}

export default App;
