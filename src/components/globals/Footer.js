import React, { Component } from "react"
import styled from "styled-components"

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div>ЧТПУП "Чистовик", 2003 - {new Date().getFullYear()}</div>
        <p className="mail">
          Разработано&nbsp;
          <a
            href="mailto:eurock3@gmail.com?Subject=Посетитель%20cleancopy.by"
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
  /* background: #494949; */
  background-image: linear-gradient(#898888, #494949);
  color: #d4af37;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  .mail a {
    text-decoration: none;
    color: #aaa9a9;
  }
`
