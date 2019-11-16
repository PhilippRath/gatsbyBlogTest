import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { element } from 'prop-types';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
         nodes {
          frontmatter {
            title
            date
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        { blogPosts.allMarkdownRemark.nodes.map( node => (
          <li key={node.frontmatter.title} className={blogStyles.post}>
            <Link to={`/blog/${node.fields.slug}`} >
              <h2>
                  {node.frontmatter.title}
              </h2>
              <p>{node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage;

