import React, { Component } from "react"
import { Section, Title, styles } from "../../utils"
import styled from "styled-components"
import { FaPhone } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
// import img from "../../images/Contacts.jpeg"

export default function ContactSection() {
  return (
    <Section style={{ marginTop: "5rem" }}>
      <Title message="" title="Наши контакты"></Title>
      <QuickInfoWrapper>
        <div className="contacts">
          <div className="dataAdress">
            <div className="tel">
              <FaPhone className="icons" />
              <span>
                <p>+375 (222) 76-00-76</p>
                <p>+375 (29) 355-37-20</p>
              </span>
            </div>
            <div className="email">
              <FaEnvelope className="icons" />
              <p>chistovik@tut.by</p>
            </div>
            <div className="adress">
              <FaHome className="icons" />
              <p>212030 Могилев, ул.Ленинская 28А к.1</p>
            </div>
          </div>
        </div>
      </QuickInfoWrapper>
      {/* {children} */}
    </Section>
  )
}
const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2.5rem auto 6rem auto;
  text-align: center;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
  .contacts {
    background: url("../../images/Contacts.jpeg") center/cover fixed no-repeat;
    .icons {
      font-size: 3rem;
      color: ${styles.colors.mainGreen};
      display: inline-block;
      margin: 4rem auto 0.6rem auto;
    }
  }
`
