import React from "react"
import styled from "styled-components"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function Section404() {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "404.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Section404Wrapper>
      <div class="wrapper_img">
        <SEO title="404: Not found" />
        {/* <h1>Ничего не найдено. Увы...</h1>
        <p>Набранный Вами путь не существует... сожалеем.</p> */}
        <Img fluid={data.img1.childImageSharp.fluid} alt="not-found" />
      </div>
      <Link to="/">
        <button>На Главную</button>
      </Link>
    </Section404Wrapper>
  )
}

const Section404Wrapper = styled.div`
  height: 90vh;
  h1 {
    padding-top: 20vh;
    color: #1ec515;
    font-size: 3rem;
    margin: 0 auto;
    padding-bottom: 5%;
    text-align: center;
  }
  p {
    padding-left: 10%;
    color: #5b5b5b;
    font-size: 2rem;
    padding-bottom: 5%;
  }
  button {
    color: #5b5b5b;
    background: transparent;
    font-size: 18px;
    padding: 15px 32px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: 2px solid grey;
    border-radius: 7px;
    outline: none;
    margin: 3% 0 2% 40%;
  }
  button:hover {
    color: #d4af37;
    cursor: pointer;
  }
  @media (max-width: 576px) {
    button {
      font-size: 14px;
      padding: 7px 15px;
      margin-top: 7px;
      margin-bottom: 7px;
      margin: 3% 0 2% 30%;
    }
  }
`
