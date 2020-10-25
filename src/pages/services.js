import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../images/Dub_02.jpg"
import { PageHeader, HomeHeader } from "../utils"
import { Link } from "gatsby"
import ServiceInfo from "../components/ServicePageComponents/ServiceInfo"
import Navbar from "../components/globals/navbar/Navbar"
import WeSale from "../components/ServicePageComponents/WeSale"
import WeDo from "../components/ServicePageComponents/WeDo"

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
        <Link to="/prices">
          <button>Цена</button>
        </Link>
      </PageHeader>
    </HomeHeader>
    <ServiceInfo />
    <WeSale />
    <WeDo />
  </Layout>
)

export default ServicePage
