import App from 'next/app';
import React from 'react';
import TagManager from 'react-gtm-module';

import { ThemeProvider } from 'styled-components';
import { ContextProvider } from '../store/state';
import { withApollo } from '../lib/apollo';

import theme from '../static/styles/Theme';

const id = process.env.NODE_ENV === 'development' ? '' : process.env.GTM_ID;
const tagManagerArgs = {
  id,
};

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }

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
