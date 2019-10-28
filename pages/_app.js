import App from 'next/app';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import { ContextProvider } from '../store/state';
import { withApollo } from '../lib/apollo';

import theme from '../static/styles/Theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ContextProvider>
    );
  }
}

export default withApollo(MyApp);
