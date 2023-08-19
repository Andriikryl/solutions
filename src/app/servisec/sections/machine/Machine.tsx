import React from "react";
import style from "./style.module.css";
import ImageGroup from "@/components/imageGroup/ImageGroup";
import ImageOne from "public/machine/One.svg";
import ImageTwo from "public/machine/Two.svg";
import ImageThree from "public/machine/Three.svg";
import ImageFour from "public/machine/Four.svg";
import { Container } from "@/components/container/Container";
import TextGroup from "@/components/textGroup/TextGroup";

const data = [
  {
    id: 1,
    title: "Computer Vision",
  },
  {
    id: 2,
    title: "Natural Language Processing",
  },
  {
    id: 3,
    title: "Sequences and Time Series",
  },
  {
    id: 4,
    title: "Prediction etc",
  },
];

const description = [
  "   With a strong background in solving complicated Machine Learning problems, we are ready to build a powerful «brain» for your application, that will efficiently solve complicated and extraordinary tasks, using the following Neural Network technologies:",
];

const title = "Machine Learning & AI";

export default function Machine() {
  return (
    <section className={style.machine}>
      <Container>
        <div className={style.flex__group}>
          <TextGroup data={data} description={description} title={title} />
          <ImageGroup
            ImageOne={ImageTwo}
            ImageFour={ImageFour}
            ImageThree={ImageThree}
            ImageTwo={ImageOne}
          />
        </div>
      </Container>
    </section>
  );
}
