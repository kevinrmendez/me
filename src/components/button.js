import React from "react"
import {css} from '@emotion/core'


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Button = (props) => {


  return <a className="button" css={css`
    background: #fff;
    max-width: 200px;
    color: var(--bg-blue);
    font-size: 23px;
    padding: 10px 45px;
    border-radius: 24px;
    text-decoration: none;
    `}  href={props.href}  >
        {props.value}
    </a>
}

export default Button
