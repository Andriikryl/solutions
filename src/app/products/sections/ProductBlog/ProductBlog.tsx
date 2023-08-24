import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import Avatar from "public/blog/Resources/Ellipse 15.jpg";
import Image from "next/image";
import TextBlogPart from "./TextBlogPart";
export default function ProductBlog() {
  return (
    <section className={style.blog}>
      <Container>
        <div className={style.blog__prevu}>
          <div className={style.flex__group}>
            <a href="#" className={style.avatar}>
              <Image src={Avatar} width={56} height={56} alt="avatar" />
            </a>
            <div className={style.avatar__description}>
              <span>Renee Wells</span>
              <span>Medical Expert</span>
            </div>
          </div>

          <span className={style.blog__date}>
            10 min read November 10, 2023
          </span>
        </div>
        <div className={style.image__box}>
          <Image
            src="/blog/Resources/Rectangle 44.jpg"
            width={1060}
            height={545}
            alt="image"
          />
        </div>
        <TextBlogPart />
      </Container>
    </section>
  );
}
