import Link from 'next/link';
import styled from 'styled-components';

export const NavBar = () => {
 

  const NavBarDiv = styled.div`
  `;
  const NavBarUl = styled.ul`
    display: flex;
  `;
  const NavBarLi = styled.li`
  display: flex;
    flex: 1;
    font-family: "KyoboHandwriting2020A", sans-serif;
  `;


  return (
    <NavBarDiv>
      <NavBarUl>
        <NavBarLi><Link href={'/'}>Home</Link></NavBarLi>
        <NavBarLi><Link href={'/profile'}>Profile</Link></NavBarLi>
        <NavBarLi><Link href={'/'}>Detail</Link></NavBarLi>
        <NavBarLi><Link href={'/'}>Monitoring</Link></NavBarLi>
      </NavBarUl>

    </NavBarDiv>
  )
}