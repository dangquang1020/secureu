import Image from "next//image";
import { SectionDescription } from "../../components/text/SectionDescription";
import { SectionTitle } from "../../components/text/SectionTitle";
import { Section } from "../Section";
import { Button } from "../../components/button/Button";
import background from "../../assets/images/mobile-app-bg.png";

const SecureUMobileApp = () => {
  return (
    <Section className="bg-midnight-blue w-full relative">
      <div className="max-w-300 lg:pl-20 xl:pl-30 mx-auto h-auto lg:h-124">
        <div className="w-full h-full flex flex-col md:flex-row text-white">
          <div className="w-full md:w-5/12 pl-5 lg:pl-0 flex flex-col items-start justify-center mt-14 mb-17">
            <h2 className="max-w-64 mb-8 font-lato font-bold text-38/16 lg:text-45/16 leading-11.5 lg:leading-14">
              SecureU Mobile App
            </h2>
            <SectionDescription
              className="max-w-72"
              description="The app is currently under construction and will be available for download soon."
            />
            <Button className="btn-danger mt-10 md:mt-14">DOWNLOAD APP</Button>
          </div>
          <div className="w-full pt-3/4 xs:pt-3/5 relative md:pt-0 md:absolute md:w-1/2 md:h-full md:left-1/2">
            <Image
              src={background}
              layout="fill"
              objectFit="cover"
              className="object-75-top lg:object-center"
              alt="Mobile App"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export { SecureUMobileApp };
