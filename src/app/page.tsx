import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Offer from "@/components/sections/offer/Offer";
import Who from "@/components/sections/who/Who";
import Stack from "@/components/sections/stack/Stack";
import Insigth from "@/components/sections/insigth/Insigth";
import Qustions from "@/components/sections/qustions/Qustions";
import Support from "@/components/support/Support";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Who />
      <Stack />
      <Insigth />
      <Qustions />
      <Support />
    </>
  );
}
