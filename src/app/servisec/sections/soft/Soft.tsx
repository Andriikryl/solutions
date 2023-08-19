import React from "react";
import { Container } from "@/components/container/Container";
import ImageGroup from "@/components/imageGroup/ImageGroup";
import ImageOne from "public/machine/One.svg";
import ImageTwo from "public/machine/Two.svg";
import ImageThree from "public/machine/Three.svg";
import ImageFour from "public/machine/Four.svg";
import TextGroup from "@/components/textGroup/TextGroup";
import style from "./style.module.css";

const title = "Custom Software Development";

const description = [
  "ID Al. Solutions is where challenging ideas and tasks seamlessly transform into high-end software.",
  "Upgrade your current applications or create something outstanding by applying the latest and greatest design principles and methodologies.",
  "Develop a better user experience, increase performance, automate, secure, or integrate – we are here to implement your ideas.",
  "We use the latest innovative tools and leverage our extensive experience to solve your business challenges of any complexity",
];

export default function Soft() {
  return (
    <section className={style.soft}>
      <Container>
        <div className={style.flex__group}>
          <ImageGroup
            ImageOne={ImageOne}
            ImageFour={ImageFour}
            ImageThree={ImageTwo}
            ImageTwo={ImageThree}
          />
          <TextGroup title={title} description={description} />
        </div>
      </Container>
    </section>
  );
}
