import React from "react"
import styled from "styled-components"
import { styles } from "../utils/"

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline"></div>
    </TitleWrapper>
  )
}

Title.defaultProps = {
  message: "our message",
  title: "our title",
}

const TitleWrapper = styled.div`
  text-align: center;
  .message {
    ${styles.textFamilyRobCond};
    font-size: 1.6rem;
    ${styles.letterSpacing({ spacing: "0.2rem" })};
    color: ${styles.colors.mainGold};
  }
  .title {
    ${styles.letterSpacing({ spacing: "0.2rem" })};
    ${styles.textTitle};
    font-size: 2rem;
    font-weight: 100;
    text-transform: uppercase;
  }
  .underline {
    height: 0.2rem;
    width: 5rem;
    background: ${styles.colors.mainGold};
    margin: 0.5rem auto;
  }
`
