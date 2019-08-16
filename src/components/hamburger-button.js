import React from "react"
import { css } from "@emotion/core"

function Menu({ active }) {
  return (
    <div
      className={active ? "active" : ""}
      css={css`
        &{
          display: inline-block;
          cursor: pointer;
        }
        &.active .bar1 {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
          transform: rotate(-45deg) translate(-9px, 6px);
        }
        &.active .bar2 {opacity: 0;}
        &.active .bar3 {
          -webkit-transform: rotate(45deg) translate(-8px, -8px);
          transform: rotate(45deg) translate(-8px, -8px);
}
        & div {
          width: 35px;
          height: 5px;
          background-color: #fff;
          margin: 6px 0;
          transition: 0.4s;s
        }

      `}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}
// export default ()=> (
//   <div  css={css`
//       &{
//         display: inline-block;
//         cursor: pointer;
//       }
//       & div {
//         width: 35px;
//         height: 5px;
//         background-color: #fff;
//         margin: 6px 0;
//       }
//     `}>
//   <div className="bar1"></div>
//   <div className="bar2"></div>
//   <div className="bar3"></div>
// </div>
// )

export default Menu
