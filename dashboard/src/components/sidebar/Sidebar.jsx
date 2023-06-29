import React from 'react'
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img
            width="50%"
            src="https://i.postimg.cc/9QDMcLws/download-removebg-preview.png"
            alt="logo"
          />
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p> */}
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          {/* <p className="title">LISTS</p> */}

          <li>
            <PersonOutlineIcon className="icon" />
            <span>Catalog</span>
          </li>

          <li>
            <StoreIcon className="icon" />
            <span>Inventory</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Advertising</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Product Intelligence</span>
          </li>
          {/* <p className="title">USEFUL</p> */}
          <li>
            <InsertChartIcon className="icon" />
            <span>Forcasting</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Report Central</span>
          </li>

          {/* <p className="title">USER</p> */}
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Reports</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Link Accounts</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar