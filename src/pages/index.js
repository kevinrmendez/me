import React from "react"
import { Link } from "gatsby"
import {css} from "@emotion/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TypeWriter from "../components/typewriter"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <TypeWriter className="front-page" title="Kevin Mendez Front End Developer!" speed={110}/>



    <p css={
      css`
      font-size: 40px;
      text-align: center;
      background: white;
      color: black;
      border-radius: 74px;
      position: absolute;
      left: 48%;
      top: 500px;
      z-index: 1;
      max-width: 400px;
      font-size: 30px;
      padding: 23px;

}
      `
    }>
    <span css={
      css`
      height: 60px;
  width: 60px;
  display: block;
  background: #fff;
  position: absolute;
  bottom: -36px;
left: 0;
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
transform: rotate(210deg);





      `
    } />
    I am a front end developer living in Finland</p>


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
