import Image from "next/image";

import { Section } from "./Section";
import { ContentWrapper } from "./ContentWrapper";

import Logo from "../assets/images/log-white-trans.png";
import Sholomi from "../assets/images/sholomi-pic.png";
import GGPlay from "../assets/images/google-play-store.png";
import AppStore from "../assets/images/apple-store.png";

const Footer = () => (
  <Section>
    <div className="flex bg-dark md:py-32">
      <ContentWrapper className="flex-col-reverse md:flex-row justify-center md:items-center">
        <div className="flex flex-col md:pr-16 lg:pr-32 md:items-start items-center my-10 md:my-0">
          <Image src={Logo} alt="Logo" width={172} height={66} />
          <p className="text-white text-sm md:inline-grid">
            <span>© Copyright 2021 SecureU.</span>
            <span> All Rights Reserved.</span>
          </p>
        </div>

        <div className="flex items-center text-white md:max-w-100 md:mx-0 mx-auto">
          <div className="flex flex-col mr-4 md:mr-8 w-3/4 md:w-auto">
            <span className="text-11/16 md:text-13/16 opacity-35 font-roboto-black">
              ABOUT
            </span>
            <p className="text-mercury text-sm md:text-xs max-w-xs font-lato leading-normal mt-3">
              SecureU was founded by Sholomi Farrell, a military and law
              enforcement veteranN who has over 15 years in the security
              industry. Sholomi understands the need for on demand security and
              it is his mission to provide the highest level of services to
              clients who need it now.
            </p>
          </div>

          <Image className="rounded-full" src={Sholomi} alt="Sholomi" />
        </div>

        <div className="flex md:justify-start justify-between md:flex-col md:pl-16 lg:pl-32 my-10 md:my-0">
          <Image src={GGPlay} alt="Logo" />
          <Image src={AppStore} alt="Logo" />
        </div>
      </ContentWrapper>
    </div>
  </Section>
);

export { Footer };
