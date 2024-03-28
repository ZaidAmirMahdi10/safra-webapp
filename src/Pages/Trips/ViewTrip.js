import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewTrip.css";
import { Card, CardContent, Container, Typography } from "@mui/material";
import SafrasLocation from "../../components/Location";
import Popup from "../../components/ui/Popup";

export default function ViewTrip() {
  const { id } = useParams();

  const [userType, setUserType] = useState("customer and admin");

  const [showPopup, setShowPopup] = useState(false);

  const [trip, setTrip] = useState([]);

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
    setShowPopup(true);
  }

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
                  {userType === "customer" ? (
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
              {userType === "customer" ? "Book" : "View Customers"}
            </button>
          </div>
        </section>
      </Container>
      {showPopup && (
        <Popup togglePopup={setShowPopup} userType={userType} tripId={id} />
      )}
    </div>
  );
}
