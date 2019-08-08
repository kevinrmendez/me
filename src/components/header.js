import { Link } from "gatsby"
import PropTypes from "prop-types"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const NavLink = styled(AniLink)`
  color:white;
  font-size:27px;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height:1;
  padding: 0.25rem;
  margin: 0 0.5rem 0 0;
  text-decoration:none;

  &.current-page{
    border-bottom:2px solid #fff;
  }
  &:last-of-type {
    margin-right:0;
  }
`;
const Header = ({ siteTitle }) => (
  <header
    css={css`
      /* background: rebeccapurple; */
      margin-bottom: 1.45rem;
      `}
  >
  <nav css={css`
      margin: 0 auto;
      max-width:960px;
      padding: 1.45rem 1.0875rem;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw-55px)/2)
    `}>
      <h1 style={{ margin: 0 }}>
        <NavLink paintDrip hex="#EEC643"  fontWeight="bold"
          to="/"
          activeClassName="current-page"
        >
          {siteTitle}
        </NavLink>
        <NavLink  cover  bg="#EEC643" duration={1} to="/about-me" activeClassName="current-page">about me </NavLink>
      </h1>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
