// src/components/Safra.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
  FormControl,
  TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import ProgramDay from "./ui/ProgramDay";

import "./Safra.css";

const Safra = () => {
  const [safraName, setSafraName] = useState("New Safra 1");
  const [safraType, setSafraType] = useState("");
  const [safraDescription, setSafraDescription] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [safraPrice, setSafraPrice] = useState("500");
  const [offer, setOffer] = useState("");

  const [safraProgramme, setSafraProgramme] = useState([
    { dayNum: 1, program: "" },
    { dayNum: 2, program: "" },
    { dayNum: 3, program: "" },
  ]);

  const safraTypes = ["All", "Tourism", "Studying", "Therapeutic", "Religious"];

  const formData = {
    safraName,
    safraType,
    safraDescription,
    dateFrom: new Date(dateFrom),
    dateTo: new Date(dateTo),
    safraPrice,
    safraProgramme,
    offer,
  };

  const handleAddDay = () => {
    setSafraProgramme((prev) => {
      return [...prev, { dayNum: prev.length + 1, program: "" }];
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/createTrip", {
        ...formData,
      });

      if (response.ok) {
        console.log("Safra submitted successfully");
        // Reset form fields after successful submission
        setSafraName("");
        setSafraType("");
        setSafraDescription("");
        setDateFrom("");
        setDateTo("");
        setSafraPrice("");
        setSafraProgramme("");
        setOffer("");
      } else {
        console.error("Failed to submit Safra");
        // Handle error scenario
      }
    } catch (error) {
      console.error("Error submitting Safra:", error);
      // Handle error scenario
    }
  };

  // console.log("THis is the date 1: ", new Date(dateFrom));
  // console.log("THis is the date 2: ", dateTo);
  // console.log("THis is the form date: ", formData);

  return (
    <div className="body-content create-safra">
      <Container maxWidth="xs">
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            Safra
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <label htmlFor="safraName">Safra Name</label>
              <TextField
                placeholder="Safra Name"
                id="safraName"
                fullWidth
                value={safraName}
                onChange={(e) => setSafraName(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label htmlFor="safraType">Safra Type</label>
              <Select
                className="select-box"
                id="safraType"
                value={safraType}
                onChange={(e) => setSafraType(e.target.value)}
              >
                {safraTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label htmlFor="safraDescription">Safra Description</label>
              <TextareaAutosize
                className="textarea"
                placeholder="Safra Description"
                id="safraDescription"
                minRows={3}
                fullWidth
                value={safraDescription}
                onChange={(e) => setSafraDescription(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label htmlFor="dateFrom">Date From</label>
              <TextField
                type="date"
                id="dateFrom"
                fullWidth
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label htmlFor="dateTo">Date To</label>
              <TextField
                type="date"
                id="dateTo"
                fullWidth
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label htmlFor="safraPrice">Price</label>
              <TextField
                placeholder="Price"
                id="safraPrice"
                fullWidth
                value={safraPrice}
                onChange={(e) => setSafraPrice(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label htmlFor="offer">Offer</label>
              <TextareaAutosize
                className="textarea"
                placeholder="Offer"
                id="offer"
                minRows={3}
                fullWidth
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="h6" component="h3">
                Safra Programme
              </Typography>
              {safraProgramme.map((day) => (
                <ProgramDay
                  key={day.dayNum}
                  dayNum={day.dayNum}
                  value={day.program}
                  onChange={(e) => {
                    const updatedProgramDays = [...safraProgramme];
                    updatedProgramDays[day.dayNum - 1].program = e.target.value;
                    setSafraProgramme(updatedProgramDays);
                  }}
                />
              ))}
              <button className="add-day-button" type="button" onClick={handleAddDay}>
                Add Day
              </button>
            </FormControl>
            <br />
            <br />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Safra;
