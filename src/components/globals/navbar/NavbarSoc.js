import React, { Component } from "react"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaVk } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarSoc extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaVk className="icon vk-icon" />,
        path: "https://vk.com",
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://instagram.com",
      },
      {
        id: 3,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://facebook.com",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.key}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}
const IconWrapper = styled.div`
  margin-right: 2%;
  .icon {
    font-size: 2rem;
    color: white;
    margin: 0 5px;
    cursor: pointer;
    ${styles.transFunction()}
  }
  .icon:hover {
    color: #c3b19d;
  }
  /* padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    margin-top: 1rem;
    color: ${styles.colors.mainGreen};
    cursor: pointer;
  } */
  @media (max-width: 768px) {
    .icon {
      font-size: 1.5rem;
    }
  }
`
