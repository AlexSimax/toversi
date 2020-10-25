import React, { Component } from "react"
import styled from "styled-components"

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div>
          ТВ, 2007 - {new Date().getFullYear()},{" "}
          <p>т. 700-600</p>
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
  padding: 2rem 1rem;
  background-image: linear-gradient(to right, black, #137f0b, black);
  color: #d4af37;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  .mail a {
    text-decoration: none;
    color: #aaa9a9;
  }
`
