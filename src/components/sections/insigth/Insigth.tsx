import { Button } from "@/components/button/Button";
import { Container } from "@/components/container/Container";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    src: "/insights/one.jpg",
    width: 400,
    heigth: 254,
    alt: "image",
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person ",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 2,
    src: "/insights/two.jpg",
    width: 400,
    heigth: 254,
    alt: "image",
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person ",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 3,
    src: "/insights/three.jpg",
    width: 400,
    heigth: 254,
    alt: "image",
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person ",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
];

export default function Insigth() {
  return (
    <section className={style.insigth}>
      <Container>
        <div className={style.flex__group}>
          <div>
            <span className={style.insigth__subTitle}>Resources</span>
            <h4 className={style.insigth__title}>
              Our Latest <span>Insights</span>
            </h4>
          </div>
          <Button>Read more</Button>
        </div>
        <ul className={style.insigth__list}>
          {data.map((item) => {
            return (
              <li className={style.list__item} key={item.id}>
                <div className={style.item__image}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt=""
                  />
                </div>
                <span className={style.item__date}>{item.date}</span>
                <h5 className={style.item__title}>{item.title}</h5>
                <p className={style.item__description}>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
