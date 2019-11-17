import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <h1>About me</h1>
      <h2>Hint, I'm awesome!</h2>
      <Link to="/">back</Link>
    </Layout>
  )
}

export default AboutPage;