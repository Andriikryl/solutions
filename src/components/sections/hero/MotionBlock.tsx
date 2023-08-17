import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import classNames from "classnames";
const data = [
  {
    id: 1,
    src: "/motion block/block-1.png",
    width: 371,
    hegth: 275,
    alt: "image",
  },
  {
    id: 2,
    src: "/motion block/block-2.png",
    width: 371,
    hegth: 275,
    alt: "image",
  },
  {
    id: 3,
    src: "/motion block/block-3.png",
    width: 371,
    hegth: 275,
    alt: "image",
  },
  {
    id: 4,
    src: "/motion block/block-4.png",
    width: 371,
    hegth: 275,
    alt: "image",
  },
];
const dataPhone = [
  {
    id: 1,
    src: "/motion block/phone-1.png",
    width: 83,
    hegth: 172,
    alt: "image",
  },
  {
    id: 2,
    src: "/motion block/phone-2.png",
    width: 83,
    hegth: 172,
    alt: "image",
  },
  {
    id: 3,
    src: "/motion block/phone-3.png",
    width: 83,
    hegth: 172,
    alt: "image",
  },
  {
    id: 4,
    src: "/motion block/phone-4.png",
    width: 83,
    hegth: 172,
    alt: "image",
  },
];

export default function MotionBlock() {
  return (
    <div className={style.motion__block}>
      <div className={style.inner__box}>
        <div className={style.marquee}>
          <ul className={style.marquee__content}>
            {data.map((item) => {
              return (
                <li className={style.marquee__item} key={item.id}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.hegth}
                    alt={item.alt}
                  />
                </li>
              );
            })}
          </ul>
          <ul className={style.marquee__content} aria-hidden="true">
            {data.map((item) => {
              return (
                <li className={style.marquee__item} key={item.id}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.hegth}
                    alt={item.alt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={style.inner__box}>
        <div className={classNames(style.marquee)}>
          <ul className={classNames(style.marquee__content, style.speed)}>
            {data.map((item) => {
              return (
                <li
                  className={classNames(style.marquee__item, style.second)}
                  key={item.id}
                >
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.hegth}
                    alt={item.alt}
                  />
                </li>
              );
            })}
          </ul>
          <ul
            className={classNames(style.marquee__content, style.speed)}
            aria-hidden="true"
          >
            {data.map((item) => {
              return (
                <li
                  className={classNames(style.marquee__item, style.second)}
                  key={item.id}
                >
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.hegth}
                    alt={item.alt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={style.phone__box}>
        <div className={style.marquee__phone}>
          <ul className={style.marquee__contentPhone}>
            {dataPhone.map((item) => {
              return (
                <li className={style.marquee__itemPhone} key={item.id}>
                  <div className={style.flex__group}>
                    <Image
                      src={item.src}
                      width={item.width}
                      height={item.hegth}
                      alt={item.alt}
                    />
                    <Image
                      src={item.src}
                      width={item.width}
                      height={item.hegth}
                      alt={item.alt}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className={style.marquee__contentPhone} aria-hidden="true">
            {dataPhone.map((item) => {
              return (
                <li className={style.marquee__itemPhone} key={item.id}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.hegth}
                    alt={item.alt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={style.phone__boxS}>
        <div className={style.marquee__phone}>
          <ul
            className={classNames(
              style.marquee__contentPhone,
              style.marquee__contentPhoneS
            )}
          >
            {dataPhone.map((item) => {
              return (
                <li className={style.marquee__itemPhone} key={item.id}>
                  <div className={style.flex__group}>
                    <Image
                      className={style.phone__order}
                      src={item.src}
                      width={item.width}
                      height={item.hegth}
                      alt={item.alt}
                    />
                    <Image
                      src={item.src}
                      width={item.width}
                      height={item.hegth}
                      alt={item.alt}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <ul
            className={classNames(
              style.marquee__contentPhone,
              style.marquee__contentPhoneS
            )}
            aria-hidden="true"
          >
            {dataPhone.map((item) => {
              return (
                <li className={style.marquee__itemPhone} key={item.id}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.hegth}
                    alt={item.alt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
