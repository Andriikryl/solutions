import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import NavGroup from "@/components/navGroup/NavGroup";
import { Button } from "@/components/button/Button";

const currentPage = "Resources";

export default function HeroResources() {
  return (
    <section className={style.hero}>
      <Container>
        <NavGroup currentPage={currentPage} />
        <div className={style.hero__box}>
          <span className={style.hero__subTitle}>Blog</span>
          <h1 className={style.hero__title}>Resources</h1>
          <p className={style.hero__description}>
            Exchange of experience and knowledge is an important part of the IT
            industry. That is why ID Al. Solution team shares its experience
            with you in this collection of materials
          </p>
          <Button>About Us</Button>
        </div>
      </Container>
    </section>
  );
}
