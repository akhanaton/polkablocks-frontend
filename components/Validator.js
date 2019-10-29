/* eslint-disable react/prop-types */
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Identicon from '@polkadot/react-identicon';
import useClipboard from 'react-use-clipboard';
import Clipboard from 'simple-react-clipboard';
import ReactTooltip from 'react-tooltip';

import Icon from '../utils/Icon';
import { humanize, formatAddress, currencyFormat } from '../lib/validators';
import { NICK_QUERY } from '../graphql/queries';

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

const Validator = ({ validator, position, elected }) => {
  const [isCopied, setCopied] = useClipboard('', {
    successDuration: 1000,
  });
  const { loading, error, data } = useQuery(NICK_QUERY, {
    variables: { accountId: validator.accountId },
  });
  if (loading) return <p />;
  if (error) return `Error! ${error.message}`;
  return (
    <StyledValidator>
      <div>
        <Identicon value={validator.accountId} size={size} theme={theme} />
      </div>
      <div>
        {data.nick ? (
          <p>{data.nick}</p>
        ) : (
          <p>{formatAddress(validator.accountId)}</p>
        )}

        <Clipboard
          text={validator.accountId}
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

      {!elected && (
        <div>
          <p>{humanize(position.toString())}</p>
        </div>
      )}

      {validator.totalStake && (
        <div>
          <p className="account">total stake:</p>&nbsp;
          <span className="amount">
            {currencyFormat(parseFloat(validator.totalStake) / 1000000000000)}
          </span>
          &nbsp;
          <span className="asset">ksm</span>
        </div>
      )}

      {validator.validatorStake && (
        <div>
          <p className="account">validator stake:</p>&nbsp;
          <span className="amount">
            {currencyFormat(
              parseFloat(validator.validatorStake) / 1000000000000
            )}
          </span>
          &nbsp;
          <span className="asset">ksm</span>
        </div>
      )}
      {validator.nominatorCount > 0 && (
        <div>
          <p className="account">nominators:</p>&nbsp;
          <span className="amount">{validator.nominatorCount}</span>
        </div>
      )}
    </StyledValidator>
  );
};

export default Validator;
