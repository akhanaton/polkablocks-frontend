import { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import Validator from './Validator';
import { CurrentElectedContext } from '../store';
import {
  CURRENT_ELECTED_QUERY,
  VALIDATOR_COUNT_QUERY,
} from '../graphql/queries';

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
  const { loading, error, data } = useQuery(CURRENT_ELECTED_QUERY);

  const {
    loading: countLoading,
    error: countError,
    data: countData,
  } = useQuery(VALIDATOR_COUNT_QUERY);

  const { setElected, setElectedReady } = useContext(CurrentElectedContext);

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

  setElected(data.currentElected);
  setElectedReady(true);
  if (loading) return <p />;
  if (error) return `Error! ${error.message}`;
  if (countLoading) return 'Loading...';
  if (countError) return `Error! ${countError.message}`;

  return (
    <StyledCurrent>
      <div className="next-header">
        <h3>Validators</h3>
        <p>
          <span className="number">{countData.validatorCount}</span>
          &nbsp;slots
        </p>
      </div>
      {data.currentElected.map((validator, index) => (
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
