import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import ImageGroup from "@/components/imageGroup/ImageGroup";
import ImageOne from "public/offerServ/machine-learning 3.png";
import ImageTwo from "public/offerServ/mobile-development 2.png";
import ImageThree from "public/offerServ/software 3.png";
import ImageFour from "public/offerServ/web-coding 3.png";

const data = [
  {
    id: 1,
    title: "Heavy-load support",
  },
  {
    id: 2,
    title: "Microservice architecture",
  },
  {
    id: 3,
    title: "Reactive approach",
  },
];

const dataText = [
  "Web application development is a dynamic and ever-evolving field that plays a crucial role in shaping our digital world. With the exponential growth of the internet and the increasing demand for online services, web applications have become an integral part of our daily lives. From e-commerce platforms and social networking sites to productivity tools and streaming services, web applications offer a wide range of functionalities to cater to diverse user needs.",
  "The process of web application development involves several key steps. It begins with thorough planning and requirement analysis, where developers collaborate with stakeholders to understand their objectives and define the application's features and functionalities. This stage lays the foundation for the entire development process and ensures that the end product aligns with the client's vision.",
  "Once the planning phase is complete, the development team moves on to designing the user interface (UI) and user experience (UX) of the web application. This involves creating wireframes, mockups, and prototypes to visualize the application's structure and navigation flow. Attention is paid to usability, accessibility, and responsive design to ensure a seamless experience across different devices and platforms.",
  "After the design phase, the actual coding and development of the web application take place. Developers employ various programming languages such as HTML, CSS, JavaScript, and frameworks like React, Angular, or Django to build the application's front-end and back-end components. They also integrate databases, APIs, and other third-party services to enhance the application's functionality.",
  "Testing and quality assurance are vital stages in web application development. Rigorous testing is conducted to identify and rectify any bugs, errors, or security vulnerabilities. This includes unit testing, integration testing, performance testing, and user acceptance testing to ensure the application functions reliably and provides a smooth user experience.",
  "Once the development and testing phases are complete, the web application is ready for deployment. It is hosted on servers or cloud platforms, making it accessible to users worldwide. Continuous monitoring, maintenance, and updates are essential to ensure the application's performance, security, and scalability.",
  "Web application development is a multidisciplinary field that requires expertise in programming, design, and user experience. It empowers businesses and individuals to deliver innovative solutions, reach a wider audience, and streamline their operations. As technology continues to advance, web application development will remain at the forefront of digital innovation, shaping the way we interact and engage with the online world.",
];

export default function Offer() {
  return (
    <section className={style.offer}>
      <Container>
        <div className={style.offer__box}>
          <span className={style.offer__subTitle}>Services</span>
          <h2 className={style.offer__title}>
            What We <span>Offer</span>
          </h2>
        </div>
        <div className={style.flex__group}>
          <ImageGroup
            ImageOne={ImageOne}
            ImageTwo={ImageTwo}
            ImageThree={ImageThree}
            ImageFour={ImageFour}
          />
          <div className={style.offer__info}>
            <h3 className={style.info__title}>web application development</h3>
            <p className={style.info__description}>
              Our team is highly skilled with full-stack development of any
              web-related software, whether it is static, dynamic, portal web
              apps, or Content Management Systems (CMS).{" "}
            </p>
            <p className={style.info__description}>
              We design and create stunning applications for anyone, from
              startups to large corporations, with such up-to-date features and
              qualities:
            </p>
            <ul className={style.offer__list}>
              {data.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={style.text__box}>
          {dataText.map((item, index) => {
            return (
              <p className={style.text} key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
