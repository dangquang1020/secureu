import Image from 'next/image'
import styles from '../styles/modules/Banner.module.scss';
import { Button } from '../components/button/Button';
import { ContentWrapper } from '../layout/ContentWrapper';
import { SectionTitle } from '../components/text/SectionTitle';
import { SectionDescription } from '../components/text/SectionDescription';

import bannerBg from '../assets/images/banner-bg.png';
import logo from '../assets/images/logo-white-trans.png';

interface BannerProps {
  onButtonClick?: Function
}

const Banner: React.FC<BannerProps> = ({
  onButtonClick: goToAbout
}) => {
  const title1 = "Personal safety on demand."
  const title2 = "Any time, anywhere."
  const description = "SecureU is an on demand safety app that allows users to order personal security agents for residential, business, private event(s), travel security, and asset security."

  return (
    <div className="relative py-5 lg:py-20 h-152 lg:h-168">
      <div className={`-z-1 absolute w-full h-full top-0 left-0`}>
        <Image src={bannerBg} layout="fill" objectFit="cover" className="object-75-top lg:object-left-center" alt="SecureU Banner" />
      </div>

      <ContentWrapper className="flex-col items-start">
        <div className={styles.logo}>
          <Image src={logo} layout='intrinsic' alt="SecureU Logo" />
        </div>

        <SectionTitle title={title1} className={`mt-8 lg:mt-20 ${styles.title}`} />
        <SectionTitle title={title2} className={`mb-5 ${styles.title}`} />
        <SectionDescription description={description} className={styles.description} />

        <Button className="btn-danger mt-10 lg:mt-14" onClick={goToAbout}>Learn More</Button>
      </ContentWrapper>
    </div>
  )
}

export { Banner };
