import { MenuItem, Select } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./widget.scss"

const Widget = ({ type }) => {
  let chartData;
  let chartTitle;
  let maxKey;
  let maxValue;
  let minKey;
  let minValue;

  switch (type) {
    case "adSpendReturn":
      chartData = [
        { name: "January", adSpend: 500, return: 800 },
        { name: "February", adSpend: 600, return: 900 },
        { name: "March", adSpend: 700, return: 1000 },
        { name: "April", adSpend: 800, return: 1200 },
        { name: "May", adSpend: 900, return: 1500 },
        { name: "June", adSpend: 1000, return: 1800 },
      ];
      chartTitle = "Ad Spend vs Return";
      maxKey = "return";
      minKey = "adSpend";
      maxValue = Math.max(...chartData.map((item) => item.return));
      minValue = Math.min(...chartData.map((item) => item.adSpend));
      break;
    case "clickThroughRateClicks":
      chartData = [
        { name: "January", clickThroughRate: 5.5, clicks: 200 },
        { name: "February", clickThroughRate: 6.2, clicks: 250 },
        { name: "March", clickThroughRate: 6.8, clicks: 300 },
        { name: "April", clickThroughRate: 7.1, clicks: 350 },
        { name: "May", clickThroughRate: 7.5, clicks: 400 },
        { name: "June", clickThroughRate: 8.0, clicks: 450 },
      ];
      chartTitle = "Click Through Rate vs Clicks";
      maxKey = "clicks";
      minKey = "clickThroughRate";
      maxValue = Math.max(...chartData.map((item) => item.clicks));
      minValue = Math.min(...chartData.map((item) => item.clickThroughRate));
      break;
    case "conversionRateOrders":
      chartData = [
        { name: "January", conversionRate: 2.5, orders: 50 },
        { name: "February", conversionRate: 2.8, orders: 60 },
        { name: "March", conversionRate: 3.2, orders: 70 },
        { name: "April", conversionRate: 3.5, orders: 80 },
        { name: "May", conversionRate: 3.8, orders: 90 },
        { name: "June", conversionRate: 4.0, orders: 100 },
      ];
      chartTitle = "Conversion Rate vs Orders";
      maxKey = "orders";
      minKey = "conversionRate";
      maxValue = Math.max(...chartData.map((item) => item.orders));
      minValue = Math.min(...chartData.map((item) => item.conversionRate));
      break;
    default:
      break;
  }

  return (
    <div className="chart-widget">
      <div style={{ display: "flex", justifyContent: "space-between",height:"30px" }}>
        <h5 className="chart-title">{chartTitle}</h5>
        <div style={{ display: "flex", gap: "10px" }}>
          <h5>Last 7 days</h5>
          <div>
            <Select
              style={{ height: "32px", width: "40px", margin: "10px 0px" }}
            >
              <MenuItem value={10}>Dummy Data 1</MenuItem>
              <MenuItem value={20}>Dummy Data 2</MenuItem>
              <MenuItem value={30}>Dummy Data 3</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height:"30px",
          marginBottom:"15px"
          
        }}
      >
        <h5 className="max-value">
          Max {maxKey}: {maxValue}
        </h5>
        <h5 className="min-value">
          Min {minKey}: {minValue}
        </h5>
      </div>
      <hr />
      {type === "adSpendReturn" && (
        <BarChart width={400} height={200} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="adSpend" fill="#8884d8" name="Ad Spend" />
          <Bar dataKey="return" fill="#82ca9d" name="Return" />
        </BarChart>
      )}
      {type === "clickThroughRateClicks" && (
        <LineChart width={400} height={200} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="clickThroughRate"
            stroke="#8884d8"
            yAxisId="left"
            name="Click Through Rate"
          />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#82ca9d"
            yAxisId="right"
            name="Clicks"
          />
        </LineChart>
      )}
      {type === "conversionRateOrders" && (
        <LineChart width={400} height={200} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="conversionRate"
            stroke="#8884d8"
            yAxisId="left"
            name="Conversion Rate"
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#82ca9d"
            yAxisId="right"
            name="Orders"
          />
        </LineChart>
      )}
    </div>
  );
};

export default Widget;
