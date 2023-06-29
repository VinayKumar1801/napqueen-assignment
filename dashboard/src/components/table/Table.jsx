import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { Badge, Checkbox } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const List = () => {
  const [automationEnabled, setAutomationEnabled] = useState(false);
  const [daypartingEnabled, setDaypartingEnabled] = useState(false);
 const [rows, setRows] = useState([
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
      automation: "On",
      dayparting: "Off",
      budget: "$1000",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
      automation: "On",
      dayparting: "Off",
      budget: "$1030",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
      automation: "On",
      dayparting: "Off",
      budget: "$1300",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
      automation: "On",
      dayparting: "Off",
      budget: "$1600",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
      automation: "On",
      dayparting: "Off",
      budget: "$1059",
    },
  ]);
  const handleAutomationChange = (rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId
        ? {
            ...row,
            automation: row.automation === "On" ? "Off" : "On",
          }
        : row
    );
    setAutomationEnabled(!automationEnabled);
    setRows(updatedRows);
  };

  const handleDaypartingChange = (rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId
        ? {
            ...row,
            dayparting: row.dayparting === "On" ? "Off" : "On",
          }
        : row
    );
    setDaypartingEnabled(!daypartingEnabled);
    setRows(updatedRows);
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Selection</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Campaign Name</TableCell>
            <TableCell className="tableCell">Info</TableCell>
            <TableCell className="tableCell">Automation</TableCell>
            <TableCell className="tableCell">Dayparting</TableCell>
            <TableCell className="tableCell">Budget</TableCell>
            <TableCell className="tableCell">Bidding Strategy</TableCell>
            <TableCell className="tableCell">Spend</TableCell>
            <TableCell className="tableCell">Revenue</TableCell>
            <TableCell className="tableCell">Current Bids</TableCell>
            <TableCell className="tableCell">Impression</TableCell>
            <TableCell className="tableCell">CTR</TableCell>
            <TableCell className="tableCell">Cony Rate</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell"></TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                <Checkbox /* Add Checkbox component here */ />
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.img} alt="" className="image" /> */}
                  {row.product}
                </div>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{ display: "flex", gap: "5px" }}
              >
                <Badge color="secondary">🆎</Badge>
                <Badge color="secondary">➿</Badge>
                <Badge color="secondary">✅</Badge>
              </TableCell>
              <TableCell className="tableCell">
                <Switch
                  checked={row.automation === "On"}
                  onChange={() => handleAutomationChange(row.id)}
                />
              </TableCell>
              <TableCell className="tableCell">
                <Switch
                  checked={row.dayparting === "On"}
                  onChange={() => handleDaypartingChange(row.id)}
                />
              </TableCell>
              <TableCell className="tableCell">{row.budget}</TableCell>
              <TableCell className="tableCell">
                <u style={{ color: "blue" }}>Up & Down</u>
              </TableCell>
              <TableCell className="tableCell">${row.id}</TableCell>
              <TableCell className="tableCell">
                ${row.id + Math.floor(Math.random() * 1000)}
              </TableCell>
              <TableCell className="tableCell">
                ${Math.floor(Math.random() * 10)}
              </TableCell>
              <TableCell className="tableCell">
                {Math.floor(Math.random() * 10)}K
              </TableCell>
              <TableCell className="tableCell">
                {Math.floor(Math.random() * 10)}K
              </TableCell>
              <TableCell className="tableCell">
                {Math.floor(Math.random() * 10)}
              </TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell" style={{color:"blue"}}>Report</TableCell>
              <TableCell className="tableCell"><MoreVertIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;