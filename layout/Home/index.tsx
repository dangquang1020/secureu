import { Banner } from "../Banner";
import { GetInTouch } from "./GetInTouch";
import { SecureUAgent } from "./SecureUAgent";
import { SecureUMobileApp } from "./SecureUMobileApp";
import { SecureUPurpose } from "./SecureUPurpose";

const Home = () => {
  return (
    <>
      <Banner />
      <SecureUPurpose />
      <SecureUMobileApp />
      <SecureUAgent />
      <GetInTouch />
    </>
  );
};

export { Home };
