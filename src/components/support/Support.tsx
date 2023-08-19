import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
export default function Support() {
  return (
    <div className={style.support}>
      <Container className={style.support__container}>
        <h5 className={style.support__title}>
          Support the brave people of Ukraine
        </h5>
        <button className={style.support__button}>Support Ukraine</button>
      </Container>
    </div>
  );
}
