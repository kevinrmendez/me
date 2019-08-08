import React from "react"
import { Link } from "gatsby"
import {css} from "@emotion/core"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Button from "../components/button"
import SEO from "../components/seo"
export const data = graphql`
query {
  placeholderImage: file(relativePath: { eq: "smile.png" }) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const SuccessPage = ({data}) => (
  <Layout>
    <SEO title="Thank you" />
    <div class="text-center">
    <h2 css={css`font-size:45px;`} >Thank you for your message</h2>
    <div css={css`margin:60px 0;`}>
    <Img css={css`max-width:200px; margin:0 auto;`} fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
    <p>I will contact you during the next days </p>
    </div>
    <Button href="/" value="back home" />
  </Layout>
)

export default SuccessPage
