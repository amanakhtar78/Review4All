import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieLanding from "./Pages/MovieLanding";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/MovieLanding" element={<MovieLanding />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
