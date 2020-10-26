import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/Logo_Birra.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarLogo extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="toversi" width="120" />
        </Link>
        {/* <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        ></FaAlignRight> */}
      </HeaderWrapper>
    )
  }
}
const HeaderWrapper = styled.div`
  padding: 1rem 1rem 0;
  /* margin-top: 1rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    img {
      width: 80px;
    }
  }
`
