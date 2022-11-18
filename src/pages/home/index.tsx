import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
      <Navbar/>
      <h1>home</h1>
      </div>
    </div>
  );
};

export default Home;
