import styled from "styled-components";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

export const UnTrackingBLSearch = () => {
  const [selectActive, setSelectActive] = useState(false);
  const [lineCd, setLineCd] = useState("");
  const [activeDetaillDiv, setActiveDetaillDiv] = useState(false);
  const [lineCdList, setLineCdList] = useState<string[]>([]);

  const UnTrackingBLSearchDiv = styled.div`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px;
  `;

  const BLSearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    margin: 0 50px;
  `;

  const BLInputDiv = styled.div`
    border: 1px solid #929aa7;
    margin: 0 0 0 20px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    width: ${(props: { width: string }) => props.width};
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

  const TimeInputText = styled.span`
    font-size: 12px;
    // center
    display: flex;
    justify-content: center;
    align-items: center;
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
      top: ${(props: { active: boolean }) => (props.active ? "-6px" : "5px;")};
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
    top: 18px;
    left: 0;
    width: 100%;
    background: #03a9f4;
    color: #fff;
    list-style-type: none;
    padding: 0;
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    max-height: ${(props: { active: boolean }) =>
      props.active ? "200px" : "0"};
    transition: 0.3s ease-in;
    overflow-y: scroll;
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

  const BLListDiv = styled.div`
    flex: 1;
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

  useEffect(() => {
    setLineCdList(["ANL","APL","CKL","CMA","CNC","COA","DJS","EMC","ESL","GSL","HAS","HLC","HMM","HSD","KMD","MAE","MCC","MSC","NSS","ONE","OOL","PAN","PCL","PCS","PIL","SFM","SIT","SKR","SML","SNT","TSL","WHL","YML","ZIM","HSL","ALL"]);
  }, []);

  return (
    <UnTrackingBLSearchDiv>
      <BLSearchDiv>
        <SelectBoxDiv active={selectActive} onClick={() => setSelectActive(!selectActive)}>
          <SelectButton>
            {lineCd || 'ALL'}
          </SelectButton>
          <OptionUl active={selectActive}>
            {
              lineCdList && lineCdList.map((item: string, index: number) => {
                return <OptionItemLi key={item+index} onClick={()=>setLineCd(item)}>{item}</OptionItemLi>
              })
            }
          </OptionUl>
        </SelectBoxDiv>
        <BLInputDiv width={'150px'}>
          <BLInput placeholder="유저 아이디"></BLInput>
        </BLInputDiv>
        <BLInputDiv width={'60px'}>
          <BLInput placeholder="시간" type={'number'}></BLInput>
          {/* value={6} onChange={(e) => {handleChange(e, data.idx)}} */}
        </BLInputDiv>
        <TimeInputText>시간 이상 업데이트 되지 않은 B/L</TimeInputText>
        <SearchBtn>조회</SearchBtn>
      </BLSearchDiv>
      <BLResultDiv>
        <BLListDiv>
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
        </BLListDiv>
      </BLResultDiv>
    </UnTrackingBLSearchDiv>
  );
};
