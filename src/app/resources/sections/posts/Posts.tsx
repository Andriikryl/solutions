import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    src: "/posts/post-1.jpg",
    width: 620,
    heigth: 610,
    alt: "image",
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person ",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    link: "Read more",
  },
  {
    id: 2,
    src: "/posts/post-2.jpg",
    width: 620,
    heigth: 320,
    alt: "image",
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person ",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    link: "Read more",
  },
  {
    id: 3,
    src: "/posts/post-1.jpg",
    width: 620,
    heigth: 320,
    alt: "image",
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person ",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    link: "Read more",
  },
  {
    id: 4,
    src: "/posts/post-3.jpg",
    width: 620,
    heigth: 610,
    alt: "image",
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person ",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    link: "Read more",
  },
];

export default function Posts() {
  return (
    <section className={style.posts}>
      <Container>
        <ul className={style.posts__list}>
          {data.map((item) => {
            return (
              <li className={style.list__item} key={item.id}>
                <div className={style.list__image}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                </div>
                <span className={style.item__date}>{item.date}</span>
                <h3 className={style.item__title}>{item.title}</h3>
                <p className={style.item__description}>{item.description}</p>
                <a className={style.item__link} href="#">
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
