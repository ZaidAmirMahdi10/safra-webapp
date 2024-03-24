import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Trip.css";
import { Card, CardContent, Container, Typography } from "@mui/material";
import SafrasLocation from "./Location";

export default function Trip() {
  const { id } = useParams();

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

  console.log(trip);

  return (
    <div className="trip-page">
      <Container>
        <SafrasLocation />
        <h2>
          {type} Trip To: {name}
        </h2>
        <section className="main-trip-content">
          <div className="col-8">
            <div className="image">
              <img src="/assets/img/trip/trip_01.jpg" alt="City 1" />
            </div>
            <div className="text">
              <h3>Our trip program</h3>
              <p>{programme}</p>
              <h3>Our offer</h3>
              <p>{offer}</p>
            </div>
          </div>
          <div className="col-4">
            <Card sx={{ position: "relative" }}>
              <div class="ribbon">{price}$</div>
              <CardContent>
                <Typography variant="h5" component="h4">
                  {name}
                </Typography>
                <Typography color="text.secondary">
                  {trimedDate(dateFrom)} - {trimedDate(dateTo)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {timeStart} - {timeEnd}
                </Typography>
                <Typography component="p">
                  Traveling is not just about reaching a destination; it's a
                  journey of self-discovery, cultural immersion, and expanding
                  horizons.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, marginBottom: 1.5 }}>
              <CardContent>
                <Typography variant="h5" component="h4">
                  TITLE
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* <p className="date">
          <span>{dateFrom?.slice(0, dateFrom?.indexOf("T"))}</span>
          <span> ▶ </span>
          <span>{dateTo?.slice(0, dateTo?.indexOf("T"))}</span>
        </p>

        <p className="time">
          <span>{timeStart}</span>
          <span> ▶ </span>
          <span>{timeEnd}</span>
        </p>
        <div>
          <h3>Description</h3>
          <p>{desc}</p>
        </div>
        <div>
          <h3>programme</h3>
          <p>{programme}</p>
        </div>
        <div>
          <h3>offer</h3>
          <p>{offer}</p>
        </div>
        <div>
          <h3>price</h3>
          <p>{price}</p>
        </div> */}
      </Container>
    </div>
  );
}
