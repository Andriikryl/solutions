import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import TextGroup from "@/components/textGroup/TextGroup";
import ImageGroup from "@/components/imageGroup/ImageGroup";

import ImageOne from "public/machine/One.svg";
import ImageTwo from "public/machine/Two.svg";
import ImageThree from "public/machine/Three.svg";
import ImageFour from "public/machine/Four.svg";

const title = "Software Testing & Quality Assurance";
const description = [
  "A perfect user experience and impeccable data security are crucial for a modern application.",
  "That is why our team helps you to find and handle any possible bugs, vulnerabilities, or issues in your product via manual, automated, API, security, or performance testing.",
  "Note that we conduct QA and Software testing for every software we develop, plus we can check your application performance as a separate service",
];
export default function Testing() {
  return (
    <section className={style.testing}>
      <Container>
        <div className={style.flex__group}>
          <TextGroup title={title} description={description} />
          <ImageGroup
            ImageFour={ImageFour}
            ImageOne={ImageOne}
            ImageThree={ImageThree}
            ImageTwo={ImageTwo}
          />
        </div>
      </Container>
    </section>
  );
}
