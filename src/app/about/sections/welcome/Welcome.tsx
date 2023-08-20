import { Container } from "@/components/container/Container";
import React from "react";
import style from "./style.module.css";
const data = [
  {
    id: 1,
    text: [
      "My name is Vadym Zotov. I started my career as a software developer and reached a C-level position in leading IT outsourcing companies in Ukraine. When I was doing my MBA, I decided to try my hand in business. Together with my close friend, we started a little side project.",
      "Initially, our idea was to provide top quality code. You know offshore software development is often blamed for poor quality and we wanted to prove the contrary.",
      "Initially, our idea was to provide top quality code. You know offshore software development is often blamed for poor quality and we wanted to prove the contrary.",
      "We got a few orders and started working. It seemed to me that we accomplished our mission – our clients were satisfied with our work. We established friendly relations, they came to Kyiv to visit our office.",
      "And I got it – it’s not only the quality that makes service excellent, it’s the attitude.",
      "Initially, our idea was to provide top quality code. You know offshore software development is often blamed for poor quality and we wanted to prove the contrary.",
      "We got a few orders and started working. It seemed to me that we accomplished our mission – our clients were satisfied with our work. We established friendly relations, they came to Kyiv to visit our office.",
      "And I got it – it’s not only the quality that makes service excellent, it’s the attitude.",
    ],
  },
  {
    id: 2,
    name: "Vadym Zotov, Founder, CEO at Devox Software",
  },
];
export default function Welcome() {
  return (
    <section className={style.welcome}>
      <Container>
        <span className={style.welcome__subTitle}>welcome</span>
        <h2 className={style.welcome__title}>Hello World!</h2>
        {data.map((item) => {
          return (
            <>
              <div className={style.box__text} key={item.id}>
                {item.text?.map((item, index) => {
                  return (
                    <p className={style.welcome__text} key={index}>
                      {item}
                    </p>
                  );
                })}
                <span className={style.welcome__name}>{item.name}</span>
              </div>
            </>
          );
        })}
      </Container>
    </section>
  );
}
