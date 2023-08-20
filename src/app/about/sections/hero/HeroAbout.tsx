import { Container } from "@/components/container/Container";
import HeroText from "@/components/heroText/HeroText";
import React from "react";
import style from "./style.module.css";

const currentPage = "About Us";
const title = "We are a Tech Partner for Startups";
const subTitle = "About Us";
const description =
  "A company of dedicated and experienced individuals, aimed at creating and delivering the ideality of software solutions";
const btnText = "get in touch";

export default function HeroAbout() {
  return (
    <section className={style.hero}>
      <Container>
        <HeroText
          title={title}
          subTitle={subTitle}
          currentPage={currentPage}
          description={description}
          btnText={btnText}
        />
      </Container>
    </section>
  );
}
