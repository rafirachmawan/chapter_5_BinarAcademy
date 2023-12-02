import React from "react";
import Navbar from "../../components/Navbar";
import Navbar_section from "../../components/Navbar_Section";
import OurServices from "../../components/OurServices";
import Why_us from "../../components/Why_Us";
import Testimony from "../../components/Testimony";
import Carousels from "../../components/Carousels";

const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <Navbar_section />
      <OurServices />
      <Why_us />
      <Testimony />
      <Carousels />
    </div>
  );
};

export default LandingPages;
