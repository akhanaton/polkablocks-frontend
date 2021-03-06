import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '../shared/Header';
import Meta from '../shared/Meta';
import Footer from '../shared/Footer';

const Layout = styled.div`
  height: calc(100vh - 8rem);
`;

const Main = styled.main`
  margin: 8rem auto 2rem;
  max-width: ${props => props.theme.maxWidth};
  min-height: 90%;
  > h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    font-weight: 400;
  }
`;

const BaseLayout = ({ children, title = '' }) => (
  <Layout>
    <Head>
      <title>{title} | Polkadot and Kusama Staking Dashboard</title>
    </Head>
    <Meta />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Layout>
);

BaseLayout.propTypes = {};

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default BaseLayout;
