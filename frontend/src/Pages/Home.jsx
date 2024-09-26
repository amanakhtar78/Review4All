import React from "react";
import Banner from "./LandingPage/Banner";
import LatestRelese from "./LandingPage/LatestRelese";
import UpcomingMovie from "./LandingPage/UpcomingMovie";
import HotNews from "./LandingPage/HotNews";
import WeeklyWinners from "./LandingPage/WeeklyWinners";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <LatestRelese />
      <UpcomingMovie />
      <WeeklyWinners /> <HotNews />
    </div>
  );
};

export default Home;
