import styled from 'styled-components';
import Image from 'next/image'

export const Footer = () => {
 
  const FooterDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  `;

  const FooterA = styled.a`
  `;

  const LogoSpan = styled.span`
    height: 100px;
  `;
  return (
    <FooterDiv>
        <FooterA
          href="https://www.tradlinx.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <LogoSpan>
            <Image src="/tradlinx_logo.png" alt="Vercel Logo" width={100} height={16} />
          </LogoSpan>
        </FooterA>
      </FooterDiv>
  )
}