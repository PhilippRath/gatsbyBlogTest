import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { element } from 'prop-types'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ){
        edges {
          node {
            title,
            slug,
            publishedDate(formatString:"YYYY-MM-DD")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog"></Head>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        { blogPosts.allContentfulBlogPost.edges.map( edge => (
          <li key={edge.node.title} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`} >
              <h2>
                  {edge.node.title}
              </h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage;

