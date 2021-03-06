import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"

export default function ServiceProduct({ title, image, message }) {
  return (
    <ServiceProductWrapper>
      <Section />
      <h1 className="title">{title}</h1>
      <img src={image} className="images" />
      <h3 className="message">{message}</h3>
    </ServiceProductWrapper>
  )
}

const ServiceProductWrapper = styled.span`
  padding: 0 1.3rem 1.7rem 1.3rem;
  width: 33%;
  text-align: center;
  background: #fff;
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
