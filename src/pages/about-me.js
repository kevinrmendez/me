import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export const data = graphql`
query {
  placeholderImage: file(relativePath: { eq: "git.png" }) {
    childImageSharp {
      fixed(width: 170, height: 170) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

const AboutMe = ({data}) => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <p class="text-big">I like to learn about new technologies </p>
    <p> Here you can check my github</p>
    <a href="https://github.com/kevinrmendez">
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed} />
    </a>

  </Layout>
)

export default AboutMe
