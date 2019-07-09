import React, { Component } from "react"
import FooterInfo from "./FooterInfo"
import styled from "styled-components"

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterInfo />
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.nav`
  background: #0b3d06;
  color: lightgrey;
`
