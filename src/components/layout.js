/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {Global, css} from '@emotion/core'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Global styles={css`
        *{
          box-sizing:border-box;
          margin:0;

        }
        /* * + * {
          margin-top:1rem;
        } */
        :root {
          --blue: #2301AD;
          --yellow: #EEC643;
          --bg-blue: #1600C1;
          --white: #FFF;
        }
        html,
        body{
          color: #555;
          font-size:18px;
          line-height: 1.4;
          background-color: var(--bg-blue);

        }
        > div{
          margin-top:0;
        }
        h1,
        h2,
        h3 {
          line-height: 1.1;
          color: #222;
          + * {
            margin-top: 0.5rem;
          }
        }
        p {
          color: var(--white);
        }
        .text-big {
          font-size:40px;
        }

        h1 {
          /* color: rebeccapurple; */
          color: var(--yellow);
          font-size: 50px;
          text-align: center;
          margin-top: 10%;

        }
        header {
          background-color: var(--bg-blue);
        }
        main h1{
          font-size: 60px;
          line-height: 1.5;
          padding-bottom: 20px;
          border-bottom: 5px solid var(--yellow);
        }
      `} />
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main css={css`
            margin: 2rem auto 4rem;
            // maxWidth: 90vw;
            // width:550px;
          `}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
