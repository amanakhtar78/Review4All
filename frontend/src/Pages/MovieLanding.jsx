import React from "react";
import Navbar from "../Components/Navbar";
import BannerMovie from "./Movie/BannerMovie";
import AboutMovie from "./Movie/AboutMovie";
import CastEarning from "./Movie/CastEarning";
import MovieEarning from "./Movie/MovieEarning";
import TicketsSold from "./Movie/TicketsSold";
import CountryEarningsChart from "./Movie/CountryEarningsChart";
import MovieNewsAndFacts from "./Movie/MovieNewsAndFacts";
import CommentSection from "./Movie/CommentSection";
import CastAndCrew from "./Movie/CastAndCrew";
const Movie = () => {
  return (
    <div>
      <Navbar />
      <BannerMovie />
      <AboutMovie />
      <CountryEarningsChart />
      <CastEarning />
      <MovieEarning />
      <TicketsSold />
      <CastAndCrew />
      <MovieNewsAndFacts />
      <CommentSection />
    </div>
  );
};

export default Movie;
