import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Button from "../components/button"
import SEO from "../components/seo"
export const data = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "smile.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const CutestCats = ({ data }) => (
  <Layout>
    <SEO title="Cutest Cats/ Cutest Cats Pictures Premium" />
    <div class="text-center">
      <h2
        css={css`
          font-size: 45px;
        `}
      >
        Privacy policy Cutest Cats/ Cutest Cats Pictures Premium
      </h2>
      <div
        css={css`
          margin: 60px 0;
          & * {
            color: #fff;
          }
        `}
      >
        <h2>Privacy Policy</h2>{" "}
        <p>
          Kevin Mendez built the Cutest Cats Pictures app as a Free
          app/Commercial app. This SERVICE is provided by Kevin Mendez and is
          intended for use as is.
        </p>{" "}
        <p>
          This page is used to inform visitors regarding my policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use my Service.
        </p>{" "}
        <p>
          If you choose to use my Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that I collect is used for providing and improving the
          Service. I will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>{" "}
        <p>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at Cutest Cats Pictures
          unless otherwise defined in this Privacy Policy.
        </p>{" "}
        <p>
          <strong>Information Collection and Use</strong>
        </p>{" "}
        <p>
          For a better experience, while using our Service, Cute Cats Pictures
          Premium may require you to provide us with certain personally
          identifiable information. The information that Cute Cats Pictures
          Premium request will be [retained on your device and is not collected
          by Cute Cats Pictures Premium in any way]/[retained by us and used as
          described in this privacy policy].
        </p>{" "}
        <p>
          The app does use third party services that may collect information
          used to identify you.
        </p>{" "}
        <div>
          <p>
            Link to privacy policy of third party service providers used by the
            app
          </p>{" "}
          <ul>
            <li>
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
              >
                Google Play Services
              </a>
            </li>
          </ul>
        </div>{" "}
        <p>
          <strong>Links to Other Sites</strong>
        </p>{" "}
        <p>
          This Service may contain links to other sites when sharing the cat
          pictures. If you click on a third-party link, you will be directed to
          that site. Note that these external sites are not operated by me.
          Therefore, I strongly advise you to review the Privacy Policy of these
          websites. I have no control over and assume no responsibility for the
          content, privacy policies, or practices of any third-party sites or
          services.
        </p>{" "}
        <p>
          <strong>Children’s Privacy</strong>
        </p>{" "}
        <p>
          In this app I do not collect personally identifiable information from
          children under 13. If you are a parent or guardian, you should not
          worry that any personally identifiable information from your children
          will be collected.
        </p>{" "}
        <p>
          <strong>Changes to This Privacy Policy</strong>
        </p>{" "}
        <p>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </p>{" "}
        <p>
          <strong>Contact Us</strong>
        </p>{" "}
        <p>
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me at kevinmendezdev@gmail.com.
        </p>{" "}
        <p>
          This privacy policy page was created at
          <a href="https://privacypolicytemplate.net" target="_blank">
            privacypolicytemplate.net
          </a>
          and modified/generated by
          <a
            href="https://app-privacy-policy-generator.firebaseapp.com/"
            target="_blank"
          >
            App Privacy Policy Generator
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default CutestCats
