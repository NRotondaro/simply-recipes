import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';

const Error = () => {
  return (
    <Layout>
      <Seo title='Error' />
      <main className='error-page'>
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  );
};

export default Error;
