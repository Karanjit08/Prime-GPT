import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import HomeHeader from "./Home_Header";
import HomeBody from "./Home_Body";

const Home = () => {
  var selector = useSelector((store) => store.user);

  return (
    <div className="home-screen">
      <HomeHeader />
      <HomeBody />
    </div>
  );
};

export default Home;
