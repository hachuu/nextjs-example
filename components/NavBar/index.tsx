import Link from 'next/link';
import styled from 'styled-components';

export const NavBar = () => {
 

  const NavBarDiv = styled.div`
    border-bottom: 1px solid #eaeaea;
    z-index: 5;
    margin: 70px 0 0 0;
    // position: fixed;
    width: 100%;
    
    background-color: white;
  `;

  const NavBarUl = styled.ul`
    display: flex;
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
  `;
  const NavBarLi = styled.li`
    display: flex;
    flex: 1;
    a {
      border-radius: 5px;
      padding: 0 10px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  `;
  const NavBarA = styled.a`
  &:hover  {
    background-color: #f5f5f5;
  }
  `;


  return (
    <NavBarDiv>
      <NavBarUl>
        <NavBarLi><Link href={'/'}>Home</Link></NavBarLi>
        <NavBarLi><Link href={'/cargo-track'}>선적 추적</Link></NavBarLi>
        <NavBarLi><Link href={'/batch-execution-result'}>배치 실행 결과</Link></NavBarLi>
        <NavBarLi><Link href={'/track-monitor'}>Tracking Monitoring</Link></NavBarLi>
      </NavBarUl>

    </NavBarDiv>
  )
}