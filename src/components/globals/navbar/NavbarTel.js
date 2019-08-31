import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarTel extends Component {
  render() {
    return (
      <TelWrapper>
        <p>
          <span>
            <i>+375 (222) 76-00-76</i>
          </span>
        </p>
        <p>
          <span>
            <i>+375 (25) 776-00-76</i>
          </span>
        </p>
      </TelWrapper>
    )
  }
}

const TelWrapper = styled.div`
  span {
    color: ${styles.colors.mainLightGrey};
    font-weight: 200;
    line-height: 1.5;
  }
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 10rem;
  }
`
