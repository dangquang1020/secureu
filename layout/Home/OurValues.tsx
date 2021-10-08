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
  index: number;
}

const Item: React.FC<ItemProps> = ({ item, index }) => {
  return (
    <div className={`flex items-start md:items-center mt-2 md:mt-4`}>
      <div
        className={`relative top-3 ${index === 1 ? "md:-top-5.5" : "md:-top-3"
          }`}
      >
        <Image src={item.image} alt="Error" />
      </div>
      <div className="max-w-52 md:max-w-xs ml-5 md:ml-7">
        <span className="text-37/16 md:text-44/16 font-roboto-light text-dark-light-blue">
          {item.title}
        </span>
        <p className="text-14/16 md:text-base font-lato text-mercury mt-1">
          {item.content}
        </p>
      </div>
    </div>
  );
};

const OurValues = () => {
  return (
    <Section className="relative px-5 lg:px-0">
      <div className="-z-1 absolute w-full h-full top-0 left-0 bg-graphite">
        <div className="max-w-300 relative mx-auto h-full">
          <div className="w-full h-full -z-1">
            <Image
              src={OurValuesBg}
              alt="OurValuesBg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden xl:block absolute top-0 left-0 h-full w-full right-gradient"></div>
        </div>
      </div>

      <div className="py-16 md:py-31 ml-31 max-w-screen-lg mx-auto lg:pl-8 z-0">
        <span className="text-white text-26/16 md:text-3xl font-roboto-medium">
          Our values are:
        </span>

        {ITEMS.map((item, index) => (
          <Item key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export { OurValues };
