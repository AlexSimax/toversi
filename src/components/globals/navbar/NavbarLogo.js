import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/Logo_Birra.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarLogo extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="toversi" width="150" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        ></FaAlignRight>
      </HeaderWrapper>
    )
  }
}
const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    margin-top: 1rem;
    color: ${styles.colors.mainGreen};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
