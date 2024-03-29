import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

/* export const query = graphql`
  query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ){
      frontmatter {
        title
        date
      }
      html
    }
  }
`
 */

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString: "YY-MM-DD")
      body {
        json
      }
    }
  }
`

 const Blog = (props) => {
   const options = {
     renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title } = node.data.target.fields
        const url = node.data.target.fields.file.de.url
        const alt = node.data.target.fields.title.de

        return <img alt={alt} src={url} />
      },
     }

    }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>
        {props.data.contentfulBlogPost.title}
      </h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog