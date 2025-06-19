import Hero from "./components/Hero";
import PubsGrid from "./components/PubsGrid";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Hero />
      <PubsGrid />
      <ContactForm />
      <Footer />
    </div>
  );
}
