import React from "react";
import HeroServ from "./sections/hero/HeroServ";
import Offer from "./sections/offer/Offer";
import Machine from "./sections/machine/Machine";
import Soft from "./sections/soft/Soft";

export default function Servisec() {
  return (
    <>
      <HeroServ />
      <Offer />
      <Machine />
      <Soft />
    </>
  );
}
