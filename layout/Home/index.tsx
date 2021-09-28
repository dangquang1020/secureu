import { MutableRefObject, useRef } from "react";
import { Banner } from "../Banner";
import { GetInTouch } from "./GetInTouch";
import { OurValues } from "./OurValues";
import { PhoneMockup } from "./PhoneMockup";
import { SecureUAgent } from "./SecureUAgent";
import { SecureUMobileApp } from "./SecureUMobileApp";
import { SecureUPurpose } from "./SecureUPurpose";

const Home = () => {
  let aboutRef = useRef<HTMLDivElement>(null)

  const scrollToAboutSection = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <>
      <Banner onButtonClick={scrollToAboutSection} />
      <SecureUPurpose ref={aboutRef} />
      <SecureUMobileApp />
      <PhoneMockup />
      <SecureUAgent />
      <OurValues />
      <GetInTouch />
    </>
  );
};

export { Home };
