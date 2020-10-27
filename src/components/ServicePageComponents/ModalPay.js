import React from "react"
import Product from "./Product.js"
import { Link } from "gatsby"
import { Section } from "../../utils"
import styled from "styled-components"
import imgQR from "../../images/qr-code.png"

export default function WeSale() {
  return (
    <SectionWrapper>
      <Section>
        <h3>Отсканируйте qr-код для перехода в систему ЕРИП</h3>
        <ProductList>
          <Product image={imgQR} />
        </ProductList>
        <Link to="/">
          <button>Вернуться</button>
        </Link>
      </Section>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 0;
  @media (max-width: 660px) {
    h3 {
      font-size: 1rem;
      margin-right: 3rem;
    }
  }
`
const ProductList = styled.div`
  /* margin: 1rem 0; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 660px) {
    /* display: block; */
    flex-direction: column;
    align-items: center;
    /* margin: 2rem auto; */
    /* width: auto; */
  }
`
