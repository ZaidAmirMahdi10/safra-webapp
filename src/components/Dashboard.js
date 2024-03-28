// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";

import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const auth = useAuth();
  const user = auth.user;

  const [openProducts, setOpenProducts] = useState(false);
  const [productName, setProductName] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [allCompanies, setAllCompanies] = useState([]);
  const [products, setProducts] = useState([]);

  const [users, setUsers] = useState({ customer: [], company: [], admin: [] });
  const [openUsers, setOpenUsers] = useState(false);
  const [openCustomers, setOpenCustomers] = useState(false);
  const [openCompanies, setOpenCompanies] = useState(false);
  const [openAdmins, setOpenAdmins] = useState(false);
  const [customerSearch, setCustomerSearch] = useState("");
  const [companySearch, setCompanySearch] = useState("");
  const [adminSearch, setAdminSearch] = useState("");

  useEffect(() => {
    console.log("User Token in Dashboard:", user);

    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setUsers(response.data || { customer: [], company: [], admin: [] });
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    const fetchAllCompanies = async () => {
      try {
        const response = await axios.get("http://localhost:3001/companies");
        setAllCompanies(response.data || []);
      } catch (error) {
        console.error("Failed to fetch companies", error);
      }
    };

    // Function to fetch products
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3001/products");
    //     setProducts(response.data || []);
    //   } catch (error) {
    //     console.error("Failed to fetch products", error);
    //   }
    // };

    fetchUsers();
    fetchAllCompanies();
    // fetchProducts();
  }, []);

  const handleToggle = (type) => {
    if (type === "users") {
      setOpenUsers(!openUsers);
    } else if (type === "customer") {
      setOpenCustomers(!openCustomers);
    } else if (type === "company") {
      setOpenCompanies(!openCompanies);
    } else if (type === "admin") {
      setOpenAdmins(!openAdmins);
    } else if (type === "products") {
      setOpenProducts(!openProducts);
    } else if (type === "allCompanies") {
      setOpenCompanies(!openCompanies);
    }
  };

  const filterUsers = (type, searchTerm) => {
    return (
      users[type] &&
      users[type].filter((user) => {
        const username = user.username || "";
        const name = (type === "company" && user.name) || "";
        const email = user.email || "";

        return (
          username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (type === "company" &&
            name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      })
    );
  };

  const handleSelectCompany = (companyId) => {
    setSelectedCompany((prevSelected) =>
      prevSelected === companyId ? null : companyId
    );
  };

  const handleCreateProduct = async (event) => {
    try {
      event.preventDefault();

      const form = event.currentTarget;
      const productNameInput = document.getElementById("productName");
      const productName = productNameInput ? productNameInput.value : "";

      if (!productName) {
        console.error("Product name is required");
        return;
      }

      const selectedCompanyId = selectedCompany;

      if (!selectedCompanyId || isNaN(selectedCompanyId)) {
        console.error("Please select a company");
        return;
      }

      console.log("Product Name:", productName);
      console.log("Selected Company:", selectedCompanyId);

      const response = await axios.post("http://localhost:3001/products", {
        name: productName,
        companyId: selectedCompanyId,
      });

      console.log("Product creation response:", response.data);
    } catch (error) {
      console.error("Error in handleCreateProduct:", error);
    }
  };

  return (
    <div className="body-content">
      <Container maxWidth="md">
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            Dashboard
          </Typography>

          {/* Products */}
          <Typography
            variant="h5"
            align="left"
            gutterBottom
            onClick={() => handleToggle("products")}
          >
            {openProducts ? "▼" : "▶"} Products
          </Typography>

          <Collapse in={openProducts}>
            {/* List all products */}
            <List>
              {products.map((product) => (
                <ListItem key={product.id}>
                  <ListItemText
                    primary={product.name}
                    secondary={product.company?.name || ""}
                  />
                </ListItem>
              ))}
            </List>
            <br />
            {/* Create Product Form */}
            <form id="productForm">
              <TextField
                id="productName"
                label="Product Name"
                variant="outlined"
                size="small"
                fullWidth
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />

              {/* List of Companies with Checkboxes */}
              <List>
                {filterUsers("company", companySearch).map((user) => (
                  <ListItem key={user.id}>
                    <input
                      type="checkbox"
                      id={`company-${user.id}`}
                      checked={selectedCompany === user.id}
                      onChange={() => handleSelectCompany(user.id)}
                    />
                    <label htmlFor={`company-${user.id}`}>
                      <ListItemText
                        primary={user.name}
                        secondary={user.email}
                      />
                    </label>
                  </ListItem>
                ))}
              </List>

              <Button variant="contained" onClick={handleCreateProduct}>
                Create Product
              </Button>
            </form>
          </Collapse>

          <Typography
            variant="h5"
            align="left"
            gutterBottom
            onClick={() => handleToggle("users")}
          >
            {openUsers ? "▼" : "▶"} Users
          </Typography>

          <Collapse in={openUsers}>
            {/* Customers */}
            <Typography
              variant="h5"
              align="left"
              gutterBottom
              onClick={() => handleToggle("customer")}
            >
              {openCustomers ? "▼" : "▶"} Customers
            </Typography>

            <Collapse in={openCustomers}>
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setCustomerSearch(e.target.value)}
              />
              <List>
                {filterUsers("customer", customerSearch).map((user) => (
                  <ListItem key={user.id}>
                    <ListItemText
                      primary={user.username}
                      secondary={user.email}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Companies */}
            <Typography
              variant="h5"
              align="left"
              gutterBottom
              onClick={() => handleToggle("company")}
            >
              {openCompanies ? "▼" : "▶"} Companies
            </Typography>

            <Collapse in={openCompanies}>
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setCompanySearch(e.target.value)}
              />
              <List>
                {filterUsers("company", companySearch).map((user) => (
                  <ListItem key={user.id}>
                    <ListItemText primary={user.name} secondary={user.email} />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Admins */}
            <Typography
              variant="h5"
              align="left"
              gutterBottom
              onClick={() => handleToggle("admin")}
            >
              {openAdmins ? "▼" : "▶"} Admins
            </Typography>

            <Collapse in={openAdmins}>
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setAdminSearch(e.target.value)}
              />
              <List>
                {filterUsers("admin", adminSearch).map((user) => (
                  <ListItem key={user.id}>
                    <ListItemText
                      primary={user.username}
                      secondary={user.email}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Collapse>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
