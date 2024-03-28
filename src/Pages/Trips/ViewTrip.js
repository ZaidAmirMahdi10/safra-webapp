import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewTrip.css";
import {
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import SafrasLocation from "../../components/Location";
import { useAuth } from "../../hooks/useAuth";
import Modal from "../../components/ui/Modal";
import classes from "../../components/ui/Modal.module.css";

export default function ViewTrip() {
  const { id } = useParams();
  const { user } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [pageTwo, setPageTwo] = useState({ active: false, customer: "" });

  const [trip, setTrip] = useState([]);
  console.log(user);

  const [allUsers, setAllUsers] = useState({
    customer: [],
    company: [],
    admin: [],
  });
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const {
    name,
    type,
    desc,
    dateFrom,
    dateTo,
    timeStart,
    timeEnd,
    price,
    programme,
    offer,
  } = trip;

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get("http://localhost:3001/trip", {
          headers: {
            id,
          },
        });
        setTrip(response.data || []);
      } catch (error) {
        console.error("Failed to fetch Trips", error);
      }
    };
    fetchTrip();
  }, []);

  function trimedDate(date) {
    return date?.slice(0, date?.indexOf("T"));
  }

  function handleBookButton() {
    setShowModal(true);
  }

  // Popup TYPES
  // [1] Customer
  const customerModal = () => {
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
            state={{ userType: "customer", tripId: id }}
            className={classes.button}
          >
            Register account
          </Link>
        </div>
      </>
    );
  };

  // [2] Company
  const companyModal = () => {
    return (
      <>
        <h3 className={classes.popupTitle}>Passengers</h3>
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
                <button className={classes.detailsButton}>Show</button>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  // [3] Company Page 2
  const pageTwoModal = () => {
    return (
      <>
        <p>{pageTwo.customer.id}</p>
        <h3 className={classes.popupTitle}>{pageTwo.customer.username}</h3>
        <p>{pageTwo.customer.email}</p>
      </>
    );
  };

  return (
    <div className="trip-page">
      <Container>
        <SafrasLocation />
        <h2>
          {type} Trip To: {name}
        </h2>
        <section className="main-trip-content">
          <div className="row-1">
            <div className="image">
              <img src="/assets/img/trip/trip_01.jpg" alt="City 1" />
            </div>
            <div className="cards">
              <Card className="card">
                <div className="ribbon">{price}$</div>
                <CardContent className="card-content">
                  <div>
                    <h3 className="card-title">{name}</h3>
                    <Typography color="text.secondary" className="date">
                      {trimedDate(dateFrom)} - {trimedDate(dateTo)}
                    </Typography>
                  </div>
                  <Typography component="p">
                    Traveling is not just about reaching a destination; it's a
                    journey of self-discovery, cultural immersion, and expanding
                    horizons.
                  </Typography>
                  {user.userType === "customer" ? (
                    <div className="book-button-container">
                      <button
                        className="book-button"
                        onClick={handleBookButton}
                      >
                        Book
                      </button>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
              <Card className="card">
                <CardContent className="card-content">
                  <div>
                    <h3 className="card-title">Flights</h3>
                    <Typography color="text.secondary" className="date">
                      {trimedDate(dateFrom)} - {trimedDate(dateTo)}
                    </Typography>
                  </div>
                  <div>
                    <div className="partition-title">
                      <h4>Available airlines</h4>
                      <a href="/">Details</a>
                    </div>
                    <div className="row-elements">
                      <img src="/assets/img/trip/airline_01.png" />
                      <img src="/assets/img/trip/airline_02.png" />
                      <img src="/assets/img/trip/airline_03.png" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row-2">
            <section className="trip-details">
              <h3>Our trip program</h3>
              <div className="trip-programme">
                {programme?.map((day) => (
                  <div key={day.dayNum}>
                    {day.program && (
                      <>
                        <h4>Day {day.dayNum}</h4>
                        <p>{day.program}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>
            <section className="trip-details">
              <h3>Our offer</h3>
              <p>{offer}</p>
            </section>

            <button className="book-button centered" onClick={handleBookButton}>
              {user.userType === "customer" ? "Book" : "View Passengers"}
            </button>
          </div>
        </section>
      </Container>
      {showModal && (
        <Modal
          toggleModal={setShowModal}
          pageTwo={pageTwo}
          setPageTwo={setPageTwo}
        >
          {user.userType === "customer"
            ? customerModal()
            : pageTwo.active
            ? pageTwoModal()
            : companyModal()}
        </Modal>
      )}
    </div>
  );
}
