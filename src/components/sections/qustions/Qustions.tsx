"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import AccordionDemo from "./Accordion";

export default function Qustions() {
  return (
    <section className={style.questions}>
      <Container>
        <span className={style.questions__subTitle}>
          Frequently Asked Questions
        </span>
        <h4 className={style.questions__title}>
          most popular <span>questions</span>
        </h4>
        <AccordionDemo />
      </Container>
    </section>
  );
}
