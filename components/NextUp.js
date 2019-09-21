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
  }
  .next-header {
    display: flex;
    justify-content: space-between;
  }
  margin-left: 1rem;
  h3 {
    margin-bottom: 1.5rem;
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
          height={100}
          width={100}
          timeout={75000} // 3 secs
        />
      </StyledLoader>
    );
  if (validatorError) return `Error! ${validatorError.message}`;

  return (
    <StyledNextUp>
      <div className="next-header">
        <h3>Next Up</h3>
        <p>
          <span className="number">
            {validatorData.stakingValidators.length}
          </span>
          waiting
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
