import React from "react";
import PubsWhatWeOffer from "../components/PubsWhatWeOffer";

const Pubs: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Pubs We Offer</h1>
      <PubsWhatWeOffer />
    </div>
  );
};

export default Pubs;
