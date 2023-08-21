import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
export default function Stand() {
  return (
    <section className={style.stand}>
      <Container>
        <div className={style.stand__box}>
          <div className={style.stand__prev}>
            <button className={style.stand__btn}>How can i help?</button>
          </div>
          <div className={style.stand__text}>
            <h4 className={style.stend__title}>WE STAND WITH UKRAINE!</h4>
            <p className={style.stend__description}>
              Despite the terrible war of our country with the aggressor, the ID
              Al. Solutions team continues to work and provide services to our
              clients and partners without any compromise, since our team is
              located in a safe part of Ukraine.
            </p>
            <p className={style.stend__description}>
              We are grateful for the support from around the world, but the war
              is not over yet. Part of the income of ID Al. Solutions is donated
              to the army and humanitarian needs of Ukrainians. We ask you to
              join in helping to bring our common victory closer
            </p>
            <span className={style.glory__to__Ukraine}>Слава Україні!</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
