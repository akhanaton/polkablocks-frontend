import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { ApiPromise, WsProvider } from '@polkadot/api';

// const WS_PROVIDER = "ws://127.0.0.1:9944";
const WS_PROVIDER = 'wss://kusama-rpc.polkadot.io/';

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [chainApi, setChainApi] = useState();
  const [apiReady, setApiReady] = useState();

  const provider = new WsProvider(WS_PROVIDER);

  ApiPromise.create({
    provider,
  })
    .then(api => {
      setChainApi(api);
      api.isReady.then(() => setApiReady(true));
    })
    .catch(e => console.error(e));

  return (
    <ApiContext.Provider value={{ chainApi, apiReady }}>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node,
};
