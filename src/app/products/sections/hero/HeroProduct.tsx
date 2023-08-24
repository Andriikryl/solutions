import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
export default function HeroProduct() {
  return (
    <section className={style.hero}>
      <Container>
        <h1 className={style.hero__title}>
          Cervical Uteri Pathology. Current Trends And New Opportunities For
          Early Diagnosis
        </h1>
      </Container>
    </section>
  );
}
