import React, { Component } from "react"
import NavbarLogo from "./NavbarLogo"
// import NavbarTel from "./NavbarTel"
import NavbarMenu from "./NavbarMenu"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavbarLogo handleNavbar={this.handleNavbar} />
        <NavbarMenu navbarOpen={this.state.navbarOpen} />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
    transparent;
`
