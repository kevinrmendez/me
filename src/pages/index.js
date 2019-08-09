import React from "react"
import { Link } from "gatsby"
import {css} from "@emotion/core"
import Layout from "../components/layout"
import Image from "../components/image"
import Dialog from "../components/dialog"
import SEO from "../components/seo"
import TypeWriter from "../components/typewriter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <TypeWriter className="front-page" title="Kevin Mendez Front End Developer!" speed={110}/>

    <Dialog text="I am a front end developer living in Finland" />


    <div css={css`
              max-width: 700px;
              margin-bottom:1.45rem;
              margin:0 auto;
              margin-top: 200px;

      `}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
