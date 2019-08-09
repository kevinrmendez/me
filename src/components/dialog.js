import React from "react"
import {css} from '@emotion/core'

const Dialog = (props) => {


  return <p className="dialog fade-in" css={css`
    font-size: 40px;
    text-align: center;
    background: white;
    color: black;
    border-radius: 74px;
    position: absolute;
    left: 48%;
    top: 300px;
    z-index: 1;
    max-width: 360px;
    font-size: 30px;
    padding: 40px;
    /* min-width: 215px; */
    `}  >
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
        {props.text}
    </p>

}

export default  Dialog
