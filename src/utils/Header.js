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
    line-height: 2;
    padding-top: 15%;
    color: #c3b19d;
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  .second_h1 {
    position: relative;
    display: flex;
    font-size: 2.2rem;
    font-weight: 100;
    letter-spacing: 5px;
    line-height: 2;
    color: #c3b19d;
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  .second_h1 span {
    padding-right: 180px;
  }
  .div__absolute {
    position: absolute;
    left: 48%;
    height: 60px;
    width: auto;
    overflow: hidden;
  }
  .div__absolute ul {
    margin: -120px 8% 10px 7%;
    padding-right: 10px;
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
  .div__absolute ul li {
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
    margin-top: 5rem;
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

  @media (max-width: 768px) {
    .h1 {
      line-height: 1.8;
      padding-top: 20%;
    }
    h3 {
      margin-bottom: 4%;
    }
  }
  @media (max-width: 610px) {
    .h1 {
      font-size: 1.6rem;
      line-height: 1.8;
      padding-top: 40%;
    }
    .second_h1 {
      font-size: 1.6rem;
    }
    .second_h1 span {
      padding-right: 150px;
    }
  }
  @media (max-width: 495px) {
    .h1 {
      font-size: 1.3rem;
      line-height: 3;
      padding-top: 35%;
    }
    .second_h1 {
      font-size: 1.3rem;
    }
    .second_h1 span {
      padding-right: 130px;
    }
  }
  @media (max-width: 427px) {
    .h1 {
      font-size: 1.3rem;
      line-height: 3;
      padding-top: 30%;
    }
    .second_h1 {
      font-size: 1.3rem;
    }
    .second_h1 span {
      padding-right: 130px;
      padding-top: 8px;
    }
    .div__absolute {
      top: 8px;
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
