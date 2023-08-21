import React from "react";
import HeroAbout from "./sections/hero/HeroAbout";
import Welcome from "./sections/welcome/Welcome";
import Ideal from "./sections/ideal/Ideal";
import Mission from "./sections/mission/Mission";
import Who from "@/components/sections/who/Who";
import Values from "./sections/values/Values";
import Stand from "./sections/stand/Stand";

export default function About() {
  return (
    <>
      <HeroAbout />
      <Welcome />
      <Ideal />
      <Mission />
      <Who />
      <Values />
      <Stand />
    </>
  );
}
