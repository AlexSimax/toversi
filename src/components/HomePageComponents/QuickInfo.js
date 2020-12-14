import React, { Component } from "react"
import { Section, Title, styles } from "../../utils"
import styled from "styled-components"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <QuickInfoWrapper>
          <p className="text">
            Мы офигенно классные и вообще умницы. Мы офигенно классные и вообще
            умницы.Мы офигенно классные и вообще умницы. Мы офигенно классные и
            вообще умницы. Мы офигенно классные и вообще умницы.
          </p>
          <Title message="Беларусь" title=""></Title>
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
  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
