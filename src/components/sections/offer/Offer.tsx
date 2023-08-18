import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import Image from "next/image";

const data = [
  {
    id: 1,
    src: "/offer/mobile-development 2.svg",
    width: 80,
    heigth: 80,
    alt: "image",
    title: "web application development",
    description: "Create a modern robust web application for your needs",
    link: "Read more",
  },
  {
    id: 2,
    src: "/offer/machine-learning 1.svg",
    width: 80,
    heigth: 80,
    alt: "image",
    title: "Custom Software Development",
    description: "Software solutions for every imaginable business needs",
  },
  {
    id: 3,
    src: "/offer/software 1.svg",
    width: 80,
    heigth: 80,
    alt: "image",
    title: "Machine Learning & AI",
    description: "Sophisticated self-taught enterprise solutions",
  },
  {
    id: 4,
    src: "/offer/web-coding 2.svg",
    width: 80,
    heigth: 80,
    alt: "image",
    title: "Software Testing & QA",
    description: "Meticulous quality control ensuring flawless operations",
  },
];

export default function Offer() {
  return (
    <section className={style.offer}>
      <Container className={style.offer__container}>
        <span className={style.offer__description}>Services</span>
        <h3 className={style.offer__title}>what we offer</h3>
        <ul className={style.offer__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <div className={style.flex__group}>
                  <h4 className={style.item__title}>{item.title}</h4>
                  <div className={style.item__image}>
                    <Image
                      src={item.src}
                      width={item.width}
                      height={item.heigth}
                      alt={item.alt}
                    />
                  </div>
                </div>
                <p className={style.item__description}>{item.description}</p>
                {item.link && (
                  <a className={style.item__link} href="#">
                    {item.link}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
