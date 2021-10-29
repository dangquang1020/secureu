import Image from "next/image";

import { Section } from "./Section";
import { ContentWrapper } from "./ContentWrapper";

import Logo from "../assets/images/log-white-trans.png";
import Sholomi from "../assets/images/sholomi-pic.png";
import AppStore from "../assets/images/apple-store.png";
import Instagram from "../assets/icons/IG.png";
import Twitter from "../assets/icons/TW.png";

const Footer = () => (
  <Section>
    <div className="flex bg-dark lg:py-32">
      <ContentWrapper className="max-w-screen-xxs xs:max-w-screen-xs lg:max-w-300 w-full flex-col-reverse lg:flex-row justify-center lg:justify-between lg:items-center">
        <div className="flex flex-col lg:items-start items-center my-10 lg:my-0">
          <div className="w-30.5 h-12 lg:w-44 lg:h-17">
            <Image src={Logo} alt="Logo" />
          </div>
          <p className="text-white text-sm lg:inline-grid mt-3 font-montserrat">
            <span>© Copyright 2021 SecureU.</span>
            <span> All Rights Reserved.</span>
          </p>
        </div>

        <div className="flex items-center text-white lg:max-w-100 lg:mx-0 mx-auto">
          <div className="flex flex-col mr-4 lg:mr-8 w-3/4 lg:w-auto">
            <span className="text-11/16 lg:text-13/16 opacity-35 font-roboto-medium tracking-widest">
              ABOUT
            </span>
            <p className="text-mercury text-sm lg:text-xs max-w-xs font-lato leading-normal mt-3">
              SecureU was founded by Sholomi Farrell, a military and law
              enforcement veteran who has over 15 years in the security
              industry. Sholomi understands the need for on demand security and
              it is his mission to provide the highest level of services to
              clients who need it now.
            </p>
          </div>

          <div className="flex-87 lg:flex-100">
            <Image className="rounded-full" src={Sholomi} alt="Sholomi" />
          </div>
        </div>

        <div className="flex lg:justify-start justify-between lg:flex-col my-10 lg:my-0">
          <div className="max-w-33.5 xs:max-w-38.5 lg:max-w-43 flex items-center justify-center">
            <div className="pr-2">
              <Image src={Twitter} alt="Twitter" width="35" height="28" />
            </div>
            <div className="pl-2">
              <Image src={Instagram} alt="Instagram" width="30" height="30" />
            </div>
          </div>
          <div className="max-w-33.5 xs:max-w-38.5 lg:max-w-43 lg:mt-4">
            <Image src={AppStore} alt="AppStore" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  </Section>
);

export { Footer };
