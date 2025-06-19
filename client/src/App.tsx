// App.tsx
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PubsGrid from "./components/PubsGrid";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Fixed Sticky Navbar */}
      <NavBar />

      {/* Add top padding to avoid overlap with fixed navbar */}
      <main className="pt-16"> {/* 👈 Pushes content below fixed NavBar */}
        <section id="about">
          <Hero />
        </section>

        <section id="pubs">
          <PubsGrid />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
