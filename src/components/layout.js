import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/globals/Footer"

import { createGlobalStyle } from "styled-components"

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
    <Footer />
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
#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(1) .PriceItem__SectionTop-ficolt {
   background: #5b5b5b;
  }

#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(2) .PriceItem__SectionTop-ficolt {
   background: #1ec515;
  }

#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(3) .PriceItem__SectionTop-ficolt {
   background: #8414bc;
  }



#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(1)  {
   border: 2px solid #5b5b5b;
  }

#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(2)  {
   border: 2px solid #1ec515;
  }

#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(3)  {
   border: 2px solid #8414bc;
  }



#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(1) .PriceItem__SectionBody-hDtZMy button {
   background: #5b5b5b;
  }
#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(2) .PriceItem__SectionBody-hDtZMy button {
   background: #1ec515;
  }
#___gatsby .Section-hLnjej .PriceSection__PriceList-fZzOBR span:nth-child(3) .PriceItem__SectionBody-hDtZMy button {
   background: #8414bc;
  }

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// #___gatsby > div > div > section.Section - hLnjej.dOisMc > div.PriceSection__PriceList - fZzOBR.fkumfR > span: nth - child(1)
