import React, { Component } from "react"
import { Section, Title, styles } from "../../utils"
import styled from "styled-components"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section style={{ marginTop: "3rem" }}>
        <Title
          message="Что мы предлагаем?"
          title="Как мы можем Вам помочь"
        ></Title>
        <QuickInfoWrapper>
          <p className="text">
            Наш многолетний опыт позволяет находить оптимальное решение по
            ремонту и обслуживанию Вашего принтера! Вы узнате, что для нас важно
            решение Ваших проблем с печатным оборудованием. И мы не гонимся за
            прибылью, а для нас важен результат!
          </p>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2.5rem auto 5rem auto;
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
