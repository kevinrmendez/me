import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Icon from "../assets/git.svg"
import { Container, Row, Col } from 'react-grid-system';


export const data = graphql`
query {
   file(relativePath: { eq:"in2.png" }) {
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

    <Container>
    <Row justify="center">
    <Col>
    <p> Here you can check my github</p>
    <a href={"https://github.com/kevinrmendez"}>
      <Icon css={css`
            max-width:170px;
            background: #fff;
            height:auto;
            border-radius: 50%;
            padding: 9px;
        `} />
    </a>
    </Col>
    <Col>
    <p> Here you can check my linkedin</p>
    <a href={"https://www.linkedin.com/in/kevin-mendez-45723692/"}>
      <Img fixed={data.file.childImageSharp.fixed} />
    </a>
    </Col>

    </Row>
    </Container>
  </Layout>
)

const Logo = ()=> {

}

export default AboutMe
