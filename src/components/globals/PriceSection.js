import React from "react"
import PriceItem from "../globals/PriceItem"
import { Section, Title } from "../../utils"
import styled from "styled-components"

export default function PriceSection() {
  return (
    <Section>
      <Title title="Цена заправки картриджа" message=""></Title>
      <PriceList>
        <PriceItem titlePrice="Лазерный" subtitle="черный" price="10 р." />
        <PriceItem titlePrice="Лазерный" subtitle="цветной" price="17 р." />
        <PriceItem titlePrice="Струйный" subtitle="любой цвет" price="5 р." />
      </PriceList>
    </Section>
  )
}
const PriceList = styled.div`
  margin: 3rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 660px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
  }
  @media (max-width: 992px) {
    width: 90%;
  }
`
