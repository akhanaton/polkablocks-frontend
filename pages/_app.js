import App from 'next/app';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import { withApollo } from '../lib/apollo';

import theme from '../static/styles/Theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default withApollo(MyApp);
