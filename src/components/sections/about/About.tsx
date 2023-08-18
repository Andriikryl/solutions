import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { Button } from "@/components/button/Button";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Vast Experience",
    description:
      "Over 5 years of experience in software development, covering a variety of business domains",
    src: "/aboutIcons/agile 1.svg",
    withg: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 2,
    title: "сustomer focus",
    description:
      "We strive to bring the greatest value for our client through the best-quality and on-time work",
    src: "/aboutIcons/customer-review 2.svg",
    withg: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 3,
    title: "Full Agility",
    description:
      "Adjusting to your preferences and requirements in order to maximize the efficiency of cooperation",
    src: "/aboutIcons/peace 2.svg",
    withg: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 4,
    title: "сustomer focus",
    description:
      "We strive to bring the greatest value for our client through the best-quality and on-time work",
    src: "/aboutIcons/agile 1.svg",
    withg: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 5,
    title: "Full Agility",
    description:
      "Adjusting to your preferences and requirements in order to maximize the efficiency of cooperation",
    src: "/aboutIcons/customer-review 2.svg",
    withg: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 6,
    title: "Vast Experience",
    description:
      "Over 5 years of experience in software development, covering a variety of business domains",
    src: "/aboutIcons/peace 2.svg",
    withg: 70,
    heigth: 70,
    alt: "image",
  },
];

export default function About() {
  return (
    <section className={style.about}>
      <Container>
        <span className={style.about__descriptio}>Why choose us?</span>
        <div className={style.flex__group}>
          <h2 className={style.about__title}>
            {" "}
            <span> ideal software</span> solutions Only
          </h2>
          <Button>About Us</Button>
        </div>
        <ul className={style.about__list}>
          {data.map((item) => {
            return (
              <li className={style.list__item} key={item.id}>
                <div className={style.item__image}>
                  <Image
                    src={item.src}
                    width={item.withg}
                    height={item.heigth}
                    alt={item.alt}
                  />
                </div>
                <h3 className={style.item__title}>{item.title}</h3>
                <p className={style.item__description}>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
