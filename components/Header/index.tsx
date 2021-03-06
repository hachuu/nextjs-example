

import Head from 'next/head'
import styled from 'styled-components';

export const Header = () => {
  const HeaderDiv = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0px;
    padding: 10px 0;
    border-top: 5px solid #000;
    z-index: 5;
    background-color: white;
    font-weight: bold;
  `;
    
  // box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20); ==> 스크롤할때 넣고 싶습니다.
  return (
    <>
    <Head>
      <title>Tradlinx Shipgo Monitoring</title>
      <meta name="description" content="Tradlinx Shipgo Monitoring" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HeaderDiv> Tradlinx </HeaderDiv>
    </>
  )
}