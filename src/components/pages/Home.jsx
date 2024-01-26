import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Hero from "../HomeComp/Hero";
import Events from "../HomeComp/Events";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
