/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Global, css } from "@emotion/core"

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
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            font-family: "Roboto";
          }
          /* * + * {
          margin-top:1rem;
        } */

          html,
          body {
            color: #555;
            font-size: 18px;
            line-height: 1.4;
            background-color: var(--bg-blue);
          }
          > div {
            margin-top: 0;
          }
          h1,
          h2,
          h3 {
            line-height: 1.1;
            color: var(--white);
            + * {
              margin-top: 0.5rem;
            }
          }
          .white {
            color: var(--white) !important;
          }
          p {
            color: var(--white);
          }
          a {
            &:not(.site-title) {
              line-height: 40px;
            }
          }

          h1 {
            /* color: rebeccapurple; */
            color: var(--white);
            font-size: 50px;
            text-align: center;
            margin-top: 5%;
            margin-bottom: 10%;
          }

          header {
            background-color: var(--bg-blue);
          }

          main h1 {
            font-size: 60px;
            line-height: 1.5;
            padding-bottom: 20px;
          }
          main .front-page h1 {
            min-height: 205px;
          }

          .section {
            margin: 100px 0;
          }
          .text-center {
            text-align: center;
          }
          .button:hover {
            background: var(--yellow);
            box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 1);

            transition: 0.4s;
            color: #fff;
          }
          a.site-title {
            font-size: 40px;
          }
          form input[type="text"],
          form input[type="email"],
          textarea {
            max-width: 500px;
            margin: 0 auto;
            display: block;
            width: 100%;
            margin-bottom: 1.5em;
            font-size: 20px;
            padding: 8px 17px;
          }
          ::placeholder {
            color: #000;
            font-weight: bold;
          }

          @media only screen and (max-width: 768px) {
            main h1 {
              font-size: 40px;
            }
            .text-big {
              font-size: 27px;
            }
          }
          a {
            &.site-title {
              font-size: 30px;
            }
            &.current-page {
              border-bottom: none !important;
            }
          }
          @media only screen and (max-width: 600px) {
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
        <main>{children}</main>
      </div>
      <div id="footer-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,160L24,176C48,192,96,224,144,208C192,192,240,128,288,128C336,128,384,192,432,202.7C480,213,528,171,576,165.3C624,160,672,192,720,224C768,256,816,288,864,266.7C912,245,960,171,1008,165.3C1056,160,1104,224,1152,240C1200,256,1248,224,1296,202.7C1344,181,1392,171,1416,165.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
      <footer
        css={css`
          text-align: center;
        `}
      >
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
        <p>kevinmendez</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
