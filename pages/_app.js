import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ContextProvider } from '../store/state';

import theme from '../static/styles/Theme';

export default class MyApp extends App {
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
