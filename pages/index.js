import styled from 'styled-components';
import dynamic from 'next/dynamic';

import BaseLayout from '../components/layouts/BaseLayout';
import CurrentValidators from '../components/CurrentValidators';
// import NextUp from '../components/NextUp';

const DynamicNextUptWithNoSSR = dynamic(() => import('../components/NextUp'), {
  ssr: false,
});

const Dashboard = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Holder = styled.div`
  min-width: 634px;
`;

const index = () => (
  <BaseLayout title="Home">
    <>
      <h1>Kusama Validator Rankings</h1>
      <Dashboard>
        <CurrentValidators />
        <Holder>
          <DynamicNextUptWithNoSSR />
        </Holder>
      </Dashboard>
    </>
  </BaseLayout>
);

export default index;
