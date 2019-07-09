import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicePage = () => (
  <Layout>
    <SEO
      title="Заправка"
      keywords={[`Струйный картридж`, `Лазерный картридж`, `Ремонт принтеров`]}
    />
    <h3>This is ServicePage</h3>
  </Layout>
)

export default ServicePage
