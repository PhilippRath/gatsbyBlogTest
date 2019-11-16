import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>hello Server!</h1>
      <h2>I'm Philipp, a full-stack developer from the beautiful Chemnitz.</h2>
      <p>Need a developer? <Link to="contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage;