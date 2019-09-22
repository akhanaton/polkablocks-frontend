import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  p {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.neutralBaseUpTwo};
    a:link,
    a:active,
    a:visited,
    a:hover {
      color: #${props => props.theme.colors.neutralBaseUpTwo};
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>
      &copy;{' '}
      <a href="http://gotartan.com" target="_blank" rel="noopener noreferrer">
        gotartan.com
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
