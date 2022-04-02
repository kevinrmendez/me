import React from "react"
import { css } from "@emotion/core"

const Flag = () => (
  <div
    css={css`
      & {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-row-gap: 30px;
        grid-column-gap: 30px;
        height: 150px;
        max-width: 300px;
        margin: 0 auto;
        margin-bottom: 25px;
      }
      & div {
        background: #fff;
      }
    `}
  >
    <div />
    <div />
    <div />
    <div />
  </div>
)

export default Flag
