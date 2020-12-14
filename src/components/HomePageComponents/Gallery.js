import React from "react"
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
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">Неокрашенное. 5р.</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">Дуб. 7р.</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">Дуб-шоколад. 7р.</p>
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
                <p className="info">Эбеновое дерево. 7р.</p>
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
                <p className="info">Красное дерево. 7р.</p>
              </div>
              <div className="item item-6">
                <Img fluid={img6} />
                <p className="info">Орех. 7р.</p>
              </div>
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
    transform: scale(1.03);
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
    grid-template-areas:
      "one one two two"
      "one one three three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
