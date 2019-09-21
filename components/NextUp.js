import { useQuery } from '@apollo/react-hooks';
import debounceRender from 'react-debounce-render';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import Validator from './Validator';
import { STAKING_VAL_QUERY } from '../graphql/queries';

import { sortValidators } from '../lib/validators';

const StyledNextUp = styled.div`
  .number {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.neutralBaseUpOne};
  }
  .next-header {
    display: flex;
    justify-content: space-between;
  }
  .small-print {
    font-size: 0.7rem;
    color: ${props => props.theme.colors.neutralBaseUpOne};
  }
  margin-left: 1rem;
  h3 {
    margin-bottom: 1.5rem;
    font-weight: 300;
  }
`;

const StyledLoader = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

const NextUp = () => {
  const {
    loading: validatorLoading,
    error: validatorError,
    data: validatorData,
  } = useQuery(STAKING_VAL_QUERY);

  if (validatorLoading)
    return (
      <StyledLoader>
        <Loader
          type="Bars"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={10000} // 3 secs
        />
      </StyledLoader>
    );
  if (validatorError) return `Error! ${validatorError.message}`;

  return (
    <StyledNextUp>
      <div className="next-header">
        <h3>
          Next Up{' '}
          <span className="small-print">updated every five minutes</span>
        </h3>

        <p>
          <span className="number">
            {validatorData.stakingValidators.length}
          </span>
          &nbsp;waiting
        </p>
      </div>
      {sortValidators(validatorData.stakingValidators).map(
        (validator, index) => (
          <Validator
            key={index + 1}
            position={index + 1}
            validator={validator}
          />
        )
      )}
    </StyledNextUp>
  );
};

export default debounceRender(NextUp, 100);
