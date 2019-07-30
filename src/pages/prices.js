import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../images/Price.jpg"
import { PageHeader, HomeHeader } from "../utils"
import Navbar from "../components/globals/navbar"
import PriceSection from "../components/globals/PriceSection"
import Brands from "../components/globals/Brands"
import "../components/globals/stylePrice.css"

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
        <Link to="/contacts">
          <button>Найти нас</button>
        </Link>
      </PageHeader>
    </HomeHeader>
    <PriceSection />
    <Brands />
  </Layout>
)

export default PricePage
