import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../utils"
import img from "../images/WorkspacePrinterDarker.jpg"
import Navbar from "../components/globals/navbar/Navbar"
import { PageHeader } from "../utils/"

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
        <button>Узнать</button>
      </PageHeader>
    </HomeHeader>
  </Layout>
)

export default IndexPage
