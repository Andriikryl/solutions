import { Container } from "@/components/container/Container";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import classNames from "classnames";

const data = [
  {
    id: 1,
    src: "/stack/angular.svg",
    width: 48,
    heigth: 48,
    alt: "Angular",
    title: "",
  },
  {
    id: 2,
    src: "/stack/js.svg",
    width: 48,
    heigth: 48,
    alt: "",
    title: "Java Script",
  },
  {
    id: 3,
    src: "/stack/kotlin.svg",
    width: 48,
    heigth: 48,
    alt: "",
    title: "Kotlin",
  },
  {
    id: 4,
    src: "/stack/oracle.svg",
    width: 48,
    heigth: 48,
    alt: "",
    title: "Oracle",
  },
  {
    id: 5,
    src: "/stack/phyton.svg",
    width: 48,
    heigth: 48,
    alt: "",
    title: "phyton",
  },
  {
    id: 6,
    src: "/stack/spring.svg",
    width: 48,
    heigth: 48,
    alt: "",
    title: "spring",
  },
  {
    id: 7,
    src: "/stack/sql.svg",
    width: 48,
    heigth: 48,
    alt: "",
    title: "PostgreSQL",
  },
  {
    id: 8,
    src: "/stack/tensoFlowsvg.svg",
    width: 48,
    heigth: 48,
    alt: "",
    title: "TensorFlow",
  },
];

export default function Stack() {
  return (
    <section className={style.stack}>
      <Container>
        <div className={style.flex__group}>
          <div>
            <span className={style.stack__subTitle}>Technologies</span>
            <h4 className={style.stack__title}>
              a comprehensive <span>stack</span>
            </h4>
          </div>
          <p className={style.stack__description}>
            Our specialists have extensive experience in working with the most
            popular technologies, universally suitable for the implementation of
            your innovative ideas
          </p>
        </div>
        <div className={style.marquee}>
          <ul className={style.marquee__content}>
            {data.map((item) => {
              return (
                <li className={style.marquee__item} key={item.id}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
          <ul className={style.marquee__content} aria-hidden="true">
            {data.map((item) => {
              return (
                <li className={style.marquee__item} key={item.id}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.marquee}>
          <ul
            className={classNames(
              style.marquee__content,
              style.revers__animation
            )}
          >
            {data.map((item) => {
              return (
                <li className={style.marquee__item} key={item.id}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
          <ul
            className={classNames(
              style.marquee__content,
              style.revers__animation
            )}
            aria-hidden="true"
          >
            {data.map((item) => {
              return (
                <li className={style.marquee__item} key={item.id}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
