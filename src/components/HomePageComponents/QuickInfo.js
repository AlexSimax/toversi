import React, { Component } from "react"
import { Section, Title, styles } from "../../utils"
import styled from "styled-components"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Предлагаем изделия из фанеры" title=""></Title>
        <QuickInfoWrapper>
          <p className="text">
            Мы офигенно классные и вообще умницы. Мы офигенно классные и вообще
            умницы.Мы офигенно классные и вообще умницы.Мы офигенно классные и
            вообще умницы.Мы офигенно классные и вообще умницы.Мы офигенно
            классные и вообще умницы.Мы офигенно классные и вообще умницы.Мы
            офигенно классные и вообще умницы.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quis vero aut repudiandae aspernatur odit doloremque voluptatum
            earum numquam fugiat.
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
