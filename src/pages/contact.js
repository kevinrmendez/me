import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"
import Form from "../components/form"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Icon from "../assets/git.svg"
import { Container, Row, Col } from 'react-grid-system'




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
    <SEO title="Contact" />

    <h1>Are you looking for a front end/web developer?</h1>



    <Container>
    <Row className=" text-center">
      <Col justify="center" >
      <p css={css`font-size:50px;`}>Contact me</p>
      <p css={css`font-size:25px;`}>Send me a message and let's talk more about your project</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form />
      </Col>
    </Row>
    </Container>
  </Layout>
)

const Logo = ()=> {

}

export default AboutMe
