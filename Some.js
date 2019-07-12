//about.js

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import img from "../images/WorkspacePrinterDarker.jpg"
import Navbar from "../components/globals/navbar/Navbar"

const AboutPage = () => (
  <Layout>
    <SEO title="Картриджи" keywords={[`Заправка картриджей`, `Могилев`]} />
    <PageHeader>
      <h2>Middle of some</h2>
    </PageHeader>
  </Layout>
)

export default AboutPage

// --- about-end

// Header.js
import React from "react"
import styled from "styled-components"
import img from "../images/WorkspacePrinterDarker.jpg"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}
function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.img}) center/cover fixed no-repeat;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`
const DefaultHeader = styled(IndexHeader)`
  min-height: 50vh;
  border: 1ps solid yellow;
`
HomeHeader.defaultProps = {
  // Если картинку сломали как-то там
  img: img,
}
PageHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader }

// --- Header.js
