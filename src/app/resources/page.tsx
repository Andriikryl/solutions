import React from "react";
import HeroResources from "./sections/hero/HeroResources";
import Support from "@/components/support/Support";
import Posts from "./sections/posts/Posts";

export default function Resources() {
  return (
    <>
      <HeroResources />
      <Posts />
      <Support />
    </>
  );
}
