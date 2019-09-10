import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  p {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.neutralBaseUpTwo};
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>&copy; Tartan Staking 2019</p>
  </StyledFooter>
);

export default Footer;
