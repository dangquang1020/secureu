import React, { Ref } from 'react'
import Image from "next//image";
import { ContentWrapper } from "../ContentWrapper";
import { Section } from "../Section";

import bgCircle from "../../assets/images/SecureU_circle1.png";
import anthonyProfile from "../../assets/images/anthony-profile.png";
import ratingStar from "../../assets/images/rating-star-10x10.png";
import videoPlaceholder from "../../assets/images/video-placeholder.png";
import { Button } from "../../components/button/Button";

const SecureUPurpose = React.forwardRef((props, ref: Ref<HTMLDivElement>) => {
  const bookNow = () => {
    console.log("Book Now");
  };

  const schedule = () => {
    console.log("Schedule");
  };

  return (
    <ContentWrapper className="flex-col items-start mt-14 md:mt-19 mb-18 md:mb-26">
      <Section className="flex flex-col md:flex-row">
        <div className="lg:pt-12 md:w-6/12 lg:w-7/12" ref={ref}>
          <p className="font-lato font-bold text-26/16 lg:text-3xl leading-8 lg:leading-extra-loose text-light-blue lg:max-w-124">
            Our agents are thoroughly vetted to provide a trustworthy
            experience.
          </p>
          <p className="font-lato text-md lg:text-base text-dark-liver mt-4 mb-8 lg:max-w-96">
            We provide the highest level of personal and asset protection
            through integrity and transparency.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-50 h-50 lg:h-58 lg:w-58">
            <Image src={bgCircle} alt="SecureU Agent" />
          </div>
        </div>
      </Section>
      <Section className="flex flex-col md:flex-row-reverse mt-14 lg:mt-7 items-center md:items-start md:justify-between">
        <div className="lg:pt-12">
          <p className="font-lato font-bold text-26/16 lg:text-3xl leading-8 lg:leading-extra-loose text-light-blue md:max-w-96">
            Why should I use SecureU? Your safety is our priority.
          </p>
          <p className="font-lato text-md lg:text-base text-dark-liver mt-4 mb-12 md:mb-0 md:max-w-96">
            We connect users directly to experienced security agents who provide
            the highest level of quality service.
          </p>
        </div>
        <div className="w-72 lg:w-100 h-40 lg:h-54 lg:m-0">
          <div style={{ padding: '56.6% 0 0 0', position: 'relative' }} >
            <iframe src="https://player.vimeo.com/video/654167523?h=f056c8eb8f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="SecureU">
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js" async></script>
        </div>
      </Section>
    </ContentWrapper>
  );
});

SecureUPurpose.displayName = 'SecureUPurpose'

export { SecureUPurpose };
