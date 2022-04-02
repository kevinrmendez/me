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
import pubIcon from "../images/pub-icon.png"
import myContacts from "../images/myContacts.png"
import goodBadJokes from "../images/smile-yellow.png"
import myCocktailRecipes from "../images/myCocktailRecipes.png"
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
const ImgIcon = props => (
  <Box className={props.class}>
    <img src={props.src} />
  </Box>
)

const Apps = ({ data }) => (
  <Layout>
    <SEO title="About me" />
    <h1>Apps</h1>
    <p class="text-big text-center">
      Currently I am using flutter for developing my published apps, but I also have built a couple of apps
      mobile apps using android/kotlin and react native
    </p>
    <AnnoyingButton href={"/"} value={"try to press me"} />
    <p class="text-big text-center">
      Check my apps I have built so far!
    </p>
    <ImgIcon class="img-250" href="" src={googlePlay} />
    <Button
      href="https://play.google.com/store/apps/dev?id=6998861417324808293"
      value="check apps"
    />

    {/* <Button
      href="https://play.google.com/store/apps/details?id=com.kevinrmendez.contact_app"
      value="download app"
    /> */}
    <Container>
      <Row justify="center" className="section">
        <h3
          css={css`
            text-align: center;
            font-size: 52px;
            font-weight: 400;
            color: white;
          `}
        >
          Plugins
        </h3>
        <p
          css={css`
            text-align: center;
            font-size: 32px;
            font-weight: 400;
            color: white;
          `}
        >
          As part of my flutter learning experience I have built a couple of
          plugins for flutter
        </p>
        <div>
          <div>
            <ImgIcon class="img-250" src={pubIcon} />
          </div>
          <div>
            <h4>Bluetooth adapter</h4>
          </div>
        </div>

        <p
          css={css`
            text-align: center;
            font-size: 32px;
            font-weight: 400;
            color: white;
          `}
        >
          Checkout this flutter plugin I made for using bluetooth adapter on
          flutter (Android only)
        </p>
        <Button
          href="https://pub.dev/packages/flutter_bluetooth_adapter"
          value="check plugin"
        />
      </Row>
      <Row justify="center" className="section">
        <h4>Flutter vibration</h4>

        <p
          css={css`
            text-align: center;
            font-size: 32px;
            font-weight: 400;
            color: white;
          `}
        >
          Checkout this flutter plugin I made for using native vibration API in
          flutter
        </p>
        <Button
          href="https://pub.dev/packages/flutter_vibrator"
          value="check plugin"
        />
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
