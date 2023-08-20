import React from "react";
import HeroServ from "./sections/hero/HeroServ";
import Offer from "./sections/offer/Offer";
import Machine from "./sections/machine/Machine";
import Soft from "./sections/soft/Soft";
import Testing from "./sections/testing/Testing";
import Work from "./sections/work/Work";
import Help from "./sections/help/Help";
import Stack from "@/components/sections/stack/Stack";
import Support from "@/components/support/Support";

export default function Servisec() {
  return (
    <>
      <HeroServ />
      <Offer />
      <Machine />
      <Soft />
      <Testing />
      <Work />
      <Help />
      <Stack />
      <Support />
    </>
  );
}
