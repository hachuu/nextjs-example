import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export const NavBar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

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
    &:hover {
      background-color: #f5f5f5;
    }
  `;

  const NavSubUl = styled.ul`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      display: flex;
    }
  `;

  const NavSubLi = styled.li`
    display: flex;
    flex: 1;
    margin: 10px;
    
    font-weight: ${(props: { titleBold: boolean }) => props.titleBold ? 'bold' : 'normal'};
    a {
      border-radius: 5px;
      padding: 0 10px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  `;

  const SubRowDirectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #eaeaea;
  `;

  const SubRowItemDiv = styled.div`
    flex-grow: 1;
    width: 25%;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const SubRowItemRealDiv = styled.div`
    flex-grow: 1;
    width: 25%;
  `;

  const activateSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <NavBarDiv>
      <NavBarUl>
        <NavBarLi>
          <Link href={"/"}>Home</Link>
        </NavBarLi>
        <NavBarLi>
          <a href={"#"} onClick={() => activateSubMenu()}>
            선적 추적
          </a>
        </NavBarLi>
        <NavBarLi>
          <Link href={"/batch-execution-result"}>배치 실행 결과</Link>
        </NavBarLi>
        <NavBarLi>
          <Link href={"/track-monitor"}>Tracking Monitoring</Link>
        </NavBarLi>
      </NavBarUl>

      {openSubMenu && (
        <SubRowDirectionDiv>
          <SubRowItemDiv></SubRowItemDiv>
          <SubRowItemRealDiv>
            <NavSubUl>
              <NavSubLi titleBold={true}>
                <Link href={"/cargo-track"}>선적 추적</Link>
              </NavSubLi>
              <NavSubLi titleBold={false}>
                <Link href={"/cargo-track/finder"}>조회</Link>
              </NavSubLi>
              <NavSubLi titleBold={false}>
                <Link href={"/cargo-track/collect-management"}>수집</Link>
              </NavSubLi>
              <NavSubLi titleBold={false}>
                <Link href={"/cargo-track/"}>데이터 처리 결과</Link>
              </NavSubLi>
            </NavSubUl>
          </SubRowItemRealDiv>
          <SubRowItemDiv>
            {/* <NavSubUl>
              <NavSubLi>
                <Link href={"/cargo-track"}>선적 추적</Link>
              </NavSubLi>
              <NavSubLi>
                <Link href={"/cargo-track"}>조회</Link>
              </NavSubLi>
              <NavSubLi>
                <Link href={"/cargo-track"}>수집</Link>
              </NavSubLi>
            </NavSubUl> */}
          </SubRowItemDiv>
          <SubRowItemDiv>
            {/* <NavSubUl>
              <NavSubLi>
                <Link href={"/cargo-track"}>선적 추적</Link>
              </NavSubLi>
              <NavSubLi>
                <Link href={"/cargo-track"}>조회</Link>
              </NavSubLi>
              <NavSubLi>
                <Link href={"/cargo-track"}>수집</Link>
              </NavSubLi>
            </NavSubUl> */}
          </SubRowItemDiv>
        </SubRowDirectionDiv>
      )}
    </NavBarDiv>
  );
};
