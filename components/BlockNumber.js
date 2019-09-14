import React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import { GET_BLOCK_NUMBER } from '../graphql/subscriptions';

const BlockNumber = () => {
  const { loading, error, data } = useSubscription(GET_BLOCK_NUMBER);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div>
      <p>{data.blockHeight}</p>
    </div>
  );
};

export default BlockNumber;
