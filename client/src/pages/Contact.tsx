import React from "react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
