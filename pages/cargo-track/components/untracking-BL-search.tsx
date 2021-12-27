import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

export const UnTrackingBLSearch = () => {
  const [selectActive, setSelectActive] = useState(false);
  const [activeDetaillDiv, setActiveDetaillDiv] = useState(false);

  const UnTrackingBLSearchDiv = styled.div`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  `;

  const BLSearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 50px;
    margin: 20px 0 0 0;
  `;
  const BLInputDiv = styled.div`
    border: 1px solid #929aa7;
    margin: 0 0 0 20px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    @media (max-width: 768px) {
      margin: 0 10px 0 10px;
      // width: 100%;
    }
  `;

  const BLInput = styled.input`
    width: 100%;
    border: none;
    justify-content: space-between;
  `;

  const SelectBoxDiv = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 150px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid #929aa7;
    background-size: 20px;
    cursor: pointer;
    :after {
      content: "▼";
      display: block;
      height: 100%;
      position: absolute;
      top: ${(props: { active: boolean }) => (props.active ? "-3px" : "4px;")};
      right: 10px;
      transform: ${(props: { active: boolean }) =>
        props.active ? "rotate(180deg)" : "rotate(0deg)"};
    }
  `;
  const SelectButton = styled.button`
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    border: 0 none;
    outline: 0 none;
    padding-left: 15px;
    background: transparent;
    cursor: pointer;
  `;

  const OptionUl = styled.ul`
    position: absolute;
    top: 28px;
    left: 0;
    width: 100%;
    background: #03a9f4;
    color: #fff;
    list-style-type: none;
    padding: 0;
    border-radius: 6px;
    overflow: hidden;
    max-height: ${(props: { active: boolean }) =>
      props.active ? "500px" : "0"};
    transition: 0.3s ease-in;
  `;

  const OptionItemLi = styled.li`
    border-bottom: 1px dashed #000;
    padding: 5px 15px 5px;
    transition: 0.1s;
    &:hover {
      background: #929aa7;
    }
    &:last-child {
      border-bottom: 0 none;
    }
  `;

  const SearchBtn = styled.button`
    margin: 0 0 0 20px;
  `;

  const BLResultDiv = styled.div`
    justify-content: space-between;
    border-top: 1px solid #eaeaea;
    padding: 10px;
    margin: 30px 50px;
    display: flex;
    @media (max-width: 768px) {
      margin: 0 10px 0 10px;
      overflow-y: scroll;
    }
  `;

  const ListTableDiv = styled.div`
    box-size: border-box;
    border: 1px solid #929aa7;
    width: 100%;
  `;

  const TableHeadDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props: { type: string }) => props.type === 'list' ? '#f5f5f5' : '#03a9f424'};
  `;

  const TableHeadItemDiv = styled.div`
    padding: 10px;
    display: flex;
    flex: ${(props: { flexValue: number }) => props.flexValue};
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #929aa7;
    font-size: 13px;
  `;

  const TableBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const TableBodyListDiv = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #929aa7;
  `;

  const TableBodyListDetailDiv = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #929aa7;
  `;

  const TableBodyListItemDiv = styled.div`
    padding: 10px;
    display: flex;
    flex: ${(props: { flexValue: number }) => props.flexValue};
    justify-content: center;
    align-items: center;
    font-size: 13px;
    overflow-wrap: break-word;
    @media (max-width: 768px) {
      width: 14%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `;
  const TableBodyListDetailBtnDiv = styled.div`
    &: hover {
      cursor: pointer;
    }
  `;

  return (
    <UnTrackingBLSearchDiv>
      <BLSearchDiv>
        <SelectBoxDiv active={selectActive}>
          <SelectButton onClick={() => setSelectActive(!selectActive)}>
            ALL
          </SelectButton>
          <OptionUl active={selectActive}>
            <OptionItemLi>apple</OptionItemLi>
            <OptionItemLi>orange</OptionItemLi>
            <OptionItemLi>grape</OptionItemLi>
            <OptionItemLi>melon</OptionItemLi>
          </OptionUl>
        </SelectBoxDiv>
        <BLInputDiv>
          <BLInput placeholder="유저 아이디"></BLInput>
        </BLInputDiv>
        <BLInputDiv>
          <BLInput placeholder="유저 아이디"></BLInput>
        </BLInputDiv>
        <SearchBtn>조회</SearchBtn>
      </BLSearchDiv>
      <BLResultDiv>
        <ListTableDiv>
          <TableHeadDiv type={"list"}>
            <TableHeadItemDiv flexValue={0.2}>
              <input type={"checkbox"}></input>
            </TableHeadItemDiv>
            <TableHeadItemDiv flexValue={1}>사용자</TableHeadItemDiv>
            <TableHeadItemDiv flexValue={1}>선사코드</TableHeadItemDiv>
            <TableHeadItemDiv flexValue={1}>B/L번호</TableHeadItemDiv>
            <TableHeadItemDiv flexValue={1}>상태값</TableHeadItemDiv>
            <TableHeadItemDiv flexValue={1}>추적 시간</TableHeadItemDiv>
            <TableHeadItemDiv flexValue={1}>입력 시간</TableHeadItemDiv>
            <TableHeadItemDiv flexValue={1}>조회</TableHeadItemDiv>
          </TableHeadDiv>
          <TableBodyDiv>
            <TableBodyListDiv>
              <TableBodyListItemDiv flexValue={0.2}>
                <input type={"checkbox"}></input>
              </TableBodyListItemDiv>
              <TableBodyListItemDiv flexValue={1}>
                shyshy0621@gmail.com
              </TableBodyListItemDiv>
              <TableBodyListItemDiv flexValue={1}>ONE</TableBodyListItemDiv>
              <TableBodyListItemDiv flexValue={1}>
                ONETWOTHREESTEP0
              </TableBodyListItemDiv>
              <TableBodyListItemDiv flexValue={1}>
                COMPLETE
              </TableBodyListItemDiv>
              <TableBodyListItemDiv flexValue={1}>
                2021-12-01T16:00:48.362257
              </TableBodyListItemDiv>
              <TableBodyListItemDiv flexValue={1}>
                2021-12-14T01:24:04.993931
              </TableBodyListItemDiv>
              <TableBodyListItemDiv
                flexValue={1}
                onClick={() => setActiveDetaillDiv(!activeDetaillDiv)}
              >
                <TableBodyListDetailBtnDiv>
                  상세 조회 ▼
                </TableBodyListDetailBtnDiv>
              </TableBodyListItemDiv>
            </TableBodyListDiv>
          </TableBodyDiv>
        </ListTableDiv>
      </BLResultDiv>
    </UnTrackingBLSearchDiv>
  );
};
