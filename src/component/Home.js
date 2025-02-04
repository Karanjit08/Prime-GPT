import React, { useEffect } from "react";
import "../App.css";
import HomeHeader from "./Home_Header";
import HomeBody from "./Home_Body";



const Home = () => {
  return (
    <div className="home-screen">
      <HomeHeader />
      <HomeBody />
    </div>
  );
};

export default Home;
