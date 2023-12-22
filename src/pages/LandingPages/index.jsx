import React from "react";
import Navbar from "../../components/Navbar";
import Navbar_section from "../../components/Navbar_Section";
import OurServices from "../../components/OurServices";
import Why_us from "../../components/Why_Us";
import Testimony from "../../components/Testimony";
import Carousels from "../../components/Carousels";
import CallToAction from "../../components/CallToAction";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <Navbar_section />
      <OurServices />
      <Why_us />
      <Testimony />
      <Carousels />
      <CallToAction />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPages;
