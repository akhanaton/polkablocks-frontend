// This component will simply add utility functions to your developer console.
import { useContext } from 'react';
import * as utilCrypto from '@polkadot/util-crypto';
import * as util from '@polkadot/util';
import * as keyring from '@polkadot/keyring';

export default function Metadata(props) {
  const { api } = props;
  if (process.browser) {
    window.api = api;
    window.util = util;
    window.util_crypto = utilCrypto;
    window.keyring = keyring;
  }

  return null;
}
