import React, { Component } from "react"
import { Section, Title, styles } from "../../utils"
import styled from "styled-components"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Кто мы?" title="наша миссия"></Title>
        <QuickInfoWrapper>
          <p className="text">
            Наша Компания занимается заправкой картриджей уже более 15 лет. И за
            это время мы хорошо изучили различные методики работы как со
            струйными, так и с лазерными принтерами, и, разумеется, с их
            картриджами. Это позволяет нам эффективно работать на оптимальный
            результат, который ценят наши постоянные заказчики и партнёры. Для
            нас главное - оправдать доверие людей, обращающихся к нам!
          </p>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2.5rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
