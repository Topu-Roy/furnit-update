import React from "react";
import RenderProductCarousel from "./renderProductCarousel";
import { type Product } from "@prisma/client";

type Props = {
  products: Array<Product>;
};

export default async function HomeProductCarousel({ products }: Props) {
  return (
    <div className="bg-wh flex flex-col items-center justify-center bg-white py-10 lg:py-16">
      <div className="flex w-full flex-col items-center justify-center gap-5 pb-10">
        <h2>Our Newest Products</h2>
        <p className={"mb-1 text-center"}>Made of the best materials and with a design that follows the times</p>
      </div>

      <RenderProductCarousel products={products} />
    </div>
  );
}
