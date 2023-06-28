import React, { useState } from 'react'
import "./header.scss"
import { MenuItem, Select, TextField } from '@mui/material';
const Header = () => {
      const [selectedValue, setSelectedValue] = useState("Market Place");
      const [adValue, setAdValue] = useState("Ad. Type");

      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
      const handleAdChange = (event) => {
        setAdValue(event.target.value);
      };
       const [startDate, setStartDate] = useState("");
       const [endDate, setEndDate] = useState("");

       const handleStartDateChange = (event) => {
         setStartDate(event.target.value);
       };

       const handleEndDateChange = (event) => {
         setEndDate(event.target.value);
       };


 const currentDate = new Date().toISOString().slice(0, 16);

  return (
    <div className="mainHeader">
      <div className="heading">Advertising</div>
      <div className="header">
        <div className="left">
          <div>
            <div>
              <label htmlFor="">Market Place</label>
            </div>
            <div>
              <Select
                value={selectedValue}
                onChange={handleChange}
                style={{ height: "32px", width: "200px", margin: "10px 0px" }}
              >
                <MenuItem value={"Market Place"}>Market Place</MenuItem>
                <MenuItem value={10}>Dummy Data 1</MenuItem>
                <MenuItem value={20}>Dummy Data 2</MenuItem>
                <MenuItem value={30}>Dummy Data 3</MenuItem>
              </Select>
            </div>
          </div>
          <div>
            <div>
              <div>
                <label htmlFor="">Ad Type</label>
              </div>
              <div>
                <Select
                  value={adValue}
                  onChange={handleAdChange}
                  style={{ height: "32px", width: "200px", margin: "10px 0px" }}
                >
                  <MenuItem value={"Ad. Type"}>Ad. Type</MenuItem>
                  <MenuItem value={10}>Dummy Data 1</MenuItem>
                  <MenuItem value={20}>Dummy Data 2</MenuItem>
                  <MenuItem value={30}>Dummy Data 3</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <div style={{ textAlign: "right" }}>
              <label htmlFor="">Date & Time</label>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
              <div>
                <TextField
                  type="datetime-local"
                //   label="Start Date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  variant="outlined"
                  style={{ width: "200px", height: "32px", margin: "10px 0px" }}
                  inputProps={{style: { height: "20px", padding: "8px" }, min: currentDate }}
                />
              </div>
              <div>
                <TextField
                  type="datetime-local"
                //   label="End Date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  variant="outlined"
                  style={{ width: "200px", height: "32px", margin: "10px 0px" }}
                  inputProps={{ style: { height: "20px", padding: "8px" },min: startDate || currentDate }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header