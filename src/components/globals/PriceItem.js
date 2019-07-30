import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"

export default function PriceItem({ titlePrice, subtitle, price }) {
  return (
    <PriceItemWrapper>
      <SectionTop>
        <h1 className="titlePrice">{titlePrice}</h1>
        <h3 className="subtitle">{subtitle}</h3>
      </SectionTop>
      <SectionBody className="aaa">
        <h1 className="price">{price}</h1>
        <Link to="/contacts">
          <button>Позвонить</button>
        </Link>
      </SectionBody>
    </PriceItemWrapper>
  )
}
const SectionTop = styled.div`
  height: 100px;
  background: ${styles.colors.mainDarkGrey};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  .titlePrice {
    margin-top: 1rem;
    color: white;
    ${styles.textFamilyRobCond};
    text-transform: uppercase;
    font-weight: 100;
  }
  .subtitle {
    color: white;
    ${styles.textFamilyRobCond};
    text-transform: lowercase;
    font-weight: 100;
    margin-bottom: 0.5rem;
  }
`

const SectionBody = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  .price {
    font-size: 3.5rem;
    font-weight: 200;
    color: ${styles.colors.mainGold};
    margin-top: 2rem;
  }
  button {
    color: ${styles.colors.mainWhite};
    background: ${styles.colors.mainDarkGrey};
    font-size: 18px;
    width: 80%;
    padding: 15px 0;
    margin-top: 15px;
    margin-bottom: 15px;
    ${styles.transDefault};
    outline: none;
  }
  button:hover {
    color: ${styles.colors.mainWhite};
    /* padding: 15px 15px; */
    background: ${styles.colors.mainHoverDarkGrey};
    ${styles.transObject({ time: "0.4s" })};
    cursor: pointer;
  }
`

const PriceItemWrapper = styled.span`
  width: 33%;
  text-align: center;
  background: #fff;
  border: 1px solid ${styles.colors.mainDarkGrey};
  margin: 0 1rem;
  /* border: 1px solid gray; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .title {
    /* height: 10%; */
    line-height: 2rem;
    font-size: 1.5rem;
    color: ${styles.colors.mainDarkGrey};
    /* padding-bottom: 2rem; */
  }
  .message {
    font-size: 1rem;
    line-height: 1.7rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.1rem;
    /* ${styles.textTitle}; */
    font-family: "Arial";
    font-weight: 100;
    text-align: justify;
  }
  .images {
    width: 80%;
    /* margin: 0 auto; */
  }
  @media (max-width: 992px){
   .title{
    font-size: 1.3rem;
    line-height: 1.5rem;
   }
   .message{
    text-align: left;
   }
  }
  @media (max-width: 660px) {
   width: 96%;
   margin: 0 auto 1.8rem auto;
  } 
`
