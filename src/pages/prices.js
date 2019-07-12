import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../images/Price.jpg"
import { PageHeader, HomeHeader } from "../utils"
import Navbar from "../components/globals/navbar"

const PricePage = () => (
  <Layout>
    <SEO
      title="Цена"
      keywords={[
        `Заправка`,
        `Лазерный картридж`,
        `Струйный картридж`,
        `Ремонт лазерного принтера`,
      ]}
    />
    <HomeHeader img={Img}>
      <Navbar />
      <PageHeader>
        <h1>Наши цены вас приятно удивят</h1>
        <h3>Стабильно низкие цены</h3>
        <button>Найти нас</button>
      </PageHeader>
    </HomeHeader>
  </Layout>
)

export default PricePage
