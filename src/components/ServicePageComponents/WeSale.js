import React from "react"
import Product from "./Product.js"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import sell2 from "../../images/Others/InksStruynie.jpg"
import sell1 from "../../images/Others/CatrStr1.jpg"
import sell3 from "../../images/Others/Paper1.jpg"

export default function WeSale() {
  return (
    <SectionWrapper>
      <Section>
        <Title title="Продаём" message=""></Title>
        <ProductList>
          <Product
            title="Картриджи лазерные и струйные"
            image={sell1}
            message="Мы предлагаем как оригинальные, так и неоригинальные картриджи. При этом важно понимать, что качество печати на неоригинальных картриджах может отличаться от стандарта."
          />
          <Product
            title="Чернила для струйных картриджей"
            image={sell2}
            message="В чёрных картриджах обычно используются пигментные чернила, чтобы приблизиться к качеству лазерного принтера. А в цветных картриджах применяются водорастворимые чернила."
          />
          <Product
            title="Офисная бумага,&nbsp; плотность 80г/м&sup2;"
            image={sell3}
            message="Бумага отличается белизной и гладкостью. И предназначена для оптимальной работы с повседневными документами. Применяется для печати как на струйных, так и на лазерных принтерах."
          />
        </ProductList>
      </Section>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  background-color: #f8f8f8;
  padding: 2rem 0;
`
const ProductList = styled.div`
  margin: 3rem 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 660px) {
    /* display: block; */
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
    /* width: auto; */
  }
`
