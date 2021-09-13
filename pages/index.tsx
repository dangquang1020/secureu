import type { NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.scss'
import { Banner } from '../layout/Banner'
import { Section } from '../layout/Section'
import { Footer } from '../layout/Footer'
import { Meta } from '../layout/Meta'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta></Meta>

      <Section>
        <Banner></Banner>
      </Section>

      <Footer></Footer>
    </div>
  )
}

export default Home
