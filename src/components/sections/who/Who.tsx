import { Container } from "@/components/container/Container";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";

const data = [
  {
    id: 1,
    name: "Ivan Pavliuchenko",
    post: "Co-Founder",
    skills: [
      "Full-stack developer with 5+ years of experience",
      "Machine Learning & AI expert",
    ],
    avatar: {
      src: "/who/one.png",
      width: 113,
      heigth: 113,
      alt: "avatar",
    },
    social: {
      src: "/who/in.svg",
      width: 44,
      heigth: 44,
      alt: "social",
    },
  },
  {
    id: 2,
    name: "Dmytro Dubynskyi",
    post: "Co-Founder",
    skills: [
      "Full-stack developer with 5+ years of experience",
      "Cryptocurrency trading specialist",
    ],
    avatar: {
      src: "/who/two.png",
      width: 113,
      heigth: 113,
      alt: "avatar",
    },
    social: {
      src: "/who/in.svg",
      width: 44,
      heigth: 44,
      alt: "social",
    },
  },
  {
    id: 3,
    name: "Michael Pavliuchenko",
    post: "Medical Expert",
    skills: [
      "Candidate of medical sciences",
      "Cryptocurrency trading specialist",
      "Obstetrician-gynecologist with 20+ years of experience",
    ],
    avatar: {
      src: "/who/three.png",
      width: 113,
      heigth: 113,
      alt: "avatar",
    },
    social: {
      src: "/who/in.svg",
      width: 44,
      heigth: 44,
      alt: "social",
    },
  },
];

export default function Who() {
  return (
    <section className={style.who}>
      <Container>
        <span className={style.who__subTittle}>OUR Team</span>
        <h4 className={style.who__title}>
          who are <span>we</span>?
        </h4>
        <p className={style.who__description}>
          ID Al. Solutions is a place where new ideas and projects are born.
          Leveraging our long years of experience in software development, and
          partnering with experts in the field of medicine and finance, our
          team, since its foundation in the fall of 2021, has been working hard
          to ensure that our ideas do not become a “pipe dream”, but can bring
          something new and useful to the world.
        </p>
        <ul className={style.who__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.who__item}>
                <div className={style.item__image}>
                  <Image
                    src={item.avatar.src}
                    width={item.avatar.width}
                    height={item.avatar.heigth}
                    alt={item.avatar.alt}
                  />
                </div>
                <h5 className={style.item__title}>{item.name}</h5>
                <span className={style.item__ocupation}>{item.post}</span>
                <ul className={style.item__skills}>
                  {item.skills.map((item, index) => {
                    return (
                      <li className={style.skills__item} key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <a className={style.item__link} href="#">
                  <Image
                    src={item.social.src}
                    width={item.social.width}
                    height={item.social.heigth}
                    alt={item.social.alt}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
