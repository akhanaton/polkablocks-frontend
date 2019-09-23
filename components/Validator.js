/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Identicon from '@polkadot/react-identicon';
import useClipboard from 'react-use-clipboard';
import Clipboard from 'simple-react-clipboard';
import ReactTooltip from 'react-tooltip';

import Icon from '../utils/Icon';
import { humanize, formatAddress, currencyFormat } from '../lib/validators';

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
      display: flex;
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
    &:nth-child(6) {
      grid-column: 2/3;
      min-height: 1.75rem;
    }
  }
  button:focus {
    outline: 0 !important;
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
  .icon {
    margin-left: 0.5rem;
    background: transparent;
    border: none;
  }
  .copied {
    margin-left: 1rem;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.neutralBaseDownOne};
  }
`;
const size = 36;
const theme = 'polkadot';

const Validator = ({ validator, position }) => {
  const [isCopied, setCopied] = useClipboard('', {
    successDuration: 1000,
  });

  return (
    <StyledValidator>
      <div>
        <Identicon value={validator.controllerId} size={size} theme={theme} />
      </div>
      <div>
        <p>{formatAddress(validator.controllerId)}</p>
        <Clipboard
          text={validator.controllerId}
          render={({ copy }) => (
            <button
              type="button"
              className="icon"
              onClick={() => {
                setCopied();
                copy();
              }}
            >
              <span className="noSelect">
                <Icon name="copy-light" width="18" color="#8996a8" />
                <span className="copied">{isCopied ? 'copied' : ''}</span>
              </span>
            </button>
          )}
        />
      </div>
      <div>
        <p>{humanize(position.toString())}</p>
      </div>

      {validator.freeBalance && (
        <div>
          <p className="account">total:</p>&nbsp;
          <span className="amount">
            {currencyFormat(parseFloat(validator.freeBalance) / 1000000000000)}
          </span>
          &nbsp;
          <span className="asset">ksm</span>
        </div>
      )}

      {validator.activeBonded && (
        <div>
          <p className="account">bonded:</p>&nbsp;
          <span className="amount">
            {currencyFormat(parseFloat(validator.activeBonded) / 1000000000000)}
          </span>
          &nbsp;
          <span className="asset">ksm</span>
        </div>
      )}
      {validator.validatorPayment && (
        <div>
          <p className="account">comm:</p>&nbsp;
          <span className="amount">
            {currencyFormat(
              parseFloat(validator.validatorPayment) / 1000000000000
            )}
          </span>
          <span className="asset">&nbsp;ksm/day</span>
        </div>
      )}
    </StyledValidator>
  );
};

export default Validator;
