import type { NextPage } from 'next'
import React from 'react'
import { Banner } from '../layout/Banner'
import { Section } from '../layout/Section'
import { Footer } from '../layout/Footer'
import { Meta } from '../layout/Meta'

const Home: NextPage = () => {
  return (
    <div className="main-container">
      <Meta></Meta>

      <Section>
        <Banner></Banner>
      </Section>

      <Footer></Footer>
    </div>
  )
}

export default Home
