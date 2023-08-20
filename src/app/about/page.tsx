import React from "react";
import HeroAbout from "./sections/hero/HeroAbout";
import Welcome from "./sections/welcome/Welcome";
import Ideal from "./sections/ideal/Ideal";
import Mission from "./sections/mission/Mission";

export default function About() {
  return (
    <>
      <HeroAbout />
      <Welcome />
      <Ideal />
      <Mission />
    </>
  );
}
