import { Banner } from "../Banner";
import { GetInTouch } from "./GetInTouch";
import { OurValues } from "./OurValues";
import { SecureUAgent } from "./SecureUAgent";

const Home = () => {
  return (
    <>
      <Banner />
      <SecureUAgent />
      <OurValues />
      <GetInTouch />
    </>
  );
};

export { Home };
