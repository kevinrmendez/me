import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { Container, Row, Col } from "react-grid-system"
import posed from "react-pose"
import styled from "@emotion/styled"

import linkedin from "../images/in.png"

import Icon from "../assets/git.svg"

import kevinMendezPicture from "../images/kevin_mendez.jpg"

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

const ImgLink = props => (
  <Box className={props.class}>
    <a href={props.href}>
      <img src={props.src} />
    </a>
  </Box>
)
const Section = styled.div`
  margin: 100px 0;
`

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <TypeWriter
      className="front-page"
      title="Kevin Mendez Front End Software Developer!"
      speed={110}
    /> */}
    <h1 className="title-big">Kevin Mendez</h1>
    <Row>
      <Col>
        <img
          css={css`
            width: 80%;
          `}
          src={kevinMendezPicture}
        />
      </Col>
      <Col style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ fontSize: "3em", textAlign: "center" }}>
          Front End Software Developer
        </h2>
      </Col>
    </Row>
    <Section>
      <Col className="text-center">
        <h3 className="subtitle">You can find me on</h3>
      </Col>
      <Row justify="center">
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
    </Section>

    <div
      css={css`
        max-width: 700px;
        margin-bottom: 1.45rem;
        margin: 0 auto;
        margin-top: 200px;
      `}
    ></div>
  </Layout>
)

export default IndexPage
