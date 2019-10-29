import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const CurrentElectedContext = createContext();

export function CurrentElectedProvider({ children }) {
  const [elected, setElected] = useState([]);
  const [electedReady, setElectedReady] = useState(false);

  return (
    <CurrentElectedContext.Provider
      value={{ elected, setElected, electedReady, setElectedReady }}
    >
      {children}
    </CurrentElectedContext.Provider>
  );
}

CurrentElectedProvider.propTypes = {
  children: PropTypes.node,
};
