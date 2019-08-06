import React from "react"
import styled from "styled-components"
import Brother from "../../images/Brother.png"
import Canon from "../../images/Canon.png"
import EPSON from "../../images/EPSON.png"
import Kyocera from "../../images/Kyocera.png"
import Panasonic from "../../images/Panasonic.png"
import Sharp from "../../images/Sharp.png"
import Toshiba from "../../images/Toshiba.png"
import HP from "../../images/hp.png"
import Lexmark from "../../images/lexmark.png"
import Samsung from "../../images/samsung.png"

export default function Brands() {
  const width = 100
  return (
    <BrandsWrapper>
      <div>
        <img src={Brother} alt="Brother" width={width} />
      </div>
      <div>
        <img src={Canon} alt="Canon" width={width} />
      </div>
      <div>
        <img src={EPSON} alt="EPSON" width={width} />
      </div>
      <div>
        <img src={Kyocera} alt="Kyocera" width={width} />
      </div>
      <div>
        <img src={Panasonic} alt="Panasonic" width={width} />
      </div>
      <div>
        <img src={Sharp} alt="Sharp" width={width} />
      </div>
      <div>
        <img src={Toshiba} alt="Toshiba" width={width} />
      </div>
      <div>
        <img src={HP} alt="HP" width={width} />
      </div>
      <div>
        <img src={Lexmark} alt="Lexmark" width={width} />
      </div>
      <div>
        <img src={Samsung} alt="Samsung" width={width} />
      </div>
    </BrandsWrapper>
  )
}

const BrandsWrapper = styled.section`
  display: flex;
  width: 95%;
  margin: 2.5rem auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 4%;
  flex-wrap: wrap;
  margin-bottom: 3%;
  div {
    padding: 0 7px;
  }
  div img {
    -webkit-filter: grayscale(100%) opacity(0.3);
    filter: grayscale(100%) opacity(0.2);
    /* width: 180px; */
  }
  @media (max-width: 1180px) {
    justify-content: flex-start;
    padding-left: 5%;
    div {
      padding: 3px 7px;
    }
  }
  @media (max-width: 568px) {
    justify-content: flex-start;
    padding-left: 2%;
    div {
      padding: 3px 7px;
    }
  }
`
