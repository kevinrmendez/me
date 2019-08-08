import React from "react"
import {css} from "@emotion/core"
import styled from "@emotion/styled"

const inputStyle = {
  border: 'white',
  padding: '6px 24px',
  fontSize: '23px',
  borderRadius: '40px',
  background: 'var(--yellow)',
  color: '#fff',
  cursor:"pointer",
}


export default () => (
  <form
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
  <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />
    <div>
      <input type="text" name="name" id="name" placeholder="name" />
    </div>
    <div>
      <input type="email" name="email" id="email" placeholder="email" required  />
    </div>
    <div>
      <textarea name="message" id="message" rows="6" placeholder="Your message"  required />
    </div>
    <div css={css`
      display: flex;
      justify-content: space-between;
      max-width: 300px;
      margin: 0 auto;
      `}>
      <input style={inputStyle} type="submit" value="Send" />
      <input style={inputStyle} type="reset" value="Clear" />
    </div>
  </form>
)
