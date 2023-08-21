import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import ImageOne from "public/values/expectation 1.svg";
import ImageTwo from "public/values/improvement 1.svg";
import ImageThree from "public/values/judgement 1.svg";
import ImageFour from "public/values/respect 1.svg";

const data = [
  {
    id: 1,
    title: "Outperform Expectations",
    description:
      "We strive to produce and deliver only top-notch solutions, exceeding your expectations",
  },
  {
    id: 2,
    title: "Fairness & Transparency",
    description:
      "Openness, transparency and trust are the foundation of business relations with our partners",
  },
  {
    id: 3,
    title: "Mutually Deep Respect",
    description:
      "We deeply respect everyone we work with. After all, each of us is a source of genius",
  },
  {
    id: 4,
    title: "Continuous Improvement",
    description:
      "We never rest on our laurels. Every day brings us new knowledge and experience, which we then put to work",
  },
];

export default function Values() {
  return (
    <section className={style.values}>
      <Container>
        <h4 className={style.values__title}>Our Values</h4>
        <div className={style.flex__group}>
          <div className={style.image__box}>
            <div className={style.image__one}>
              <Image src={ImageOne} width={139} height={139} alt="image" />
            </div>
            <div className={style.image__two}>
              <Image src={ImageTwo} width={78} height={78} alt="image" />
            </div>
            <div className={style.image__three}>
              <Image src={ImageThree} width={60} height={60} alt="image" />
            </div>
            <div className={style.image__four}>
              <Image src={ImageFour} width={73} height={73} alt="image" />
            </div>
          </div>
          <ul className={style.values__list}>
            {data.map((item) => {
              return (
                <li className={style.list__item} key={item.id}>
                  <h5 className={style.item__title}>{item.title}</h5>
                  <p className={style.item__description}>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
