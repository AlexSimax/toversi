import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../images/Services.jpeg"
import { PageHeader, HomeHeader } from "../utils"
import Navbar from "../components/globals/navbar"

const ServicePage = () => (
  <Layout>
    <SEO
      title="Заправка"
      keywords={[`Струйный картридж`, `Лазерный картридж`, `Ремонт принтеров`]}
    />
    <HomeHeader img={Img}>
      <Navbar />
      <PageHeader>
        <h1>Заправка, продажа и ремонт струйных и лазерных картриджей</h1>
        <h3>Ремонт и прошивка лазерных принтеров</h3>
        <button>Узнать</button>
      </PageHeader>
    </HomeHeader>
  </Layout>
)

export default ServicePage
