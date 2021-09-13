import Image from 'next/image'
import styles from '../styles/modules/Banner.module.scss';
import { Button } from '../components/button/Button';
import { ContentWrapper } from '../layout/ContentWrapper';
import { SectionTitle } from '../components/text/SectionTitle';
import { SectionDescription } from '../components/text/SectionDescription';

import bannerBg from '../public/images/banner-bg.png';
import logo from '../public/images/logo-white-trans.png';

const Banner = () => {
  const title1 = "Personal safety on demand."
  const title2 = "Any time, anywhere."
  const description = "SecureU is an on demand safety app that allows users to order personal security agents for residential, business, private event(s), travel security, and asset security."

  return (
    <div className={styles.container}>
      <div className={`-z-1 absolute w-full h-full top-0 left-0 ${styles.background}`}>
        <Image src={bannerBg} layout="fill" objectFit="cover" />
      </div>

      <ContentWrapper className="flex-col items-start">
        <div className={styles.logo}>
          <Image src={logo} layout='intrinsic' />
        </div>

        <SectionTitle title={title1} className={`mt-8 lg:mt-20 ${styles.title}`} />
        <SectionTitle title={title2} className={`mb-5 ${styles.title}`} />
        <SectionDescription description={description} className={styles.description} />

        <Button className="btn-danger mt-10 lg:mt-14">Learn More</Button>
      </ContentWrapper>
    </div>
  )
}

export { Banner };
