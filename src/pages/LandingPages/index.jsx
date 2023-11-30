import React from "react";
import Navbar from "../../components/Navbar";
import Navbar_section from "../../components/Navbar_Section";
import OurServices from "../../components/OurServices";
import Why_us from "../../components/Why_Us";

const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <Navbar_section />
      <OurServices />
      <Why_us />
    </div>
  );
};

export default LandingPages;
