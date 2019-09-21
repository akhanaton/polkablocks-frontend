import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import Validator from './Validator';
import { SESSION_VAL_QUERY, VALIDATOR_COUNT_QUERY } from '../graphql/queries';

const StyledCurrent = styled.div`
  .number {
    font-size: 1.5rem;
  }
  min-width: 650px;
  flex: none;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    h3 {
      padding-bottom: 1.5rem;
    }
  }
`;

const CurrentValidators = () => {
  const { loading, error, data } = useQuery(SESSION_VAL_QUERY);

  const {
    loading: countLoading,
    error: countError,
    data: countData,
  } = useQuery(VALIDATOR_COUNT_QUERY);

  if (loading) return <p />;
  if (error) return `Error! ${error.message}`;
  if (countLoading) return 'Loading...';
  if (countError) return `Error! ${countError.message}`;

  return (
    <StyledCurrent>
      <div>
        <h3>Validators</h3>
        <p>
          <span className="number">{countData.validatorCount}</span>
          slots
        </p>
      </div>
      {data.sessionValidators.map((validator, index) => (
        <Validator key={index + 1} position={index + 1} validator={validator} />
      ))}
    </StyledCurrent>
  );
};

export default CurrentValidators;
