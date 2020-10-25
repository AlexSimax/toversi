import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"

import { Link } from "gatsby"
// import "../../layout.css"

export default class NavbarMenu extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "Варианты",
      },
      {
        id: 1,
        path: "/services",
        name: "Услуги",
      },
    ],
  }
  render() {
    return (
      <MenuWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="nav-link"
                activeStyle={{ color: "#1EC515" }}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </MenuWrapper>
    )
  }
}

const MenuWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainWhite};
    font-weight: 100;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    ${styles.transDefault};
    &:hover {
      color: ${styles.colors.mainGrey};
      background-color: ${styles.colors.mainHoverBcgr};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
     }
    &:active {
     color: red;
    }
    }
    
    height: ${props => (props.open ? "152px" : "0px")};
    overflow: hidden;
    ${styles.transObject({ time: "0.9s" })};
    @media (min-width: 768px) {
     height: auto;
     display: flex;
     margin: 0 50px 0 30px;
     .nav-link:hover {
      background: transparent;
      color: ${styles.colors.mainHoverDarkGrey};
      padding: 0.3rem 1rem 0.5rem 1rem;
     }
    }
  }
`
