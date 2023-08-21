import React from "react";
import style from "./style.module.css";
import Link from "next/link";

interface INavGroup {
  currentPage: string;
}

export default function NavGroup({ currentPage }: INavGroup) {
  return (
    <div className={style.hero__links}>
      <Link href="/">home</Link>
      <Link href="#">{currentPage}</Link>
    </div>
  );
}
