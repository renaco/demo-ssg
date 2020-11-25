import React from "react"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
