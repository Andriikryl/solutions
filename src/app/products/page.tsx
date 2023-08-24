import React from "react";
import HeroProduct from "./sections/hero/HeroProduct";
import ProductBlog from "./sections/ProductBlog/ProductBlog";
import Support from "@/components/support/Support";

export default function Products() {
  return (
    <>
      <HeroProduct />
      <ProductBlog />
      <Support />
    </>
  );
}
