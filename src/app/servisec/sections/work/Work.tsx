import { Container } from "@/components/container/Container";
import React from "react";
import style from "./style.module.css";
import { Button } from "@/components/button/Button";

const data = [
  {
    id: 1,
    titel: "Initial Assessment",
    description:
      "Once we receive a request from you, we arrange a call to go over the project concepts and specifics. Based on that, we prepare an initial assessment (estimate)",
  },
  {
    id: 2,
    titel: "Planning & Roadmap Creation",
    description:
      "Having agreed upon the initial assessment, we prepare a detailed roadmap with scope, timeline, and a dedicated team",
  },
  {
    id: 3,
    titel: "Roadmap Implementation",
    description:
      "The team performs development of your application with an Agile approach. When the core functionality is ready, the app undergoes thorough testing",
  },
  {
    id: 4,
    titel: "Result Evaluation",
    description:
      "We help you analyze the achieved result, decide & plan on further development stages or improvements",
  },
  {
    id: 5,
    titel: "Maintenance & Expansion",
    description:
      "The team works on optimization, bug fixing and new features implementation",
  },
];

export default function Work() {
  return (
    <section className={style.work}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.title__box}>
            <span className={style.work__subTitle}>work steps</span>
            <h4 className={style.work__title}>
              How We <span>Work</span>
            </h4>
          </div>
          <Button>About Us</Button>
        </div>
        <ol className={style.work__list}>
          {data.map((item) => {
            return (
              <li className={style.list__item} key={item.id}>
                <h5 className={style.item__title}>{item.titel}</h5>
                <p className={style.item__description}>{item.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
