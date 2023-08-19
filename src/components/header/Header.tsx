import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Logo from "public/logo/logo.svg";
import Image from "next/image";
import { Button } from "../button/Button";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Services",
    link: "/servisec",
  },
  {
    id: 2,
    title: "Products",
    link: "/products",
  },
  {
    id: 3,
    title: "About Us",
    link: "/about",
  },
  {
    id: 4,
    title: "Resources",
    link: "/resources",
  },
];

export default function Header() {
  return (
    <header className={style.header}>
      <Container className={style.header__container}>
        <div className={style.header__box}>
          <Link href="/">
            <Image src={Logo} width={285} height={71} alt="ID LC Solutions" />
          </Link>
          <nav className={style.nav}>
            <ul className={style.list}>
              {data.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    <Link href={item.link} className={style.item__link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Button>Contact Us</Button>
        </div>
      </Container>
    </header>
  );
}
