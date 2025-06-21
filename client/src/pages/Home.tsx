import React from "react";
import Hero from "../components/Hero";
import PubsGrid from "../components/PubsGrid";
import ContactForm from "../components/ContactForm";
import YourComponents from '../components/YourComponents';
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PubsGrid />
      <YourComponents />
      <ContactForm />
    </>
  );
};

export default Home;
