import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, BannerButton } from "../utils"
import img from "../images/WorkspacePrinterDarker.jpg"
import Navbar from "../components/globals/navbar/Navbar"
import { PageHeader } from "../utils/"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"
import Brands from "../components/globals/Brands"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Картриджи"
      keywords={[`Заправка картриджей`, `Могилев`, `Лазерный принтер`]}
    />
    <HomeHeader img={img}>
      <Navbar />
      <PageHeader>
        <h1>Заправка картриджей в Могилеве</h1>
        <h3>Оперативно и недорого</h3>
        <Link to="/prices">
          <button>Узнать</button>
        </Link>
      </PageHeader>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Brands />
  </Layout>
)

export default IndexPage
