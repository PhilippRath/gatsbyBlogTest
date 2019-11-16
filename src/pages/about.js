import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <h2>Hint, I'm awesome!</h2>
      <Link to="/">back</Link>
    </Layout>
  )
}

export default AboutPage;