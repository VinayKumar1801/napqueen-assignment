import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Header />
        <div className="widgets">
          <Widget type="adSpendReturn" />
          <Widget type="clickThroughRateClicks" />
          <Widget type="conversionRateOrders" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
