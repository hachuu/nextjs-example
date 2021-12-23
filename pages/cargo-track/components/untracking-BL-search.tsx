import styled from "styled-components";
import Image from "next/image";
import { useState } from 'react';

export const UnTrackingBLSearch = () => {

  const [selectActive, setSelectActive] = useState(false);

  const BLSearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
  `;
  const BLInputDiv = styled.div`
    border: 1px solid #929aa7;
    margin: 0 50px;
    padding: 5px;
    flex: 1;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin: 0 10px 0 10px;
      // width: 100%;
    }
  `;

  const BLInput = styled.input`
    flex: 1;
    border: none;
  `;

  const SelectBoxDiv = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 150px;
    height: 35px;
    border-radius: 4px;
    border: 2px solid lightcoral;
    background: url("https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png")
      calc(100% - 7px) center no-repeat;
    background-size: 20px;
    cursor: pointer;
    :after {
      content: "";
      display: block;
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 35px;
      background: lightcoral;
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
    background: lightcoral;
    color: #fff;
    list-style-type: none;
    padding: 0;
    border-radius: 6px;
    overflow: hidden;
    max-height: ${(props: {active: boolean}) => props.active ? '500px': '0'};
    transition: 0.3s ease-in;
  `;

  const OptionItemLi = styled.li`
    border-bottom: 1px dashed rgb(170, 72, 72);
    padding: 5px 15px 5px;
    transition: .1s;
    &:hover {
      background: rgb(175, 93, 93);
    }
    &:last-child {
      border-bottom: 0 none;
    }
  `;  

  return (
    <>
    <BLSearchDiv>
      <SelectBoxDiv>
        <SelectButton onClick={()=>setSelectActive(!selectActive)}>fruits 🍊</SelectButton>
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
      <button>조회</button>
    </BLSearchDiv>
    </>
  );
};
