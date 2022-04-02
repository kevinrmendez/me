import React, { useState } from "react"
import { css } from "@emotion/core"
function AnnoyingButton({ href, value }) {
  const [positionX, setPositionX] = useState("30px")
  const [positionY, setPositionY] = useState("100px")

  function randomPosition() {
    var elementWidth = document.getElementById("annoying-button").offsetWidth
    var elementHeight = document.getElementById("annoying-button").offsetHeight
    // console.log(elementWidth)
    // console.log(elementHeight)
    let x = (Math.random() * (window.innerWidth - elementWidth)).toFixed()
    let y = (Math.random() * (window.innerHeight - elementHeight)).toFixed()

    return {
      x: x + "px",
      y: y + "px",
    }
  }
  function jump() {
    console.log("jump")
    var pos = randomPosition()
    setPositionX(pos.x)
    setPositionY(pos.y)
  }
  return (
    <a
      onMouseEnter={jump}
      onTouchStart={jump}
      css={css`
        & {
          padding: 5px 35px;
          background: var(--yellow);
          text-transform: uppercase;
          color: #fff;
          position: absolute;
          top: ${positionY};
          right: ${positionX};
          transition: 0.25s ease-out all;
          font-size: 20px;
          text-align: center;
          text-decoration: none;
          border-radius: 30px;
        }

        @media (max-width: 768px) {
          & {
            display: none;
          }
        }
      `}
      id="annoying-button"
      href={href}
    >
      {value}
    </a>
  )
}

export default AnnoyingButton
