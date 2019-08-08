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
import jsLogo from "../images/js.png"
import dartLogo from "../images/dart.png"
import nodeLogo from "../images/node.png"
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
const IconWeb =styled.img`
    max-width:100px;
`;
const AboutMe = ({data}) => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <p class="text-big text-center">When I am not developing websites, I like to go for a walk,
    play with the cats of my girlfriend and learn about new web technologies</p>


    <Container>
    <h3 css={css`text-align:center;font-size:52px;font-weight:400;`} >Stack</h3>
    <Row justify="center" >
    <Col className="text-center">
    <IconWeb src={jsLogo} />
    </Col>
    <Col className="text-center">
    <IconWeb src={dartLogo} />
    </Col>
    <Col className="text-center">
    <IconWeb src={nodeLogo} />
    </Col>
    </Row>
      <h3 css={css`text-align:center;font-size:52px;font-weight:400;`} >Check also</h3>
    <Row justify="center" className="section ">
    <Col className="text-center">
    <h3 className="white">Github</h3>
    <a href={"https://github.com/kevinrmendez"}>
      <Icon css={css`
            max-width:180px;
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
    <Row>
    <Col>
    <Button href="/contact" value="get in touch"/>

    </Col>
    </Row>
    </Container>
  </Layout>
)



export default AboutMe
