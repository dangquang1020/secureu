import React from "react";
import Image from "next/image";

import { Section } from "../Section";

import OurValuesBg from "../../assets/images/our-values-bg.png";
import Shield1 from "../../assets/icons/secureU-shield1.svg";
import Shield2 from "../../assets/icons/secureU-shield2.svg";
import Shield3 from "../../assets/icons/secureU-shield3.svg";

interface Item {
  title: string;
  image: StaticImageData;
  content: string;
}

const ITEMS: Item[] = [
  {
    title: "Integrity",
    image: Shield1,
    content:
      "We operate with high moral standards and honesty, fostering client respect and trust.",
  },
  {
    title: "Compassion",
    image: Shield2,
    content:
      "An empathetic approach towards each client and their specific needs allows us to promote a reliable and professional relationship.",
  },
  {
    title: "Respect",
    image: Shield3,
    content: "Respect yourself, client privacy, and the SecureU family.",
  },
];

interface ItemProps {
  item: Item;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className={`flex items-baseline md:items-center mt-2 md:mt-4`}>
      <div className="relative top-8 md:-top-2">
        <Image src={item.image} alt="Error" />
      </div>
      <div className="max-w-52 md:max-w-xs ml-7">
        <span className="text-37/16 md:text-44/16 font-roboto-light text-dark-light-blue">
          {item.title}
        </span>
        <p className="text-14/16 md:text-base font-lato text-mercury mt-2">
          {item.content}
        </p>
      </div>
    </div>
  );
};

const OurValues = () => {
  return (
    <Section className="relative px-5 lg:px-0">
      <Image
        src={OurValuesBg}
        alt="OurValuesBg"
        layout="fill"
        objectFit="cover"
        className="-z-1"
      />

      <div className="py-16 md:py-31 ml-31 max-w-screen-lg mx-auto lg:pl-8">
        <span className="text-white text-26/16 md:text-3xl font-roboto-medium">
          Our values are:
        </span>

        {ITEMS.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export { OurValues };
