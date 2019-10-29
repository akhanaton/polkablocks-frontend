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

export const CURRENT_ELECTED_QUERY = gql`
  query CURRENT_ELECTED_QUERY {
    currentElected {
      accountId
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

export const PHRAGMEN_RANK_QUERY = gql`
  query PHRAGMEN_RANK_QUERY {
    phragmenValidators {
      validatorCount
      nominatorCount
      totalIssuance
      lowestStake
      valCandidates {
        rank
        accountId
        totalStake
        validatorStake
        nominatorStake
        nominatorCount
        controllerId
        nominators {
          accountId
          stake
        }
      }
    }
  }
`;

export const NICK_QUERY = gql`
  query NICK_QUERY($accountId: String!) {
    nick(accountId: $accountId)
  }
`;
