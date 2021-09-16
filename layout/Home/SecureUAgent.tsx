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
    maxWidth: "lg:max-w-1/3 lg:px-6",
  },
  {
    title: "Instant pay option",
    image: CashPayment,
    content:
      "Agents have the ability to get paid as soon as their detail has been completed and approved.",
    maxWidth: "lg:max-w-2/5 md:px-7 lg:px-0",
  },
  {
    title: "Create your own schedule",
    image: NotesClock,
    content:
      "Accept security details that work best for your daily schedule. Agents have the option to choose from day, night and weekend details.",
    maxWidth: "lg:max-w-1/3 lg:px-7",
  },
];

interface ItemProps {
  item: Item;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div
      className={`flex flex-col items-center text-center text-dark-liver mb-12 mx-5 md:mx-0 md:mb-0 ${item.maxWidth}`}
    >
      <Image src={item.image} alt="Error" />
      <span className="mt-9 mb-4 font-medium text-lg md:text-21/16 font-roboto">
        {item.title}
      </span>
      <p className="text-14/16 md:text-base font-lato">{item.content}</p>
    </div>
  );
};

const SecureUAgent = () => {
  return (
    <Section className="max-w-screen-lg text-center pt-28 md:pt-31 md:px-0">
      <span className="text-26/16 px-2 md:text-3xl font-medium text-light-blue font-roboto">
        Want to be a SecureU agent?
      </span>

      <div className="flex flex-col md:flex-row md:justify-between mt-12 mb-4 md:mb-24 md:px-4">
        {ITEMS.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export { SecureUAgent };
