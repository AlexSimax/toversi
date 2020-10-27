import React from "react"
import "./modal.css"
import Img from "gatsby-image"
import imgQR from "../images/Oreh_02.jpg"

const QR_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "qr-code.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }
  query = { QR_IMAGE }
  render() {
    if (!this.props.show) {
      return null
    }

    return (
      <div className="modal" id="modal">
        {/* <div className="modal-content">{this.props.children}</div> */}
        <Img fluid={imgQR} />
        <h3>Отсканируйте qr-код для перехода в систему ЕРИП</h3>
        <div>
          <button
            // className="toggle-button"
            onClick={e => {
              this.onClose(e)
            }}
          >
            Закрыть окно
          </button>
        </div>
      </div>
    )
  }
}
