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
        html,
        body{
          color: #555;
          font-size:18px;
          line-height: 1.4;
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
        .text-big {
          font-size:40px;
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
