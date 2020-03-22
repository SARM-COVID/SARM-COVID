import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
width: 100%;
height: 100px;
background-color: #333333;
display: flex;
justify-content: center;
align-items: center;
`

const FooterParagraph = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 19.2px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #8c8c8c;
`

const Footer = () => (
  <FooterBlock>
      <FooterParagraph> &copy; SARM - COVID19 Service d'aide à la répartition médicale</FooterParagraph>
  </FooterBlock>
);

export default Footer;