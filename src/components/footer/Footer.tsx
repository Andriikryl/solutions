import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import Logo from "public/logo/logo.svg";
import Image from "next/image";
import Teleg from "public/icons/telegram.svg";

const data = [
  {
    id: 1,
    title: "QUICK LINKS",
    links: ["About Us", "Blog Post", "Our Project", "Contact Us"],
  },
  {
    id: 2,
    title: "IT SERVICES",
    links: [
      "web application development",
      "Custom Software Development",
      "Machine Learning & AI",
      "Software Testing & QA",
    ],
  },
  {
    id: 3,
    title: "CONTACT US",
    links: ["Kyiv, Ukraine", "+38 093 647 40 70", "info@idalsolutions.com"],
  },
];

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer__top}>
          <div className={style.flex__group}>
            <Image src={Logo} width={37} height={37} alt="logo" />
            <p className={style.footer__description}>
              ID Al. Solutions is a software development team that creates
              unique IT startups and implements top-notch outsource projects
            </p>
          </div>
          <div className={style.list__box}>
            {data.map((Item) => {
              return (
                <ul className={style.footer__list} key={Item.title}>
                  <li className={style.item__title}>{Item.title}</li>
                  {Item.links.map((link, index) => {
                    return (
                      <li className={style.list__item} key={index}>
                        <a className={style.item__link} href="#">
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <div className={style.link__box}>
          <a className={style.telegram} href="#">
            <Image src={Teleg} width={20} height={20} alt="telegram" />
          </a>
          <a className={style.linkedIn} href="#">
            in
          </a>
        </div>
        <div className={style.footer__bottom}>
          <ul className={style.bottom__list}>
            <li className={style.bottom__item}>
              © ID Al. Solutions | All Rights Reserved. 2021 - 2023
            </li>
            <li className={style.bottom__item}>Terms & Conditions</li>
            <li className={style.bottom__item}>Privacy Policy</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
