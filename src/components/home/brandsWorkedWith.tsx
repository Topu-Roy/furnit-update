import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function BrandsWorkedWith() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 bg-gray-900 py-10 sm:py-12 md:py-14 lg:py-16">
      <Marquee className="mx-auto flex w-full max-w-7xl flex-row justify-between">
        <Image
          src="https://utfs.io/f/KPwcGLb2VBiEGrKmsZWcgaBP0itJcI4ZdLMVNYk5rlFORz1fhttps://utfs.io/f/KPwcGLb2VBiEGrKmsZWcgaBP0itJcI4ZdLMVNYk5rlFORz1f"
          alt=""
          className="mr-8 h-12 sm:mr-10 lg:mr-20"
          height={50}
          width={250}
        />
        <Image
          src="https://utfs.io/f/KPwcGLb2VBiEiWEaVHhvix8a2IwC4Y1DKkzGNuPrSf37EcM0https://utfs.io/f/KPwcGLb2VBiEiWEaVHhvix8a2IwC4Y1DKkzGNuPrSf37EcM0"
          alt=""
          className="mr-8 h-12 sm:mr-10 lg:mr-20"
          height={50}
          width={150}
        />
        <Image
          src="https://utfs.io/f/KPwcGLb2VBiEqOEPIMdNGNs2mQlYKcOo0nzSaqhyirE6BfJVhttps://utfs.io/f/KPwcGLb2VBiEqOEPIMdNGNs2mQlYKcOo0nzSaqhyirE6BfJV"
          alt=""
          className="mr-8 h-12 sm:mr-10 lg:mr-20"
          height={50}
          width={80}
        />
        <Image
          src="https://utfs.io/f/KPwcGLb2VBiE0aY359KmWTwBjubOxzECI8DQhUPkNofJgpv4https://utfs.io/f/KPwcGLb2VBiE0aY359KmWTwBjubOxzECI8DQhUPkNofJgpv4"
          alt=""
          className="mr-8 h-12 sm:mr-10 lg:mr-20"
          height={50}
          width={120}
        />
        <Image
          src="https://utfs.io/f/KPwcGLb2VBiEiWEaVHhvix8a2IwC4Y1DKkzGNuPrSf37EcM0https://utfs.io/f/KPwcGLb2VBiEiWEaVHhvix8a2IwC4Y1DKkzGNuPrSf37EcM0"
          alt=""
          className="mr-8 h-12 sm:mr-10 lg:mr-20"
          height={50}
          width={120}
        />
        <Image
          src="https://utfs.io/f/KPwcGLb2VBiExfYxm2EpMUuHSn2kYTyXq6iRpgBAbfhO3vcthttps://utfs.io/f/KPwcGLb2VBiExfYxm2EpMUuHSn2kYTyXq6iRpgBAbfhO3vct"
          alt=""
          className="mr-8 h-12 sm:mr-10 lg:mr-20"
          height={50}
          width={110}
        />
      </Marquee>
    </section>
  );
}
