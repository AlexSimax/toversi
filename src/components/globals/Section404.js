import React from "react"
import styled from "styled-components"
import SEO from "../../components/seo"
import { Link } from "gatsby"

export default function Section404() {
  return (
    <Section404Wrapper>
      <SEO title="404: Not found" />
      <h1>Ничего не найдено. Увы...</h1>
      <p>Набранный Вами путь не существует... сожалеем.</p>
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
    margin: 0 0 0 60%;
  }
  button:hover {
    color: #1ec515;
    padding: 15px 38px;
    cursor: pointer;
  }
`
