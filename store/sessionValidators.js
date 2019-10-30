import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const SessionValidatorsContext = createContext();

export function SessionValidatorsProvider({ children }) {
  const [validators, setValidators] = useState([]);
  const [validatorsReady, setValidatorsReady] = useState(false);

  return (
    <SessionValidatorsContext.Provider
      value={{ validators, setValidators, validatorsReady, setValidatorsReady }}
    >
      {children}
    </SessionValidatorsContext.Provider>
  );
}

SessionValidatorsProvider.propTypes = {
  children: PropTypes.node,
};
