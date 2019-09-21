/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Identicon from '@polkadot/react-identicon';

import { humanize, formatAddress } from '../lib/validators';

const StyledValidator = styled.div`
  display: grid;
  grid: 40px / 80px auto 80px;
  border-radius: 0.35rem;
  margin-bottom: 1rem;

  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  padding: 0.5rem;
  > div {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.neutralBase};
    margin-right: 1rem;
    &:nth-child(1) {
      grid-row: 1/3;
      text-align: center;
    }
    &:nth-child(2) {
      align-self: center;

      color: ${props => props.theme.colors.neutralBaseDownOne};
    }
    &:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 1.2rem;
      color: ${props => props.theme.colors.neutralBaseDownTwo};
    }
    &:nth-child(4) {
      min-height: 1.75rem;
    }
    &:nth-child(5) {
      grid-column: 2/3;
      min-height: 1.75rem;
    }
  }
  .asset {
    font-size: 0.6rem;
  }
  .amount {
    font-weight: 600;
  }
  .account {
    font-size: 0.8rem;
    display: inline;
  }
`;
const size = 36;
const theme = 'polkadot';

const Validator = ({ validator, position }) => (
  <StyledValidator>
    <div>
      <Identicon value={validator.controllerId} size={size} theme={theme} />
    </div>
    <div>
      <p>{formatAddress(validator.controllerId)}</p>
    </div>
    <div>
      <p>{humanize(position.toString())}</p>
    </div>

    {validator.freeBalance && (
      <div>
        <p className="account">Stash:</p>&nbsp;
        <span className="amount">
          {(parseFloat(validator.freeBalance) / 1000000000000).toFixed(3)}
        </span>
        &nbsp;
        <span className="asset">KSM</span>
      </div>
    )}

    {validator.activeBonded && (
      <div>
        <p className="account">Bond:</p>&nbsp;
        <span className="amount">
          {(parseFloat(validator.activeBonded) / 1000000000000).toFixed(3)}
        </span>
        &nbsp;
        <span className="asset">KSM</span>
      </div>
    )}
  </StyledValidator>
);

export default Validator;
