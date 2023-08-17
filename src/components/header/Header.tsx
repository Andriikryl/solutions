import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Logo from "public/logo/logo.svg";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Services",
  },
  {
    id: 2,
    title: "Products",
  },
  {
    id: 3,
    title: "About Us",
  },
  {
    id: 4,
    title: "Resources",
  },
];

export default function Header() {
  return (
    <header className={style.header}>
      <Container className={style.header__container}>
        <div className={style.header__box}>
          <a href="#">
            <Image src={Logo} width={285} height={71} alt="ID LC Solutions" />
          </a>
          <nav className={style.nav}>
            <ul className={style.list}>
              {data.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    <a className={style.item__link} href="#">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button>Contact Us</button>
        </div>
      </Container>
    </header>
  );
}
