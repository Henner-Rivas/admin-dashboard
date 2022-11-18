import React from "react";
import Chart from "../../components/chart";
import Featured from "../../components/featured";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Widget from "../../components/widget";
import "./styles.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />

          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
