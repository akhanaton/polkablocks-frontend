import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import Validator from './Validator';
import { PHRAGMEN_RANK_QUERY } from '../graphql/queries';

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
  } = useQuery(PHRAGMEN_RANK_QUERY);

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
          <span className="small-print">
            sorted by{' '}
            <a
              href="https://wiki.polkadot.network/docs/en/learn-phragmen"
              target="_blank"
              rel="noopener noreferrer"
            >
              phragmen
            </a>
            &nbsp;method
          </span>
        </h3>

        <p>
          <span className="number">
            {validatorData.phragmenValidators.validatorCount}
          </span>
          &nbsp;waiting
        </p>
      </div>
      {validatorData.phragmenValidators.valCandidates.map(validator => (
        <Validator
          key={validator.rank}
          position={validator.rank}
          validator={validator}
        />
      ))}
    </StyledNextUp>
  );
};

export default NextUp;
