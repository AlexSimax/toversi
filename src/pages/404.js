import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ничего не найдено. Увы...</h1>
    <p>Набранный Вами путь не&#39;существует... сожалеем.</p>
  </Layout>
)

export default NotFoundPage
