// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Pubs from "./pages/Pubs";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        {/* Fixed Sticky Navbar */}
        <NavBar />

        {/* Content routed via pages */}
        <main className="pt-16"> {/* 👈 top padding for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pubs" element={<Pubs />} />
              
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
    
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
