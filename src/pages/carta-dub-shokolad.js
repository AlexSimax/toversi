import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/purty-wood.png"
import Img from "gatsby-image"
// import imgQR from "../images/qr-code.png"
import { PageHeader, HomeHeader, Section, styles } from "../utils"
import Navbar from "../components/globals/navbar/Navbar"

export default function Carta() {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "products/shoko_05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img2: file(relativePath: { eq: "products/shoko_03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img3: file(relativePath: { eq: "products/shoko_04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <HomeHeader img={img}>
        <Navbar />
        <PageHeader>
          <SectionWrapper>
            <Section>
              <h3>Пивная карта Беларуси</h3>
              <ProductWrapper>
                <div className="item">
                  <Img fluid={data.img1.childImageSharp.fluid} alt="nocolor1" />
                </div>
                <div className="item">
                  <Img fluid={data.img2.childImageSharp.fluid} alt="nocolor2" />
                </div>
                <div className="item">
                  <Img fluid={data.img3.childImageSharp.fluid} alt="nocolor3" />
                </div>
              </ProductWrapper>
              <InfoWrapper>
                <div class="info">
                  <div class="info_left">
                    <h4>Цвет:</h4>
                    <h4>Размер:</h4>
                    <h4>Цена:</h4>
                    <h4>Цена с доставкой:</h4>
                  </div>
                  <div class="info_right">
                    <h4>Неокрашенная</h4>
                    <h4>720*600</h4>
                    <h4>85 р.</h4>
                    <h4>86 р.</h4>
                  </div>
                </div>
                <div class="qr">
                  <Link to="/pay">
                    <button>QR-код, б/доставки</button>
                  </Link>
                  <Link to="/pay">
                    <button>QR-код, с/доставкой</button>
                  </Link>
                </div>
              </InfoWrapper>
              <Link to="/">
                <button>Вернуться</button>
              </Link>
            </Section>
          </SectionWrapper>
        </PageHeader>
      </HomeHeader>
    </Layout>
  )
}

const SectionWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0);
  padding: 1rem 0;
  margin: 0 auto;
  h3 {
    margin-right: 1rem;
    color: ${styles.colors.mainGold};
  }
  @media (max-width: 660px) {
    padding-right: 5rem;
    h3 {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  padding-right: 2%;
  .item img {
    max-width: 100%;
    /* display: block; */
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
  /* @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
  } */
`
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  .info {
    display: flex;
  }
  .info_left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .info_right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .info_left h4 {
    font-size: 1.2rem;
    margin-top: 10px;
    color: ${styles.colors.primary_2};
  }
  .info_right h4 {
    font-size: 1.2rem;
    margin-top: 10px;
    color: ${styles.colors.mainGold};
    text-transform: lowercase;
    /* margin-left: 40px; */
  }
  .qr {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 14px;
    margin-right: 5%;
  }
  .qr button {
    color: ${styles.colors.primary_2};
    background: ${styles.colors.mainDarkGrey};
    font-size: 18px;
    padding: 15px 32px;
    margin-top: 0;
    border: 2px solid ${styles.colors.buttonBorder};
    border-radius: 7px;
    outline: none;
  }
  .qr button:hover {
    color: #9b632a;
    background: #c3b19d;
    border-color: #c3b19d;
    /* padding: 15px 38px; */
    ${styles.transObject({ time: "0.4s" })}
    cursor: pointer;
  }
  @media (max-width: 728px) {
    display: block;
    .qr {
      margin-top: 70px;
      margin-right: 0;
    }
  }
  @media (max-width: 420px) {
    .info_left h4,
    .info_right h4 {
      font-size: 1rem;
    }
  }
`
