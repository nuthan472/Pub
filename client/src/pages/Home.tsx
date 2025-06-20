import React from "react";
import Hero from "../components/Hero";
import PubsGrid from "../components/PubsGrid";
import ContactForm from "../components/ContactForm";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PubsGrid />
      <ContactForm />
    </>
  );
};

export default Home;
