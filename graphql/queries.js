import gql from 'graphql-tag';

export const VALIDATOR_COUNT_QUERY = gql`
  query VALIDATOR_COUNT {
    validatorCount
  }
`;

export const BLOCK_NUMBER_QUERY = gql`
  query BLOCK_NUMBER_QUERY {
    blockHeight
  }
`;

export const SESSION_VAL_QUERY = gql`
  query SESSION_VAL_QUERY {
    sessionValidators {
      controllerId
    }
  }
`;

export const STAKING_VAL_QUERY = gql`
  query STAKING_VAL_QUERY {
    stakingValidators {
      controllerId
      freeBalance
      totalBonded
      activeBonded
      accountId
      validatorPayment
    }
  }
`;

export const LEDGER_QUERY = gql`
  query LEDGER_QUERY($accountId: String!) {
    ledger(accountId: $accountId) {
      total
    }
  }
`;
