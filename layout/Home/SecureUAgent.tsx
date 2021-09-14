import React from "react";
import Image from "next//image";

import { Section } from "../Section";

import RatingStar from "../../assets/images/rating-star.png";
import CashPayment from "../../assets/images/cash-payment.png";
import NotesClock from "../../assets/images/notes-clock.png";

interface Item {
  title: string;
  image: StaticImageData;
  content: string;
  maxWidth: string;
}

const ITEMS: Item[] = [
  {
    title: "Become a high rated agent",
    image: RatingStar,
    content:
      "Showcase your reliability and professionalism through our rating system. Clients tend to choose top rated agents more frequently for security jobs.",
    maxWidth: "max-w-29/100",
  },
  {
    title: "Instant pay option",
    image: CashPayment,
    content:
      "Agents have the ability to get paid as soon as their detail has been completed and approved.",
    maxWidth: "max-w-2/5",
  },
  {
    title: "Create your own schedule",
    image: NotesClock,
    content:
      "Accept security details that work best for your daily schedule. Agents have the option to choose from day, night and weekend details.",
    maxWidth: "max-w-29/100",
  },
];

interface ItemProps {
  item: Item;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div
      className={`flex flex-col items-center text-center text-dark-liver mb-12 md:mb-0 md:${item.maxWidth}`}
    >
      <Image src={item.image} alt="Error" />
      <span className="mt-9 mb-4 font-medium text-21/16 font-roboto">
        {item.title}
      </span>
      <p className="text-base font-lato">{item.content}</p>
    </div>
  );
};

const SecureUAgent = () => {
  return (
    <Section className="max-w-screen-lg text-center pt-28 md:pt-31 px-8 md:px-0">
      <span className="text-3xl font-medium text-light-blue font-roboto">
        Want to be a SecureU agent?
      </span>

      <div className="flex flex-col md:flex-row md:justify-between mt-12 mb-16 md:mb-24">
        {ITEMS.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export { SecureUAgent };
