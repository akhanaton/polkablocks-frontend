import App from 'next/app';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import { withApollo } from '../lib/apollo';

import BaseLayout from '../components/layouts/BaseLayout';

import theme from '../static/styles/Theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    );
  }
}

export default withApollo(MyApp);
