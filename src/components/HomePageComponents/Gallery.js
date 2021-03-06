import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "Phanera_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "Dub_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "Dub_shokolad_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img4: file(relativePath: { eq: "Ebenovoe_derevo_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img5: file(relativePath: { eq: "Krasnoe_derevo_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img6: file(relativePath: { eq: "Oreh_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img7: file(relativePath: { eq: "Oreh_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img8: file(relativePath: { eq: "Oreh_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        const img4 = data.img4.childImageSharp.fluid
        const img5 = data.img5.childImageSharp.fluid
        const img6 = data.img6.childImageSharp.fluid
        const img7 = data.img7.childImageSharp.fluid
        const img8 = data.img8.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <Link to="/carta">
                <div className="item item-1">
                  <Img fluid={img1} />
                  <p className="info">Неокрашенное. 74р.</p>
                </div>
              </Link>
              <Link to="/carta-dub">
                <div className="item item-2">
                  <Img fluid={img2} />
                  <p className="info">Дуб. 85р.</p>
                </div>
              </Link>
              <Link to="/carta-dub-shokolad">
                <div className="item item-3">
                  <Img fluid={img3} />
                  <p className="info">Дуб-шоколад. 85р.</p>
                </div>
              </Link>
              <Link to="/carta-ebenovoe-derevo">
                <div className="item item-4">
                  <Img fluid={img4} />
                  <p className="info">Эбеновое дерево. 85р.</p>
                </div>
              </Link>
              <Link to="/carta-krasnoe-derevo">
                <div className="item item-5">
                  <Img fluid={img5} />
                  <p className="info">Красное дерево. 85р.</p>
                </div>
              </Link>
              <Link to="/carta-oreh">
                <div className="item item-6">
                  <Img fluid={img6} />
                  <p className="info">Орех. 85р.</p>
                </div>
              </Link>
              <Link to="/carta-mokka">
                <div className="item item-3">
                  <Img fluid={img3} />
                  <p className="info">Мокка. 85р.</p>
                </div>
              </Link>
              <Link to="/carta-polysandr">
                <div className="item item-4">
                  <Img fluid={img4} />
                  <p className="info">Полисандр. 85р.</p>
                </div>
              </Link>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  a {
    color: black;
  }
  .item {
    position: relative;
    transition: all 0.3s linear;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainGold};
    padding: 0.1rem 0.3rem;
  }
  .item:hover {
    transform: scale(1.05);
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`
