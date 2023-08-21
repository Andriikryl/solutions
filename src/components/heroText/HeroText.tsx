import Link from "next/link";
import React from "react";
import { Button } from "../button/Button";
import style from "./style.module.css";
import NavGroup from "../navGroup/NavGroup";

interface IHeroText {
  currentPage: string;
  subTitle: string;
  title: string;
  description: string;
  btnText: string;
}

export default function HeroText({
  currentPage,
  subTitle,
  title,
  description,
  btnText,
}: IHeroText) {
  return (
    <div className={style.hero__box}>
      <NavGroup currentPage={currentPage} />
      <span className={style.hero__subTitle}>{subTitle}</span>
      <h1 className={style.hero__title}>{title}</h1>
      <p className={style.hero__description}>{description}</p>
      <Button>{btnText}</Button>
    </div>
  );
}
