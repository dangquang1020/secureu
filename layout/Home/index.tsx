import { Banner } from "../Banner";
import { GetInTouch } from "./GetInTouch";
import { OurValues } from "./OurValues";
import { PhoneMockup } from "./PhoneMockup";
import { SecureUAgent } from "./SecureUAgent";
import { SecureUMobileApp } from "./SecureUMobileApp";
import { SecureUPurpose } from "./SecureUPurpose";

const Home = () => {
  return (
    <>
      <Banner />
      <SecureUPurpose />
      <SecureUMobileApp />
      <PhoneMockup />
      <SecureUAgent />
      <OurValues />
      <GetInTouch />
    </>
  );
};

export { Home };
