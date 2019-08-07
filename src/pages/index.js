import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Front end Developer</h1>

    <p style={{fontSize:40, textAlign:`center`}}>I am Kevin and I am a front end developer</p>
    <div style={{ maxWidth: `700px`, marginBottom: `1.45rem`, margin:`0 auto` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
