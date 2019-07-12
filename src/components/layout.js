import React from "react"
import PropTypes from "prop-types"

import { createGlobalStyle } from "styled-components"

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
)
// Здесь надо изучить что отображается в шаблоне этом !!!
const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 /* :root {
   --mainGreen: #1ec515;
 } */
 body {
   font-family: "Arial";
 }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
