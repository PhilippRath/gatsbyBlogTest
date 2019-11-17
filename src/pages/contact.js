import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';


const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Thats the Contact Page</h1>
      <p>all Your Contact goes here.</p>
      <p>
        <a href="https://twitter.com/PhilippRath" target="blank">Me on Twitter @PhilippRath</a>
      </p>
    </Layout>
  )
}

export default ContactPage;