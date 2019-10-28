import React from 'react';
import PropTypes from 'prop-types';

import { ApiProvider } from './api';
import { CurrentElectedProvider } from './currentElected';

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<ApiProvider />, <CurrentElectedProvider />]}>
      {children}
    </ProviderComposer>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ContextProvider };
