import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import HomeScreenHeader from "./Home_Screen_Header";

const Home = () => {
  var selector = useSelector((store) => store.user);

  return (
    <div className="home-screen">
      <HomeScreenHeader />
    </div>
  );
};

export default Home;
