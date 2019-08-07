import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{fontSize:50,fontWeight:`normal`, textAlign:`center`,marginBottom:`100px`}}><span style={{fontSize:70,fontWeight:`normal`, textAlign:`center`,marginBottom:`100px`}}>Hi</span> people</h1>
    <p style={{fontSize:40, textAlign:`center`}}>I am Kevin and I am a front end developer</p>
    <div style={{ maxWidth: `700px`, marginBottom: `1.45rem`, margin:`0 auto` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
