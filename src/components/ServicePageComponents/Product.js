import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"

export default function Product({ title, image, message }) {
  return (
    <ProductWrapper>
      <Section />
      {/* <h1 className="title">{title}</h1> */}
      <img src={image} className="images" />
      {/* <h3 className="message">{message}</h3> */}
    </ProductWrapper>
  )
}

const ProductWrapper = styled.span`
  /* padding: 0 1.3rem 1.7rem 1.3rem; */
  width: 40%;
  text-align: center;
  background: #fff;
  margin: 0 auto;
  .title {
    line-height: 2rem;
    font-size: 1.5rem;
    color: ${styles.colors.mainDarkGrey};
  }
  .message {
    font-size: 1rem;
    line-height: 1.7rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.1rem;
    font-family: "Arial";
    font-weight: 100;
    text-align: justify;
  }
  .images {
    width: 80%;
  }
  @media (max-width: 992px) {
    .title {
      font-size: 1.3rem;
      line-height: 1.5rem;
    }
    .message {
      /* text-align: left; */
    }
  }
  @media (max-width: 660px) {
    width: 90%;
    margin: 0 12% 0 0;
  }
`
