import { TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Popup.module.css";

export default function Popup({ togglePopup, userType, tripId }) {
  const [allUsers, setAllUsers] = useState({
    customer: [],
    company: [],
    admin: [],
  });
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [pageTwo, setPageTwo] = useState({ active: false, customer: "" });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setAllUsers(response.data || { customer: [], company: [], admin: [] });
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const filtered = allUsers.customer.filter((customer) =>
      customer.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
  }, [searchTerm, allUsers.customer]);

  // console.log(allUsers);

  // Popup TYPES
  const customerPopup = () => {
    return (
      <>
        <h3>Choose an option</h3>
        <div className={classes.buttons}>
          <Link to="/book" className={classes.button}>
            Continue as a guest
          </Link>
          <Link
            to={{
              pathname: "/register",
            }}
            state={{ userType: "customer", tripId: tripId }}
            className={classes.button}
          >
            Register account
          </Link>
        </div>
      </>
    );
  };

  const companyPopup = () => {
    return (
      <>
        <h3 className={classes.popupTitle}>Customers information</h3>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={classes.customerList}>
          {filteredCustomers.map((customer) => {
            return (
              <div
                key={customer.id}
                className={classes.customer}
                onClick={() =>
                  setPageTwo({
                    active: true,
                    customer: customer,
                  })
                }
              >
                <span>
                  {customer.username.length > 28
                    ? `${customer.username.slice(0, 28)}...`
                    : customer.username}
                </span>
                <button className={classes.detailsButton}>show</button>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const pageTwoPopup = () => {
    return (
      <>
        <p>{pageTwo.customer.id}</p>
        <h3 className={classes.popupTitle}>{pageTwo.customer.username}</h3>
        <p>{pageTwo.customer.email}</p>
      </>
    );
  };

  return (
    <div className={classes.popupContainer}>
      <div className={classes.overlay} onClick={() => togglePopup(false)}></div>
      <div className={classes.popup}>
        <section className={classes.popupHeader}>
          {pageTwo.active ? (
            <img
              src="/assets/img/trip/arrow-left.svg"
              alt="back to customers"
              className={classes.backIcon}
              onClick={() => setPageTwo(false)}
            />
          ) : null}
          <img
            src="/assets/img/trip/close.svg"
            alt="close popup"
            className={classes.closeIcon}
            onClick={() => togglePopup(false)}
          />
        </section>
        <section className={classes.popupBody}>
          {userType === "customer"
            ? customerPopup()
            : pageTwo.active
            ? pageTwoPopup()
            : companyPopup()}
        </section>
      </div>
    </div>
  );
}
