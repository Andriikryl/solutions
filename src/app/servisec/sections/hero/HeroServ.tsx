import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import HeroText from "@/components/heroText/HeroText";

const currentPage = "Services";
const title = "Services";
const subTitle = "What We Offer";
const description =
  "A team of highly-skilled professionals is ready to implement your vision in code using the latest and most efficient software solutions";
const btnText = "get in touch";
export default function HeroServ() {
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
