import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

import "./BookTrip.css";
import axios from "axios";
import { Navigate } from "react-router";

export default function BookTrip() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    nationality: "",
  });

  const [days, setDays] = useState(
    Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(2, "0"))
  );
  const [months] = useState([
    { value: "01", name: "January" },
    { value: "02", name: "February" },
    { value: "03", name: "March" },
    { value: "04", name: "April" },
    { value: "05", name: "May" },
    { value: "06", name: "June" },
    { value: "07", name: "July" },
    { value: "08", name: "August" },
    { value: "09", name: "September" },
    { value: "10", name: "October" },
    { value: "11", name: "November" },
    { value: "12", name: "December" },
  ]);
  const [years, setYears] = useState([]);
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let year = 1900; year <= currentYear; year++) {
      yearOptions.push(year);
    }
    setYears(yearOptions);

    fetch("https://countriesnow.space/api/v0.1/countries/positions")
      .then((res) => res.json())
      .then((data) => setNationalities(data));
  }, []);

  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    const selectedYear = document.getElementById("year").value;
    updateDays(selectedMonth, selectedYear);
  };

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    const selectedMonth = document.getElementById("month").value;
    updateDays(selectedMonth, selectedYear);
  };

  const updateDays = (selectedMonth, selectedYear) => {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const dayOptions = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dayOptions.push(String(i).padStart(2, "0"));
    }
    setDays(dayOptions);
  };

  function handleFormChanges(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  console.log(formData);

  const handleBook = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/passenger", {
        formData,
      });
      console.log("Registration successful", response.data);
      Navigate("/feed");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <section className="booking-trip">
      <Container className="container">
        <h2>Passenger information</h2>
        <form>
          <div className="input-container">
            <label>First Name</label>
            <TextField
              className="text-input"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormChanges}
            />
          </div>
          <div className="input-container">
            <label>Middle Name</label>
            <TextField
              className="text-input"
              name="middleName"
              value={formData.middleName}
              onChange={handleFormChanges}
            />
          </div>
          <div className="input-container">
            <label>Last Name</label>
            <TextField
              className="text-input"
              name="lastName"
              value={formData.lastName}
              onChange={handleFormChanges}
            />
          </div>
          <div className="input-container">
            <label>Gender</label>
            <div className="radio-buttons">
              <div className="button">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleFormChanges}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="button">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleFormChanges}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="input-container">
            <label>Date of birth</label>
            <div className="date-select-boxes">
              <select
                id="day"
                name="day"
                value={formData.day}
                onChange={handleFormChanges}
              >
                <option value="">Day</option>
                {days.map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                id="month"
                name="month"
                value={formData.month}
                onChange={(e) => {
                  handleMonthChange(e);
                  handleFormChanges(e);
                }}
              >
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month.value}>
                    {month.name}
                  </option>
                ))}
              </select>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={(e) => {
                  handleYearChange(e);
                  handleFormChanges(e);
                }}
              >
                <option value="">Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="country">Nationality</label>
            <select
              id="country"
              name="nationality"
              value={formData.nationality}
              onChange={handleFormChanges}
            >
              {nationalities?.data?.map((el) => (
                <option key={el.iso2} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="book-button-container">
            <button className="book-button" onClick={handleBook}>
              Book
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
