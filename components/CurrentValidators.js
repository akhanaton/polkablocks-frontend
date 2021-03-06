import { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import Validator from './Validator';
import { SessionValidatorsContext } from '../store';
import { SESSION_VAL_QUERY, VALIDATOR_COUNT_QUERY } from '../graphql/queries';

const StyledCurrent = styled.div`
  .number {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.neutralBaseUpOne};
  }
  .next-header {
    display: flex;
    justify-content: space-between;
  }
  flex: none;
  display: flex;
  flex-direction: column;

  > div {
    h3 {
      margin-bottom: 1.5rem;
      font-weight: 300;
    }
  }
`;

const StyledLoader = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

const CurrentValidators = () => {
  const { loading, error, data } = useQuery(SESSION_VAL_QUERY);

  const {
    loading: countLoading,
    error: countError,
    data: countData,
  } = useQuery(VALIDATOR_COUNT_QUERY);

  const { setValidators, setValidatorsReady } = useContext(
    SessionValidatorsContext
  );

  if (loading)
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
  setValidators(data.sessionValidators);
  setValidatorsReady(true);
  if (loading) return <p />;
  if (error) return `Error! ${error.message}`;
  if (countLoading) return 'Loading...';
  if (countError) return `Error! ${countError.message}`;

  return (
    <StyledCurrent>
      <div className="next-header">
        <h3>Validators</h3>
        <p>
          <span className="number">
            {data.sessionValidators.length} of {countData.validatorCount}
          </span>
          &nbsp;slots
        </p>
      </div>
      {data.sessionValidators.map((validator, index) => (
        <Validator
          key={index + 1}
          position={index + 1}
          validator={validator}
          elected
        />
      ))}
    </StyledCurrent>
  );
};

export default CurrentValidators;
