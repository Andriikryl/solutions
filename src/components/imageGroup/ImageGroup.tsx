import Image, { StaticImageData } from "next/image";
import React from "react";
import style from "./style.module.css";

interface IImageGroup {
  ImageOne: StaticImageData;
  ImageTwo: StaticImageData;
  ImageThree: StaticImageData;
  ImageFour: StaticImageData;
}

export default function ImageGroup({
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
}: IImageGroup) {
  return (
    <div className={style.Image__box}>
      <div className={style.image__one}>
        <Image src={ImageTwo} width={333} height={333} alt="image" />
      </div>
      <div className={style.image__two}>
        <Image src={ImageOne} width={112} height={112} alt="image" />
      </div>
      <div className={style.image__three}>
        <Image src={ImageThree} width={172} height={172} alt="image" />
      </div>
      <div className={style.image__four}>
        <Image src={ImageFour} width={112} height={112} alt="image" />
      </div>
    </div>
  );
}
