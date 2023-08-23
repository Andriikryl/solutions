"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Logo from "public/logo/logo.svg";
import Image from "next/image";
import { Button } from "../button/Button";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import { TextEncrypted } from "../TextEncrypted/TextEncrypted";

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
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <header className={style.header}>
      <Container className={style.header__container}>
        <div className={style.header__box}>
          <Link href="/" className={style.header__logo}>
            <Image src={Logo} width={71} height={71} alt="ID LC Solutions" />
            <TextEncrypted text="ID LC Solutions" />
          </Link>
          <nav
            className={`${style.nav} ${activeState ? style.menu_active : ""}`}
          >
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
          <Button className={style.header__btn}>Contact Us</Button>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
