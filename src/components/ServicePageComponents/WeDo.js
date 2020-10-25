import React from "react"
import ServiceProducts from "./ServiceProducts.js"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import serv1 from "../../images/Krasnoe_derevo_01.jpg"
import serv2 from "../../images/Ebenovoe_derevo_01.jpg"
import serv3 from "../../images/Krasnoe_derevo_02.jpg"

export default function WeDo() {
  return (
    <Section>
      <Title title="Наши услуги" message=""></Title>
      <ProductList>
        <ServiceProducts
          title="Заправка лазерных картриджей"
          image={serv1}
          message="Заправка лазерных картиджей позволяет реально сэкономить Ваши деньги! Качество нашего тонера соответствует стандартам. А при работе по заправке сам картридж проходит диагностику и очистку, что положительно влияет на дальнейшую беспроблемную его работу."
        />
        <ServiceProducts
          title="Заправка струйных картриджей"
          image={serv2}
          message="В отличие от лазерной печати, печать на струйном принтере обходится дороже, а чернил хватает на меньшее количество листов печати. Поэтому и выгоднее перезаправлять сам струйный картридж. Но это не так просто сделать самому, поэтому лучше довериться специалистам."
        />
        <ServiceProducts
          title="Ремонт и прошивка лазерных принтеров"
          image={serv3}
          message="Проводим полную профилактику оборудования, с очисткой, настройкой и регулировкой компонентов лазерных и струйных принтеров, а также МФУ. Снимаем заводскую защиту, которая ограничивает число заправок картриджей."
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
