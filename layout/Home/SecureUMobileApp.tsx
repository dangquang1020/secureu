import Image from "next//image";
import { SectionDescription } from "../../components/text/SectionDescription";
import { SectionTitle } from "../../components/text/SectionTitle";
import { Section } from "../Section";
import { Button } from "../../components/button/Button";
import background from "../../assets/images/mobile-app-bg.png";

const SecureUMobileApp = () => {
  return (
    <Section className="bg-midnight-blue w-full">
      <div className="max-w-300 lg:pl-20 xl:pl-30 mx-auto h-auto lg:h-124">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 pl-5 lg:pl-0 flex flex-col items-start justify-center mt-14 mb-17">
            <SectionTitle
              className="max-w-64 mb-8 large"
              title="SecureU Mobile App"
            />
            <SectionDescription
              className="max-w-64"
              description="The app is currently under construction and will be available for download soon."
            />
            <Button className="btn-danger mt-10 md:mt-14">DOWNLOAD APP</Button>
          </div>
          <div className="w-full md:w-7/12 pt-3/4 xs:pt-3/5 md:pt-0 sm relative md:ml-14">
            <Image
              src={background}
              layout="fill"
              objectFit="cover"
              className="object-75-top lg:object-center"
              alt="Error"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export { SecureUMobileApp };
