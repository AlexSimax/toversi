import React, { Component } from "react"
import NavbarLogo from "./NavbarLogo"
// import NavbarTel from "./NavbarTel"
import NavbarSoc from "./NavbarSoc"
import styled from "styled-components"
import NavbarSocials from "./NavbarSoc"

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
        <NavbarSocials />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    transparent;
`
