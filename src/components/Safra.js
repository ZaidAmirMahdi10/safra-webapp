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

const Safra = () => {
  const [safraName, setSafraName] = useState("");
  const [safraType, setSafraType] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [safraPrice, setSafraPrice] = useState("");
  const [safraProgramme, setSafraProgramme] = useState("");
  const [offer, setOffer] = useState("");

  const safraTypes = ["Tourism", "Studying", "Therapeutic", "Religious"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      safraName,
      safraType,
      dateFrom,
      dateTo,
      timeStart,
      timeEnd,
      safraPrice,
      safraProgramme,
      offer,
    };

    try {
      const response = await fetch('/api/safra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Safra submitted successfully');
        // Reset form fields after successful submission
        setSafraName('');
        setSafraType('');
        setDateFrom('');
        setDateTo('');
        setTimeStart('');
        setTimeEnd('');
        setSafraPrice('');
        setSafraProgramme('');
        setOffer('');
      } else {
        console.error('Failed to submit Safra');
        // Handle error scenario
      }
    } catch (error) {
      console.error('Error submitting Safra:', error);
      // Handle error scenario
    }
  };

  return (
    <div className="body-content">
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
              <label htmlFor="timeStart">Time Start</label>
              <TextField
                type="time"
                id="timeStart"
                fullWidth
                value={timeStart}
                onChange={(e) => setTimeStart(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label htmlFor="timeEnd">Time End</label>
              <TextField
                type="time"
                id="timeEnd"
                fullWidth
                value={timeEnd}
                onChange={(e) => setTimeEnd(e.target.value)}
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
              <label htmlFor="safraProgramme">Safra Programme</label>
              <TextareaAutosize
                placeholder="Safra Programme"
                id="safraProgramme"
                minRows={3}
                fullWidth
                value={safraProgramme}
                onChange={(e) => setSafraProgramme(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label htmlFor="offer">Offer</label>
              <TextareaAutosize
                placeholder="Offer"
                id="offer"
                minRows={3}
                fullWidth
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
              />
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
