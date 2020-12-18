import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../utils"
import img from "../images/Bcgrd.jpg"
import Navbar from "../components/globals/navbar/Navbar"
import { PageHeader } from "../utils/"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SEO
            title="Карта Бирра"
            keywords={[`Изделия из фанеры`, `Могилев`, `Карта Бирра`]}
          />
          <HomeHeader img={img}>
            <Navbar />
            <PageHeader>
              <h1 className="h1">
                Собери свою пивную <br />
              </h1>
              <div class="second_h1">
                <span>карту</span>
                <div className="div__absolute">
                  <ul className="h1__ul">
                    <li className="h1__ul_li">Беларуси</li>
                    <li className="h1__ul_li">России</li>
                    <li className="h1__ul_li">МКАД</li>
                    <li className="h1__ul_li">Беларуси</li>
                  </ul>
                </div>
              </div>
              {/* <Link to="/pay">
                <button>Перейти</button>
              </Link> */}
            </PageHeader>
          </HomeHeader>
          <QuickInfo />
          <Gallery />
        </Layout>
      </div>
    )
  }
}
