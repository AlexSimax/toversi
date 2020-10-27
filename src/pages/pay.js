import React from "react"

import Layout from "../components/layout"
import img from "../images/Bcgrd.jpg"
import imgQR from "../images/qr-code.png"
import { PageHeader, HomeHeader } from "../utils"

import Navbar from "../components/globals/navbar/Navbar"
import ModalPay from "../components/ServicePageComponents/ModalPay"

const Pay = () => (
  <Layout>
    <HomeHeader img={img}>
      <Navbar />
      <PageHeader>
        <ModalPay />
      </PageHeader>
    </HomeHeader>
  </Layout>
)

export default Pay
