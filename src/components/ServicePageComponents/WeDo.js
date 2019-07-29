import React from "react"
import ServiceProducts from "./ServiceProducts.js"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import serv1 from "../../images/Others/3pack_600_600.jpg"
import serv2 from "../../images/Others/StruynayaZapravka.jpg"
import serv3 from "../../images/Others/Sams-m2070-1.jpg"

export default function WeDo() {
  return (
    <Section>
      <Title title="Наши услуги" message=""></Title>
      <ProductList>
        <ServiceProducts
          title="Заправка лазерных картриджей"
          image={serv1}
          message="Мы предлагаем как оригинальные, так и неоригинальные картриджи. При этом важно понимать, что качество печати на неоригинальных картриджах может отличаться от стандарта."
        />
        <ServiceProducts
          title="Заправка струйных картриджей"
          image={serv2}
          message="В чёрных картриджах обычно используются пигментные чернила, чтобы приблизиться к качеству лазерного принтера. А в цветных картриджах применяются водорастворимые чернила."
        />
        <ServiceProducts
          title="Ремонт и прошивка лазерных принтеров"
          image={serv3}
          message="Бумага отличается белизной и гладкостью. И предназначена для оптимальной работы с повседневными документами. Применяется для печати как на струйных, так и на лазерных принтерах."
        />
      </ProductList>
    </Section>
  )
}
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
