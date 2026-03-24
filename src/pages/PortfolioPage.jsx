import React from "react";
import { Helmet } from "react-helmet-async";
import Portfolio from "@components/sections/Portfolio/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Eternal Moments Wedding Photography | Portfolio</title>
        <meta
          name="description"
          content="Browse our wedding photography portfolio — timeless and romantic images captured with care."
        />
      </Helmet>

      <Portfolio />
    </>
  );
};

export default PortfolioPage;
