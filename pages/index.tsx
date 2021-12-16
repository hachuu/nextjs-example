import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

const ContainerDiv = styled.div`
  padding: 0 10px;
`;

const PageDiv = styled.div`
  min-height: 800px;
  padding: 10px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <ContainerDiv>
      <Head>
        <title>Tradlinx Shipgo Monitoring</title>
        <meta name="description" content="Tradlinx Shipgo Monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <PageDiv></PageDiv>

      <Footer></Footer>
    </ContainerDiv>
  )
}

export default Home
