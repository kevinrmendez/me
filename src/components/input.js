import React from "react"
import { css } from "@emotion/core"

function Input({ type, name, id, placeholder, required }) {
  return (
    <div
      css={css`
        max-width: 500px;
        position: relative;
        margin: 0 auto;
      `}
    >
      <input
        css={css`
          & {
            background: transparent;
            border: none;
            color: #fff;
            border-bottom: 2px solid #fff;
          }
          &:focus {
            color: #000;
          }
          &:focus ~ span {
            transition: 0.5s;
            width: 100%;
          }
          &:focus ::placeholder {
            color: #000;
          }
          ::placeholder {
            color: white;
          }
        `}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />
      <span
        css={css`
          & {
            position: absolute;
            left: 0;
            top: 0;
            width: 0%;
            height: 100%;
            background-color: #fff;
            transition: 0.3s;
            z-index: -1;
          }
        `}
      ></span>
    </div>
  )
}

export default Input
