import React from "react";
import Image from "next//image";

import { Section } from "../Section";

import RatingStar from "../../assets/icons/rating-star.svg";
import CashPayment from "../../assets/icons/cash-payment.svg";
import NotesClock from "../../assets/icons/notes-clock.svg";

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
    maxWidth: "lg:max-w-1/3 lg:px-4",
  },
  {
    title: "Instant pay option",
    image: CashPayment,
    content:
      "Agents have the ability to get paid as soon as their details has been completed and approved.",
    maxWidth: "lg:max-w-1/4 md:px-7 lg:px-0",
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
      <div className="w-21 h-21 lg:w-24 lg:h-24">
        <Image src={item.image} alt="Error" />
      </div>
      <span className="mt-9 mb-4 text-lg md:text-21/16 font-roboto-medium">
        {item.title}
      </span>
      <p className="text-14/16 md:text-base font-lato leading-snug max-w-72">
        {item.content}
      </p>
    </div>
  );
};

const SecureUAgent = () => {
  return (
    <Section className="max-w-screen-lg text-center pt-28 md:pt-31 md:px-0">
      <span className="text-26/16 px-2 md:text-3xl text-light-blue font-roboto-medium">
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
