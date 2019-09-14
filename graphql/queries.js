import gql from 'graphql-tag';

export const VALIDATOR_COUNT = gql`
  query VALIDATOR_COUNT {
    validatorCount
  }
`;
