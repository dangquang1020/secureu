import React, { AllHTMLAttributes } from "react";
import Image from "next/image";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Section } from "../Section";

import Phone from "../../assets/images/iPhone-mockup.png";

SwiperCore.use([Pagination, Autoplay]);

interface Item {
  title: string;
  content: string;
  circleClass: string;
}

const ITEMS: Item[] = [
  {
    title: "Scheduling",
    content:
      "Request your protection agent now or find a calendar date that works for you in the future.",
    circleClass: "first",
  },
  {
    title: "Agent Mapping",
    content:
      "Locate and track your agent as soon as your security request is accepted. You will also have the ability to share your location with family and friends while using the personal security on demand feature.",
    circleClass: "left second",
  },
  {
    title: "Agent Selection",
    content:
      "Users can tailor their experience with the ability to select their desired agent and  choose between a uniformed or non-uniformed security agent.",
    circleClass: "third",
  },
  {
    title: "Agent Credentials",
    content:
      "We give users the ability to see their agents credentials, reviews and biography for transparency and peace of mind.",
    circleClass: "left fourth",
  },
];

interface ItemProps extends AllHTMLAttributes<HTMLDivElement> {
  item: Item;
  index: number;
  activeIndex: number;
  isSlider?: boolean;
}

const Item: React.FC<ItemProps> = ({
  item,
  index,
  activeIndex,
  isSlider,
  ...props
}) => {
  return (
    <div
      className={`relative text-white cursor-pointer mb-16 md:mb-0 ${
        !isSlider
          ? index === 0
            ? "md:mr-7 lg:mr-14"
            : index === 2
            ? "md:mr-7 lg:mr-8"
            : "md:ml-8 lg:ml-4"
          : ""
      }`}
      {...props}
    >
      <span
        className={`text-lg md:text-21/16 font-roboto-medium ${
          index === activeIndex ? "text-light-blue" : ""
        }`}
      >
        {item.title}
      </span>

      <p className="text-14/16 md:text-base font-lato pt-3 md:pt-14/16 leading-snug">
        {item.content}
      </p>

      {!isSlider && index === activeIndex && (
        <div
          className={`circle-dot absolute top-0 top-4 ${item.circleClass}`}
        />
      )}
    </div>
  );
};

const PhoneMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [activeIndexMobile, setActiveIndexMobile] = React.useState<number>(0);

  const pagination = {
    clickable: true,
    renderBullet: function () {
      return `<span class='custom-bullet swiper-pagination-bullet'></span>`;
    },
    bulletActiveClass: "swiper-pagination-bullet-active",
  };
  return (
    <Section className="relative bg-dark pt-14 md:py-20">
      <div className="hidden max-w-screen-lg lg:mx-auto md:mx-5 lg:pl-8 md:grid md:grid-cols-2 md:gap-y-16 md:gap-x-80 lg:gap-x-92">
        {ITEMS.map((item, index) => (
          <Item
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            onMouseOver={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className="block md:hidden px-5">
        <Swiper
          loop={true}
          centeredSlides={true}
          pagination={pagination}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={({ realIndex }) => setActiveIndexMobile(realIndex)}
        >
          {ITEMS.map((item, index) => (
            <SwiperSlide key={index}>
              <Item
                isSlider
                item={item}
                index={index}
                activeIndex={activeIndexMobile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative flex justify-center md:absolute md:left-1/2 md:top-1/2 transform translate-y-14/100 -mt-20 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-y-2 lg:-top-20">
        <Image src={Phone} alt="Phone" />
      </div>
    </Section>
  );
};

export { PhoneMockup };
