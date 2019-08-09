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
          font-family:'Open Sans'

        }
        /* * + * {
          margin-top:1rem;
        } */

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
          color: var(--yellow);
          + * {
            margin-top: 0.5rem;
          }
        }
        .white {
          color:var(--white) !important;
        }
        p {
          color: var(--white);
        }
        a{
          &:not(.site-title){
            line-height: 40px;
          }
        }
        .text-big {
          font-size:40px;
          line-height: 1.5;
        }

        h1 {
          /* color: rebeccapurple; */
          color: var(--yellow);
          font-size: 50px;
          text-align: center;
          margin-top: 5%;
          margin-bottom:10%;
          font-family: 'Roboto Condensed', sans-serif;
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
        main .front-page  h1{
            min-height: 205px;
        }
        footer a,
        footer p {
          color: var(--white);
          font-size:16px;
        }
        .section {
          margin:100px 0;
        }
        .text-center {
          text-align: center;
        }
        .button:hover {
          background: var(--yellow);
          box-shadow: 0 10px 8px 0 rgba(0,0,0,1);

          transition: .4s;
          color: #fff;
        }
        a.site-title {
          text-transform: uppercase;
          font-size: 40px;
        }
        form input[type="text"],
        form input[type="email"],
        textarea{
          max-width:500px;
          margin:0 auto;
          display: block;
          width:100%;
          margin-bottom: 1.5em;
          color: var(--bg-blue);
          font-size: 20px;
          padding: 8px 17px;
        }
        ::placeholder {
          color:#000;
          font-weight:bold;
        }


        @media only screen and (max-width: 768px) {
          main h1 {
            font-size:40px;
          }
          .text-big {
            font-size:27px;
          }
        }
          @media only screen and (max-width: 600px) {
          nav {
            a {
              font-size:22px !important;
            }
          }
            a{
              &.site-title {
                font-size:27px;
                text-transform:lowercase;
              }
              &.current-page{
                border-bottom:none !important;
              }
            }
        }
      `}
      />
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
            margin: 150px auto 4rem;
          `}>{children}</main>
        <footer css={css`
            text-align:center;
          `}>
          <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
          <p>kevinrmendez</p>
        </footer>
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
