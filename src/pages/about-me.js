import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"
import Form from "../components/form"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Icon from "../assets/git.svg"
import jsLogo from "../images/js.png"
import dartLogo from "../images/dart.png"
import nodeLogo from "../images/node.png"
import junction2016 from "../images/junction_2016.jpg"
import junction2017 from "../images/junction_2017.jpg"
import uni from "../images/oulu_uni.png"
import meSnow from "../images/meSnow.jpg"
import reactJS from "../images/react.png"
import reduxJS from "../images/redux.png"
import vueJS from "../images/vue.png"
import phpLogo from "../images/php.png"
import wordpressLogo from "../images/wordpressLogo.png"
import javaLogo from "../images/javaLogo.png"
import mongodbLogo from "../images/mongodb.png"
import mysqlLogo from "../images/mysql.png"
import magentoLogo from "../images/magentoLogo.png"
import gatsbyJS from "../images/gatsby-icon.png"
import gitIcon from "../assets/git.svg"
import linkedin from "../images/in.png"
import { Container, Row, Col } from "react-grid-system"
import posed from "react-pose"
import AnnoyingButton from "../components/annoyingButton"
import Flag from "../components/flag"

import Content from "../components/content"
import cv from "../assets/pdf/cv-mendez.pdf"

export const data = graphql`
  query {
    file(relativePath: { eq: "in.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: { duration: 400 },
  },
})

const IconWeb = styled.img`
  max-width: 100px;
`

const IconWebWhite = ({ src }) => (
  <div
    css={css`
      background: #fff;
      border-radius: 50%;
      max-width: 100px;
      max-height: 100px;
      margin: 0 auto;
      padding: 10px;
      & img {
        width: 90%;
        margin: 0 auto;
      }
    `}
  >
    <IconWeb src={src} />
  </div>
)
const IconLink = props => (
  <Box className={props.class}>
    <a href={props.href}>
      <Icon
        css={css`
          max-width: 100px;
          background: #fff;
          height: auto;
          border-radius: 50%;
          padding: 9px;
        `}
      />
    </a>
  </Box>
)
const ImgLink = props => (
  <Box className={props.class}>
    <a href={props.href}>
      <img src={props.src} />
    </a>
  </Box>
)

const AboutMe = ({ data }) => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <AnnoyingButton href={"/"} value={"try to press me"} />
    <p class="text-big text-center">
      I am a master degree student in Software Engineering at Oulu University in
      my last year of my studies
    </p>
    <ImgLink
      class="img-250"
      href="https://www.oulu.fi/university/masters/gs3d"
      src={uni}
    />
    <p class="text-big text-center">
      I have worked as a front end developer for 1 year at liana technologies,
      but also I have done freelance projects for small companies in Finland
    </p>
    <Flag />
    <p class="text-big text-center">
      I enjoy to participate in Hackathons, I have won 2 times at Junction
    </p>
    <Container>
      <Row>
        <Col>
          <img
            css={css`
              max-width: 300px;
            `}
            src={junction2016}
          />
        </Col>
        <Col>
          <img
            css={css`
              min-width: 300px;
            `}
            src={junction2017}
          />
        </Col>
      </Row>
    </Container>
    <p class="text-big text-center">
      Since I am also interested in mobile development, I like to build apps in
      android. At the moment I am playing around with flutter and it is so cool
    </p>
    <p class="text-big text-center"> Download my latest app from github</p>
    <Button
      href="https://github.com/kevinrmendez/myContacts"
      value="download app"
    />
    <div
      css={css`
        display: none;
      `}
    >
      <p class="text-big text-center">
        {" "}
        I have also built a react native app of my girlfriends's cat Kuismelo
      </p>
      <Button
        href="https://github.com/kevinrmendez/cat-caller"
        value="Download from Git"
      />
    </div>
    <Content>
      <p class="text-big text-center">
        When I am not coding, I like to travel, watch netflix and learn new web
        technologies
      </p>
    </Content>
    <img
      css={css`
        max-width: 600px;
        width: 100%;
      `}
      src={meSnow}
    />

    <Container>
      <Row justify="center" className="section">
        <Col sm={12}>
          <h3
            css={css`
              text-align: center;
              font-size: 52px;
              font-weight: 400;
            `}
          >
            Stack
          </h3>
        </Col>
        <Col className="text-center">
          <h3 className="white">Javascript</h3>
          <IconWeb src={jsLogo} />
        </Col>
        <Col className="text-center">
          <h3 className="white">Dart</h3>
          <IconWeb src={dartLogo} />
        </Col>
        <Col className="text-center">
          <h3 className="white">Java</h3>
          <IconWebWhite src={javaLogo} />
        </Col>
        <Col className="text-center">
          <h3 className="white">PHP</h3>
          <IconWeb src={phpLogo} />
        </Col>
        <Col className="text-center">
          <h3 className="white">Nodejs</h3>
          <IconWeb src={nodeLogo} />
        </Col>
      </Row>

      <Row justify="center" className="section">
        <Col sm={12}>
          <h3
            css={css`
              text-align: center;
              font-size: 52px;
              font-weight: 400;
            `}
          >
            JS frameworks
          </h3>
        </Col>
        <Col className="text-center">
          <h3 className="white">React</h3>
          <IconWeb src={reactJS} />
        </Col>
        <Col className="text-center">
          <h3 className="white">Redux</h3>
          <IconWeb src={reduxJS} />
        </Col>

        <Col className="text-center">
          <h3 className="white">Vue</h3>
          <IconWeb src={vueJS} />
        </Col>
        <Col className="text-center">
          <h3 className="white">Gatsby</h3>
          <IconWeb src={gatsbyJS} />
        </Col>
      </Row>
      <Row justify="center" className="section">
        <Col sm={12}>
          <h3
            css={css`
              text-align: center;
              font-size: 52px;
              font-weight: 400;
            `}
          >
            CMS
          </h3>
        </Col>
        <Col className="text-center">
          <h3 className="white">Wordpress</h3>
          <IconWeb src={wordpressLogo} />
        </Col>
        <Col className="text-center">
          <h3 className="white">Magento</h3>
          <IconWeb src={magentoLogo} />
        </Col>
      </Row>

      <Row justify="center" className="section">
        <Col sm={12}>
          <h3
            css={css`
              text-align: center;
              font-size: 52px;
              font-weight: 400;
            `}
          >
            DB
          </h3>
        </Col>
        <Col className="text-center">
          <h3 className="white">MYSQL</h3>

          <IconWebWhite src={mysqlLogo} />
        </Col>
        <Col className="text-center">
          <h3 className="white">Mongodb</h3>
          <IconWeb src={mongodbLogo} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Button href={cv} value="download cv" download="true" />
        </Col>
      </Row>

      <Row justify="center" className="section">
        <Col sm={12}>
          <h3
            css={css`
              text-align: center;
              font-size: 52px;
              font-weight: 400;
            `}
          >
            Check also
          </h3>
        </Col>
        <Col className="text-center">
          <h3 className="white">Github</h3>
          <IconLink class="img-100" href="https://github.com/kevinrmendez" />
        </Col>
        <Col className="text-center">
          <h3 className="white">Linkedin</h3>
          <ImgLink
            class="img-100"
            href="https://www.linkedin.com/in/kevin-mendez-45723692/"
            src={linkedin}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button href="/contact" value="get in touch" />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutMe
