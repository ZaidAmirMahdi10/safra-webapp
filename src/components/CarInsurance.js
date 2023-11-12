// src/components/CarInsurance.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const CarInsurance = () => {
  const [carPrice, setCarPrice] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carType, setCarType] = useState('Private');
  const [passengerCount, setPassengerCount] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', {
      carPrice,
      engineSize,
      carModel,
      carYear,
      carType,
      passengerCount,
    });
  };

  return (
    <Container maxWidth="xs">
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Car Insurance
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <label htmlFor="carPrice">Price of the car</label>
            <TextField
              placeholder='Price of the car'
              id="carPrice"
              fullWidth
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <label htmlFor="engineSize">Engine size</label>
            <TextField
              placeholder='Engine size'
              id="engineSize"
              fullWidth
              value={engineSize}
              onChange={(e) => setEngineSize(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <label htmlFor="carModel">Model</label>
            <TextField
              placeholder='Model'
              id="carModel"
              fullWidth
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <label htmlFor="carYear">Year</label>
            <TextField
              placeholder='Year'
              id="carYear"
              fullWidth
              value={carYear}
              onChange={(e) => setCarYear(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <label htmlFor="carType">Type</label>
            <Select id="carType" value={carType} onChange={(e) => setCarType(e.target.value)}>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Taxi">Taxi</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <label htmlFor="passengerCount">Number of passengers</label>
            <TextField
              placeholder='Number of passengers'
              id="passengerCount"
              fullWidth
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
            />
          </FormControl>
          <br/><br/>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Calculate Price
          </Button>
        </form>
      </div>
    </Container>
  );
};


export default CarInsurance;