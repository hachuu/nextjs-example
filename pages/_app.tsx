import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Head } from 'next/document';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {

  const ContainerDiv = styled.div`
    padding: 0 10px;
  `;

  const PageDiv = styled.div`
    min-height: 1000px;
    padding: 10px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    @media (max-width: 768px) {
      min-height: 730px;
    }
  `;

  return (
  <QueryClientProvider client={queryClient}>
    <ContainerDiv>
      <Header></Header>
      <NavBar></NavBar>
      <PageDiv><Component {...pageProps} /></PageDiv>

      <Footer></Footer>
    </ContainerDiv>
    
  </QueryClientProvider>
  );
}

export default MyApp
