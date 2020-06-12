import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Menu from "../components/hamburger-button"
import styled from "@emotion/styled"
import React, { useState, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const NavLink = styled(AniLink)`
  color: white;
  font-size: 27px;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  padding: 0.25rem;
  margin: 0 0.5rem 0 0;
  text-decoration: none;

  &.current-page {
    color: var(--yellow);
    border-bottom: 2px solid var(--yellow);
  }
  &:last-of-type {
    margin-right: 0;
  }
`

function Header({ siteTitle }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log(`Show state is ${show}`)
  }, [])

  return (
    <header
      css={css`
        /* background: rebeccapurple; */
        margin-bottom: 1.45rem;
      `}
    >
      <nav>
        <div class="nav-mobile">
          <NavLink
            className="site-title"
            paintDrip
            hex="#EEC643"
            fontWeight="bold"
            to="/"
            activeClassName="current-page"
          >
            {siteTitle}
          </NavLink>
          <div onClick={() => setShow(!show)}>
            <Menu active={show} />
          </div>
        </div>
        <div
          style={{ display: show ? "flex" : "flex" }}
          className={show ? "nav-links active" : "nav-links "}
        >
          <NavLink
            className="site-title"
            fontWeight="bold"
            to="/"
            activeClassName="current-page"
          >
            {siteTitle}
          </NavLink>
          <NavLink to="/about-me" activeClassName="current-page">
            about me{" "}
          </NavLink>
          <NavLink to="/contact" activeClassName="current-page">
            contact{" "}
          </NavLink>
          <NavLink to="/apps" activeClassName="current-page">
            apps{" "}
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
// const Header = ({ siteTitle }) => (
//   <header
//     css={css`
//       /* background: rebeccapurple; */
//       margin-bottom: 1.45rem;
//       `}
//   >
//   <Title />
//   <nav css={css`
//       margin: 0 auto;
//       max-width:760px;
//       padding: 1.45rem 1.0875rem;
//       display: flex;
//       justify-content: space-between;
//       padding: 0.5rem calc((100vw-55px)/2)
//     `}>
//     <div class="nav-mobile">
//     <NavLink className="site-title" paintDrip hex="#EEC643"  fontWeight="bold"
//           to="/" activeClassName="current-page">{siteTitle}
//     </NavLink>
//     <Menu />
//     </div>
//     <div className="nav-links ">
//     <NavLink  cover  bg="#EEC643" duration={1} to="/about-me" activeClassName="current-page">about me </NavLink>
//     <NavLink className="site-title" paintDrip hex="#EEC643"  fontWeight="bold"
//           to="/"
//           activeClassName="current-page"
//         >
//           {siteTitle}
//       </NavLink>
//       <NavLink paintDrip hex="#EEC643" to="/contact" activeClassName="current-page">contact </NavLink>
//       </div>
//     </nav>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
