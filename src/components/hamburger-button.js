import React from "react"
import {css} from "@emotion/core"

export default ()=> (
  <div  css={css`
      &{
        display: inline-block;
        cursor: pointer;
      }
      & div {
        width: 35px;
        height: 5px;
        background-color: #fff;
        margin: 6px 0;
      }
    `}>
  <div></div>
  <div></div>
  <div></div>
</div>
)
