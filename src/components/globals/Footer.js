import React, { Component } from "react"
import styled from "styled-components"
import "../layout.css"

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div>
          ТВ, 2007 - {new Date().getFullYear()}, <p>т. 700-600</p>
        </div>
        <p className="mail">
          Разработано&nbsp;
          <a
            href="mailto:eurock3@gmail.com?Subject=Посетитель%20toversi.by"
            target="_top"
          >
            <i>AlexSimax</i>
          </a>
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 1rem 1rem;
  background: var(--primary-5);
  color: #a28d74;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  .mail a {
    text-decoration: none;
    color: #ccc;
  }
`
