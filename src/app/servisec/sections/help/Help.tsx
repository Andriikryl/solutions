import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { Button } from "@/components/button/Button";
export default function Help() {
  return (
    <section className={style.help}>
      <Container>
        <div className={style.flex__group}>
          <div>
            <span className={style.help__subTitle}>WE CAN HELP!</span>
            <h4 className={style.help__title}>CONTACT US TODAY</h4>
            <p className={style.help__description}>
              ID Al. Solutions takes a different approach to IT-service
              delivery, primarily focusing on maximum value for a reasonable
              price. Our developers have more than 5 years of commercial
              experience with dozens of successfully delivered projects.
            </p>
          </div>
          <Button>Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}
