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
import junction2016 from "../images/junction_2016.jpg"
import uni from "../images/oulu_uni.png"
import meSnow from "../images/meSnow.jpg"

import { Container, Row, Col } from 'react-grid-system'
import posed from 'react-pose';



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

const ImgLink = (props) => (
  <a href={props.href}>
    <img src={props.src} />
  </a>
)

const AboutMe = ({data}) => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <p class="text-big text-center">
    I am a master degree student in Software Engineering at Oulu University in my last year of my studies
    </p>
    <ImgLink href="https://www.oulu.fi/university/masters/gs3d" src={uni} />
    <p class="text-big text-center">
    I have worked as a front end developer for 1 year at liana technologies,
    but also I have done freelance projects for small companies in Finland
    </p>
    <div className="finnish-flag">
    <div />
    <div />
    <div />
    <div />
    </div>
    <p class="text-big text-center">I enjoy to participate in Hackathons, so far I have won 2 times in a row at Junction</p>

    <img css={css`max-width:300px;`} src={junction2016} />

    <p class="text-big text-center"> I have also built a react native app of my girlfriends's cat Kuismelo</p>
    <Button href="https://github.com/kevinrmendez/cat-caller" value="Download from Git" />

    <p class="text-big text-center">When I am not coding, I like to travel,
    play with  my girlfriend's cats and and learn new web technologies</p>
        <img css={css`max-width:600px;`} src={meSnow} />

    <Container>

    <Row justify="center" className="section" >
    <Col sm={12}>
    <h3 css={css`text-align:center;font-size:52px;font-weight:400;`} >Stack</h3>
    </Col>
    <Col    className="text-center">
        <h3 className="white">Javascript</h3>
    <IconWeb src={jsLogo} />
    </Col>
    <Col   className="text-center">
        <h3 className="white">Dart</h3>
    <IconWeb src={dartLogo} />
    </Col>
    <Col    className="text-center">
        <h3 className="white">Nodejs</h3>
    <IconWeb src={nodeLogo} />
    </Col>
    </Row>
    <Row justify="center" className="section">
      <Col sm={12}>
        <h3 css={css`text-align:center;font-size:52px;font-weight:400;`} >Check also</h3>
      </Col>
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
