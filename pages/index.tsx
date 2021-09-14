import type { NextPage } from "next";
import React from "react";
import { Section } from "../layout/Section";
import { Footer } from "../layout/Footer";
import { Meta } from "../layout/Meta";
import { Home } from "../layout/Home";

const HomePage: NextPage = () => {
  return (
    <div className="main-container">
      <Meta></Meta>

      <Section>
        <Home />
      </Section>

      <Footer />
    </div>
  );
};

export default HomePage;
