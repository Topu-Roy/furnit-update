import React from "react";
import { db } from "@/server/db";
import ThreeDCard from "@/components/ui/threeDCard";

export default async function CategoryCTA() {
  const [chairs, lamps] = await Promise.all([
    db.product.findMany({
      where: {
        category: "Chair",
      },
    }),
    db.product.findMany({
      where: {
        category: "Lamp",
      },
    }),
  ]);

  if (!chairs) {
    console.log("Chairs not found");
    return null;
  }

  if (!lamps) {
    console.log("Lamps not found");
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-7xl py-10 lg:py-16">
      <h2 className={"px-8 text-center"}>
        Find a variety of <br className="hidden md:block lg:hidden" /> home furniture&apos;s
      </h2>
      <div className="flex w-full flex-col items-center justify-center gap-2 px-3 py-8 sm:px-0 md:flex-row lg:gap-4">
        <ThreeDCard
          heading="Try new our chairs"
          subHeading="Brand new collection of chairs and modern design."
          imageURL={chairs[4]?.image ?? ""}
          imageAlt={chairs[4]?.productTitle ?? ""}
          link="/shop"
          linkName="Shop Now"
        />
        <ThreeDCard
          heading="Check out our new Lamps"
          subHeading="Brand new collection of Lamps with minimal design."
          imageURL={lamps[2]?.image ?? ""}
          imageAlt={lamps[2]?.productTitle ?? ""}
          link="/shop"
          linkName="Shop Now"
        />
      </div>
    </div>
  );
}
