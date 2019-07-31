import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../images/Mogilev_Leninskaja.jpg"
import { PageHeader, HomeHeader } from "../utils"
import Navbar from "../components/globals/navbar"
import ContactSection from "../components/globals/ContactSection"
import GoogleMap from "../components/globals/GoogleMap.js"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Контакты"
      keywords={[
        `Заправка картриджей в Могилеве`,
        `Лазерный картридж`,
        `Струйный картридж`,
      ]}
    />
    <HomeHeader img={Img}>
      <Navbar />
      <PageHeader>
        <h1>Мы находимся в центре города</h1>
        <h3>Рядом с пешеходной ул. Ленинской</h3>
        <Link to="/contacts#map">
          <button>Показать на карте</button>
        </Link>
      </PageHeader>
    </HomeHeader>
    <ContactSection />
    <GoogleMap />
  </Layout>
)

export default ContactPage
