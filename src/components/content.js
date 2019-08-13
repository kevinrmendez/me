import React from "react"
import PropTypes from "prop-types"
import styles from "./content.module.css"

const Content = ({ title, children }) => (
  <div className={styles.container}>
    <p className={styles.description}>{title}</p>
    {children}
  </div>
)

Content.propTypes = {
  title: PropTypes.string,
}
Content.defaultProps = {
  title: "",
}
export default Content
