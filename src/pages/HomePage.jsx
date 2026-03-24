import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@components/sections/Hero/Hero";
import Portfolio from "@components/sections/Portfolio/Portfolio";
import Packages from "@components/sections/Packages/Packages";
import Testimonials from "@components/sections/Testimonials/Testimonials";
import ContactForm from "@components/sections/ContactForm/ContactForm";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Eternal Moments Wedding Photography | Home</title>
        <meta
          name="description"
          content="Professional wedding photography services. Capture your love story with our elegant and authentic photography style. Book your consultation today."
        />
      </Helmet>

      <Hero />
      <Portfolio />
      <Packages />
      <Testimonials />

    </>
  );
};

export default HomePage;
