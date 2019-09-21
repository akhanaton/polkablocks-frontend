import React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import { BLOCK_NUMBER_SUBSCRIPTION } from '../graphql/subscriptions';

const BlockNumber = () => {
  const { loading, error, data } = useSubscription(BLOCK_NUMBER_SUBSCRIPTION);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <p>{data.blockHeight}</p>
    </div>
  );
};

export default BlockNumber;
