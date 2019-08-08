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
    <SEO title="About me" />
    <h1>About me</h1>
    <p class="text-big text-center">When I am not developing websites, I like to go for a walk,
    play with the cats of my girlfriend and learn about new web technologies</p>


    <Container>
    <Row justify="center" className="section ">
    <Col className="text-center">
    <h3 className="white">Github</h3>
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
    <Col  className="text-center">
    <h3 className="white">Linkedin</h3>
    <a href={"https://www.linkedin.com/in/kevin-mendez-45723692/"}>
      <Img fixed={data.file.childImageSharp.fixed} />
    </a>
    </Col>

    </Row>
    <Row className=" text-center">
      <Col justify="center" >
          <h2 css={css`font-size:60px; line-height:1.5`}>Are you looking for a front end/web developer?</h2>
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
