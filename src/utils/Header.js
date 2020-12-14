import React from "react"
import styled from "styled-components"
import img from "../images/Bcgrd.jpg"
import { styles } from "../utils/"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}
function PageHeader({ children }) {
  return <DefaultHeader>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.img}) center/cover fixed no-repeat;
  @media (max-width: 768px) {
    min-height: 80vh;
  }
`
const DefaultHeader = styled(IndexHeader)`
  min-height: 100vh;
  text-align: center;
  color: white;
  text-transform: uppercase;
  margin-top: 20%;
  margin: 0 auto;
  padding: 0px 40px;
  .h1 {
    position: relative;
    display: flex;
    font-size: 2.2rem;
    font-weight: 100;
    letter-spacing: 5px;
    line-height: 1.6;
    padding-top: 20%;
    color: #c3b19d;
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  .h1 div {
    position: relative;
    height: 60px;
    width: auto;
    overflow: hidden;
  }
  .h1 div ul {
    margin: -120px 8% 10px 7%;
    padding-right: 8px;
    text-align: left;
    animation: up 10s linear infinite;
  }
  @keyframes up {
    0% {
      transform: translateY(-60px);
    }
    7% {
      transform: translateY(0px);
    }
    33% {
      transform: translateY(0px);
    }
    41% {
      transform: translateY(60px);
    }
    68% {
      transform: translateY(60px);
    }
    75% {
      transform: translateY(120px);
    }
    100% {
      transform: translateY(120px);
    }
  }
  .h1 div ul li {
    list-style-type: none;
    height: 60px;
    color: var(--green-1);
  }

  h3 {
    padding: 25px 0;
    font-weight: 100;
    letter-spacing: 3px;
    word-spacing: 8px;
    color: #eae8e8;
    text-transform: uppercase;
  }
  button {
    color: #eae8e8;
    background: transparent;
    font-size: 18px;
    padding: 15px 32px;
    margin-top: 3rem;
    margin-bottom: 15px;
    border: 2px solid ${styles.colors.buttonBorder};
    border-radius: 7px;
    ${styles.transDefault};
    outline: none;
  }
  button:hover {
    color: #9b632a;
    background: #c3b19d;
    border-color: #c3b19d;
    padding: 15px 38px;
    ${styles.transObject({ time: "0.4s" })};
    cursor: pointer;
  }
  /* h1 {  // old version
    font-size: 2.2rem;
    font-weight: 100;
    letter-spacing: 5px;
    line-height: 1.6;
    padding-top: 20%;
    color: #c3b19d;
  } */
  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      font-size: 1.8rem;
      line-height: 1.4;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.4rem;
      line-height: 1.8;
      padding-top: 42%;
      margin-bottom: 16%;
    }
    h3 {
      margin-bottom: 4%;
    }
  }
`
HomeHeader.defaultProps = {
  // Если картинку сломали как-то там
  img: img,
}
PageHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader }
