import styled from "styled-components";
import Image from "next/image";

export const BreadCrumb = () => {
  const BreadCrumbUl = styled.ul`
    list-style: none;
    li+li: before {
      color: black;
      content: '/\00a0';
    }
  `;

  const BreadCrumbLi = styled.li`
    display: inline;
    
  `;
  return (
    <BreadCrumbUl>
      <BreadCrumbLi>์กฐํ</BreadCrumbLi>
      <BreadCrumbLi>์์ง</BreadCrumbLi>
    </BreadCrumbUl>
  );
};
