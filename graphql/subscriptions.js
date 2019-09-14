import gql from 'graphql-tag';

export const GET_BLOCK_NUMBER = gql`
  subscription GET_BLOCK_NUMBER {
    blockHeight
  }
`;
