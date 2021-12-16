import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Head } from 'next/document';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { LeftMenu } from '../components/LeftMenu';


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {

  const ContainerDiv = styled.div`
    padding: 0 10px;
  `;

  const ContentDiv = styled.div`
    display: flex;
    flex: 1;
  `

  const PageDiv = styled.div`
    width: 100%;
    min-height: 800px;
    padding: 10px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      min-height: 730px;
    }
  `;

  return (
  <QueryClientProvider client={queryClient}>
    <ContainerDiv>
      <Header></Header>
      <NavBar></NavBar>
      <ContentDiv>
        <LeftMenu></LeftMenu>
        <PageDiv><Component {...pageProps} /></PageDiv>
      </ContentDiv>

      <Footer></Footer>
    </ContainerDiv>
    
  </QueryClientProvider>
  );
}

export default MyApp
