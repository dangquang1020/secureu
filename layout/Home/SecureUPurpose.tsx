import Image from "next//image";
import { ContentWrapper } from "../ContentWrapper"
import { Section } from "../Section"

import anthonyProfile from '../../assets/images/anthony-profile.png'
import ratingStar from "../../assets/images/rating-star-10x10.png"
import videoPlaceholder from "../../assets/images/video-placeholder.png";
import { Button } from "../../components/button/Button";

const SecureUPurpose = () => {
  const bookNow = () => {
    console.log('Book Now');
  }

  const schedule = () => {
    console.log('Schedule');
  }

  return (
    <ContentWrapper className="flex-col items-start mt-14 md:mt-19 mb-18 md:mb-26">
      <Section className="flex flex-col md:flex-row">
        <div className="lg:pt-12 md:w-6/12 lg:w-7/12">
          <p className="font-roboto font-medium text-26/16 lg:text-3xl text-light-blue lg:max-w-124">
            Our agents are thoroughly vetted to provide a trustworthy experience.
          </p>
          <p className="font-lato text-md lg:text-base text-dark-liver mt-4 mb-8 lg:max-w-96">
            We provide the highest level of personal and asset protection through integrity and transparency.
          </p>
        </div>

        <div className="w-50 lg:w-58 h-50 lg:h-58 rounded-full mx-auto py-4 lg:py-5 shadow-grey relative overflow-hidden flex flex-col items-center">
          <div className="w-full h-9 lg:h-10 absolute left-0 top-0 bg-midnight-blue -z-1"></div>
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
            <Image src={anthonyProfile} />
          </div>
          <div className="font-lato font-bold text-sm lg:text-xs leading-3 text-midnight-blue mt-1 lg:mt-2">Anthony Rosavio</div>
          <div className="flex font-lato text-sm items-center leading-3 mt-1 lg:mt-2">
            <div className="w-3 h-3 mr-2">
              <Image src={ratingStar} />
            </div>
            <span className="text-light-blue">125 ratings &nbsp;</span>
            <span className="text-midnight-blue font-bold">(4.5/5)</span>
          </div>
          <div className="flex items-center mt-2 lg:mt-3">
            <Button className="btn-primary mr-2" onClick={bookNow}>BOOK NOW</Button>
            <Button className="btn-default" onClick={schedule}>SCHEDULE</Button>
          </div>
          <div className="font-lato font-bold text-xxs leading-3 text-center mt-3 lg:mt-5 w-4/5">
            <p className="text-spun-pearl">To protect our agent privacy, their full name and profile will reveal once you book them.</p>
            <p className="text-midnight-blue">Learn more</p>
          </div>
        </div>
      </Section>
      <Section className="flex flex-col md:flex-row-reverse mt-14 lg:mt-7 items-center md:items-start md:justify-between">
        <div className="lg:pt-12">
          <p className="font-roboto font-medium text-26/16 lg:text-3xl text-light-blue md:max-w-92">
            Why should I use SecureU? Your safety is our priority.
          </p>
          <p className="font-lato text-md lg:text-base text-dark-liver mt-4 mb-12 md:mb-0 md:max-w-96">
            We connect users directly to experienced security agents who provide the highest level of quality service.
          </p>
        </div>
        <div className="w-72 lg:w-100 h-40 lg:h-54 lg:m-0">
          <Image src={videoPlaceholder} layout="responsive" />
        </div>
      </Section>
    </ContentWrapper>
  )
}

export { SecureUPurpose }