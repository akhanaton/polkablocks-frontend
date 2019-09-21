/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Identicon from '@polkadot/react-identicon';

import { humanize } from '../lib/validators';

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
    &:nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      color: ${props => props.theme.colors.neutralBaseDownTwo};
    }
    &:nth-child(5) {
      grid-column: 2/3;
    }
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
      <p>{validator.controllerId}</p>
    </div>
    <div>
      <p>{humanize(position.toString())}</p>
    </div>

    {validator.freeBalance && (
      <div>
        <p>
          Stash:&nbsp;
          <span>
            {(parseFloat(validator.freeBalance) / 1000000000000).toFixed(3)}
          </span>
          &nbsp;
          <span>KSM</span>
        </p>
      </div>
    )}

    {validator.activeBonded && (
      <div>
        <p>
          Bond:&nbsp;
          <span>
            {(parseFloat(validator.activeBonded) / 1000000000000).toFixed(3)}
          </span>
          &nbsp;
          <span>KSM</span>
        </p>
      </div>
    )}
  </StyledValidator>
);

export default Validator;
