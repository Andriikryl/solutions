import React from "react";
import { Container } from "@/components/container/Container";
import TargetImage from "public/mission/target 1.svg";
import Image from "next/image";
import style from "./style.module.css";
export default function Mission() {
  return (
    <section className={style.mission}>
      <Container>
        <h3 className={style.mission__title}>Our Mission</h3>
        <div className={style.flex__group}>
          <p className={style.mission__description}>
            Project implementation is not solely about writing code but is a
            deep understanding of the fundamental idea and all the complementary
            processes behind it.
          </p>
          <div className={style.mission__image}>
            <Image src={TargetImage} width={356} height={356} alt="target" />
          </div>
          <p className={style.mission__description}>
            Therefore, our mission is to create top-tier software products that
            have business value and are as useful as possible for our partners.
          </p>
        </div>
      </Container>
    </section>
  );
}
