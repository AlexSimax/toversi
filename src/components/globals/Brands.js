import React from "react"
import styled from "styled-components"
import Brother from "../../images/Brother_ok.png"
import Canon from "../../images/Canon_ok.png"
import EPSON from "../../images/EPSON-ok.png"
import Kyocera from "../../images/Kyocera_ok.png"
import Panasonic from "../../images/Panasonic_ok.png"
import Sharp from "../../images/Sharp_ok.png"
import Toshiba from "../../images/Toshiba_ok.png"
import HP from "../../images/hp_ok.png"
import Lexmark from "../../images/lexmark-ok.png"
import Samsung from "../../images/samsung_ok.png"

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
