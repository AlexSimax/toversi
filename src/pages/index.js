import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, BannerButton } from "../utils"
import img from "../images/Bcgrd.jpg"
import Navbar from "../components/globals/navbar/Navbar"
import { PageHeader } from "../utils/"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Карта Бирра"
      keywords={[`Изделия из фанеры`, `Могилев`, `Карта Бирра`]}
    />
    <HomeHeader img={img}>
      <Navbar />
      <PageHeader>
        <h1>Собери свою уникальную пивную карту!</h1>
        {/* <h3>Собери свою уникальную пивную карту!</h3> */}

        <button className="modal">Перейти к оплате</button>
      </PageHeader>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
