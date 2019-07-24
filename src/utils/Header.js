import React from "react"
import styled from "styled-components"
import img from "../images/WorkspacePrinterDarker.jpg"
import { styles } from "../utils/"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}
function PageHeader({ children }) {
  return <DefaultHeader>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
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
  // margin-top: 20%;
  margin: 0 auto;
  padding: 0px 40px;
  h1 {
    font-size: 3rem;
    font-weight: 100;
    letter-spacing: 5px;
    line-height: 1.6;
    padding-top: 15%;
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
    margin-top: 15px;
    margin-bottom: 15px;
    border: 2px solid ${styles.colors.buttonBorder};
    border-radius: 7px;
    ${styles.transDefault};
    outline: none;
  }
  button:hover {
    color: ${styles.colors.mainGold};
    padding: 15px 38px;
    ${styles.transObject({ time: "0.4s" })};
    cursor: pointer;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      font-size: 1.8rem;
      line-height: 1.4;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
      line-height: 1.4;
      padding-top: 22%;
      margin-bottom: 6%;
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
