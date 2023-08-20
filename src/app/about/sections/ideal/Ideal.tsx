import React from "react";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import style from "./style.module.css";
const data = [
  {
    id: 1,
    title: "Vast Experience",
    description:
      "Over 5 years of experience in software development, covering a variety of business domains",
    src: "/ideal/agile 1.svg",
    width: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 2,
    title: "сustomer focus",
    description:
      "We strive to bring the greatest value for our client through the best-quality and on-time work",
    src: "/ideal/customer-review 2.svg",
    width: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 3,
    title: "Full Agility",
    description:
      "Adjusting to your preferences and requirements in order to maximize the efficiency of cooperation",
    src: "/ideal/peace 2.svg",
    width: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 4,
    title: "сustomer focus",
    description:
      "We strive to bring the greatest value for our client through the best-quality and on-time work",
    src: "/ideal/agile 1.svg",
    width: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 5,
    title: "Full Agility",
    description:
      "Adjusting to your preferences and requirements in order to maximize the efficiency of cooperation",
    src: "/ideal/customer-review 2.svg",
    width: 70,
    heigth: 70,
    alt: "image",
  },
  {
    id: 6,
    title: "Vast Experience",
    description:
      "Over 5 years of experience in software development, covering a variety of business domains",
    src: "/ideal/peace 2.svg",
    width: 70,
    heigth: 70,
    alt: "image",
  },
];

export default function Ideal() {
  return (
    <section className={style.ideal}>
      <Container>
        <ul className={style.ideal__list}>
          {data.map((item) => {
            return (
              <li className={style.list__item} key={item.id}>
                <div className={style.item__image}>
                  <Image
                    src={item.src}
                    width={item.width}
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
