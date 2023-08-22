import { Container } from "@/components/container/Container";
import React from "react";
import style from "./style.module.css";
import { Button } from "@/components/button/Button";
import MotionBlock from "./MotionBlock";
export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}>
          <div className={style.hero__info}>
            <span className={style.hero__name}>ID Al. Solutions</span>
            <h1 className={style.hero__title}>
              Synergy of Expertise <br />
              Integrity in Partnership <br />
              Ideal Solutions - as a Standard
            </h1>
            <span className={style.hero__description}>
              Experienced team of innovators and developers bringing new
              products to life
            </span>
            <div className={style.button__group}>
              <Button>Get in touch</Button>
              <Button>Services</Button>
            </div>
          </div>
        </div>
      </Container>
      <MotionBlock />
    </section>
  );
}
