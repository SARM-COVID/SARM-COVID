import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeroSection = styled.div`
width: 100%;
padding: 10px;
height: 100px;
display: flex;
flex-direction: column;
background-color: white;
@media (max-width: 768px){
  height: 150px;
}
`

const TitleWrapper = styled.div`
display: flex;
align-items: flex-start;
`

const Lync = styled.a`
display: flex;
align-items: flex-start;
cursor: pointer;
textDecoration: 'none'
`

const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-left: 10px;
`

const Logo = styled.img`
width: 75px;
height: 75px;
`

const PageTitle = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 48px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #4a4a4a;
margin: 0;
`

const PageSubtitle = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 15px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #4a4a4a;
margin: 0;
`

const Header = () => (
  <HeroSection>
    <Link href="/">
      <Lync>
        <TitleWrapper>
          <Logo src='/static/images/SRAM-LOGO.png' alt='SRAM LOGO' />
          <TitleContainer>
            <PageTitle>SARM - COVID</PageTitle>
            <PageSubtitle>Service d'aide à la répartition médicale</PageSubtitle>
          </TitleContainer>
        </TitleWrapper>
      </Lync>
    </Link>
  </HeroSection>
);

export default Header;
