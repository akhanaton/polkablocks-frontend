import { useContext } from 'react';
import Devtools from '../../temp/Devtools';
import { ApiContext } from '../../store/api';

const DevConsole = () => {
  const { chainApi } = useContext(ApiContext);
  return <Devtools api={chainApi} />;
};

export default DevConsole;
