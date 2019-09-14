import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

// import Logo from './Logo';
// import Navbar from './Navbar';

Router.onRouteChangeStart = () => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 4rem;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.35);
`;

const Header = () => (
  <StyledHeader>{/* <Logo height="40px" />
     <Navbar  /> */}</StyledHeader>
);

export default Header;
