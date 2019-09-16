import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"

import SEO from "../components/seo"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Icon from "../assets/git.svg"
import googlePlay from "../images/google_play.png"
import myContacts from "../images/myContacts.png"
import goodBadJokes from "../images/smile-yellow.png"
import { Container, Row, Col } from "react-grid-system"
import posed from "react-pose"
import AnnoyingButton from "../components/annoyingButton"

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

const Apps = ({ data }) => (
  <Layout>
    <SEO title="About me" />
    <h1>Apps</h1>
    <AnnoyingButton href={"/"} value={"try to press me"} />
    <p class="text-big text-center">
      Here are some apps that I have publish in google play.
    </p>
    <ImgLink
      class="img-250"
      href="https://play.google.com/store/apps/developer?id=kevinrmendez&hl=en_US"
      src={googlePlay}
    />
    <p class="text-big text-center">
      I have use flutter while developing my latest app, but I also have
      experience developing android apps using java
    </p>
    {/* <Button
      href="https://play.google.com/store/apps/details?id=com.kevinrmendez.contact_app"
      value="download app"
    /> */}
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
            Apps
          </h3>
        </Col>
        <Col className="text-center">
          <h3 className="white">MyContact</h3>
          <ImgLink
            class="img-250"
            href="https://play.google.com/store/apps/details?id=com.kevinrmendez.contact_app&hl=en_US"
            src={myContacts}
          />
          <p
            css={css`
              font-size: 25px;
            `}
          >
            MyContacts is an app that will help you manage easily your family
            and friends contacts in one place. All data is stored in your mobile
            device
          </p>
        </Col>
        <Col className="text-center">
          <h3 className="white">Good Bad Jokes</h3>
          <ImgLink
            class="img-250"
            href="https://play.google.com/store/apps/details?id=com.kevinrmendez.bad_jokes&hl=en_US"
            src={goodBadJokes}
          />
          <p
            css={css`
              font-size: 25px;
            `}
          >
            Good Bad Jokes is an app that will make you laugh! It contains a
            list of jokes that are so bad, that they will really make you laugh.
            It is perfect for any kind of person who wants to have a good time.
          </p>
        </Col>
      </Row>
      <Row justify="center" className="section">
        <h3
          css={css`
            text-align: center;
            font-size: 52px;
            font-weight: 400;
          `}
        >
          More apps coming soon!
        </h3>
      </Row>
      <Row justify="center" className="section">
        <p class="text-big text-center">
          If you have any interesting app idea you would like to develop, let's
          keep in touch!
        </p>
        <Button href="/contact" value="get in touch" />
      </Row>
    </Container>
  </Layout>
)

export default Apps
