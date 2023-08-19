import React from "react";
import style from "./style.module.css";

interface ITextGroup {
  data?: { id: number; title: string }[];
  description: string[];
  title: string;
}

export default function TextGroup({ data, description, title }: ITextGroup) {
  return (
    <div className={style.offer__info}>
      <h3 className={style.info__title}>{title}</h3>
      {description.map((item, index) => {
        return (
          <p className={style.info__description} key={index}>
            {item}
          </p>
        );
      })}
      {data && (
        <ul className={style.offer__list}>
          {data.map((item) => {
            return (
              <li className={style.list__item} key={item.id}>
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
