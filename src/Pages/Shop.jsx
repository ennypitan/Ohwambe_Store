import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Clients from "../Components/ClientsSection/Clients";
// import Item from "../Components/Item/Item";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";

function Shop() {
  return (
    <>
      <HeroSection />
      <Clients />
      <Popular />
      <Offer />
      <NewCollections />
    </>
  );
}

export default Shop;
