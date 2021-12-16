

import Head from 'next/head'
import styled from 'styled-components';

export const LeftMenu = () => {

  const LeftMenuDiv = styled.div`
    display: flex;
    flex: none;
    width: 100px;
    background-color: #bfbab078;
    @media (max-width: 768px) {
      display: none;
    }
  `;
  return (
    <LeftMenuDiv>여기 왼쪽</LeftMenuDiv>
  )
}