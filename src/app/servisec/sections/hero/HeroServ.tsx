import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Link from "next/link";
import { Button } from "@/components/button/Button";

export default function HeroServ() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}>
          <div className={style.hero__links}>
            <Link href="/">Home</Link>
            <Link href="#">Services</Link>
          </div>
          <span className={style.hero__subTitle}>What We Offer</span>
          <h1 className={style.hero__title}>Services</h1>
          <p className={style.hero__description}>
            A team of highly-skilled professionals is ready to implement your
            vision in code using the latest and most efficient software
            solutions
          </p>
          <Button>Get in touch</Button>
        </div>
      </Container>
    </section>
  );
}
