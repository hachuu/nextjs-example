import { NextPage } from "next";
import { useState } from "react";
import styled, { css } from "styled-components";

const Finder: NextPage = () => {
  
  const [trackingYactive, setTrackingYactive] = useState(true);
  const [activeDetaillDiv, setActiveDetaillDiv] = useState(false);

  const PageDiv = styled.div`
    margin: 0 20px;
    background: white;
  `;

  const PageTab = styled.div`
    border: none;
    position: relative;
  `;

  const TabInput = styled.input`
    display: none;
  `;

  const TabUl = styled.ul`
    width: 40%;
    padding: 0 50px;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `;

  const TabLi = styled.li<{ active: boolean }>(
    ({ active }) => css`
      padding: 16px 10px;
      display: inline-block;
      width: 40%;
      border-radius: 6px 6px 0 0;
      border: 1px solid #929aa7;
      cursor: pointer;
      box-shadow: ${active ? "0px 0px 0px 1px #03A9F4" : "none"};
      span {
        &: hover {
          color: #929aa7;
        }
        color: ${active ? "#03A9F4" : "black"};
        font-size: 13px;
      }
    `
  );

  const PageContent = styled.div`
    height: 100%;
  `;

  const BLInputDiv = styled.div`
    border: 1px solid #929aa7;
    margin: 0 50px;
    padding: 5px;
    width: 230px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin: 0 10px 0 10px;
      // width: 100%;
    }
  `;
  const BLInput = styled.input`
    width: 100%;
    border: none;
  `;

  const BLSvg = styled.svg`
  // hover shadow
    &: hover {
      cursor: pointer;
      box-shadow: 1px 1px 1px 1px #f5f5f5;
    }
  `

  const BLResultDiv = styled.div`
    justify-content: space-between;

    border-top: 1px solid #eaeaea;
    padding: 10px;
    margin: 30px 50px;
    display: flex;
    flex-flow: ${(props: {activeDetaillDiv: boolean}) => props.activeDetaillDiv ? 'row wrap;': 'none'};
    @media (max-width: 768px) {
      margin: 0 10px 0 10px;
      flex-flow: ${(props: {activeDetaillDiv: boolean}) => props.activeDetaillDiv ? 'column wrap;': 'none'};
      overflow-y: scroll;
    }
  `;
  const BLListDiv =  styled.div`
    flex:  ${(props: {activeDetaillDiv: boolean})  => props.activeDetaillDiv ? '0 0 40%': '1'};
    // flex-basis: ${(props: {activeDetaillDiv: boolean})  => props.activeDetaillDiv ? '100%': 'none'};
    // @media (max-width: 768px) {
    //   overflow-y: scroll;
    // }
  `;
  const OptionBtnDiv = styled.div`
    display: flex;
    padding: 5px;
    @media (max-width: 768px) {
      margin: 0 10px 0 10px;
      // width: 100%;
    }
  `;

  const ListTableDiv = styled.div`
    box-size: border-box;
    border: 1px solid #929aa7;
    width: 100%;
    // height: 500px;
  `;

  const TableHeadDiv = styled.div`
    display: flex;
    flex-direction: row;
  `

  const TableHeadItemDiv = styled.div`
    padding: 10px;
    display: flex;
    flex: ${((props: {flexValue: number})  => props.flexValue)};
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #929aa7;
    font-size: 13px;
    background-color: #f5f5f5;
  `;

  const TableBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const TableBodyListDiv = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const TableBodyListItemDiv = styled.div`
    padding: 10px;
    display: flex;
    flex: ${((props: {flexValue: number})  => props.flexValue)};
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #929aa7;
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

  const ListDetailButton = styled.button`
    margin: 0 10px 0 0;
  `;
  const BLListDetailDiv =  styled.div`
    flex: 0 0 40%;
    margin-left: auto;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 10px;
    }
  `;

  const BLDetailCloseDiv = styled.div`
    display: flex;
  `

  const BLDetailCloseBtnImg = styled.img`
    margin-left: auto;
    &: hover {
      cursor: pointer;
    }
  `;

  const BLDetaiTableslDiv = styled.div`
    display: flex;
    flex-direction: column;
  `

  const BLDetailTableDiv = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #929aa7;
    margin-bottom: 10px;
    `;


  return (
    <PageDiv>
      <PageTab>
        {/* <></> */}
        <TabInput id="tab1" name="tab-control" type="radio"></TabInput>
        <TabInput id="tab2" name="tab-control" type="radio"></TabInput>
        <TabUl>
          <TabLi
            active={trackingYactive}
            onClick={() => setTrackingYactive(true)}
          >
            <span>B/L로 조회</span>
          </TabLi>
          <TabLi
            active={!trackingYactive}
            onClick={() => setTrackingYactive(false)}
          >
            <span>미추적상태 B/L 조회</span>
          </TabLi>
        </TabUl>
      </PageTab>
      <PageContent>
        <BLInputDiv>
          <BLInput placeholder="B/L번호"></BLInput>
          <span>
            <BLSvg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              height="12px"
              viewBox="0 0 1244.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M4025 12789 c-1029 -79 -1969 -501 -2704 -1214 -985 -955 -1456
                    -2292 -1285 -3650 156 -1244 849 -2360 1899 -3059 193 -129 272 -175 470 -274
                    452 -227 906 -362 1445 -429 207 -25 763 -25 970 0 404 50 752 138 1115 281
                    251 98 600 283 819 433 l80 54 1075 -1073 c3835 -3827 3770 -3762 3828 -3795
                    189 -105 411 -75 563 77 148 148 180 359 84 553 -21 43 -462 488 -2432 2459
                    -2212 2213 -2404 2408 -2392 2425 8 10 40 47 70 83 714 836 1088 1927 1031
                    3011 -32 610 -165 1136 -420 1664 -169 349 -340 615 -592 920 -106 128 -395
                    417 -524 524 -687 569 -1463 900 -2336 996 -174 19 -598 27 -764 14z m780
                    -949 c777 -118 1453 -463 1982 -1014 516 -536 829 -1194 930 -1951 24 -186 24
                    -618 0 -810 -54 -416 -158 -758 -342 -1125 -297 -593 -779 -1101 -1360 -1432
                    -964 -549 -2153 -590 -3152 -108 -975 470 -1667 1364 -1873 2420 -37 192 -51
                    323 -57 555 -6 258 4 423 42 651 161 971 742 1831 1588 2348 453 278 935 434
                    1512 490 22 2 164 3 315 1 217 -3 304 -8 415 -25z"
                />
              </g>
            </BLSvg>
          </span>
        </BLInputDiv>
        <BLResultDiv activeDetaillDiv={activeDetaillDiv}>
          <BLListDiv activeDetaillDiv={activeDetaillDiv}>
            리스트
            <OptionBtnDiv>
              <ListDetailButton>선택 해제</ListDetailButton>
              <ListDetailButton>수집 메세지 발송</ListDetailButton>
            </OptionBtnDiv>
            <ListTableDiv>
              <TableHeadDiv>
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
                  <TableBodyListItemDiv flexValue={1}>
                    <button onClick={() => setActiveDetaillDiv(true)}>
                      상세 조회
                    </button>
                  </TableBodyListItemDiv>
                </TableBodyListDiv>

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
                  <TableBodyListItemDiv flexValue={1}>
                    <button onClick={() => setActiveDetaillDiv(true)}>
                      상세 조회
                    </button>
                  </TableBodyListItemDiv>
                </TableBodyListDiv>
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
                  <TableBodyListItemDiv flexValue={1}>
                    <button onClick={() => setActiveDetaillDiv(true)}>
                      상세 조회
                    </button>
                  </TableBodyListItemDiv>
                </TableBodyListDiv>
              </TableBodyDiv>
            </ListTableDiv>
          </BLListDiv>
          {activeDetaillDiv && (
            <BLListDetailDiv>
              <BLDetailCloseDiv>
                상세
                <BLDetailCloseBtnImg
                  src="https://cdn-icons-png.flaticon.com/512/151/151882.png"
                  width="12px"
                  height="12px"
                  alt="닫기  무료 아이콘"
                  title="닫기 무료 아이콘"
                  onClick={() => setActiveDetaillDiv(false)}
                ></BLDetailCloseBtnImg>
              </BLDetailCloseDiv>

              <BLDetaiTableslDiv>
                <BLDetailTableDiv>
                  <ListTableDiv>
                    <TableHeadDiv>
                      <TableHeadItemDiv flexValue={0.7}>ID</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>선박명</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>출발항</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>도착항</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>ETD</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>ATD</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>ATA</TableHeadItemDiv>
                    </TableHeadDiv>
                    <TableBodyDiv>
                      <TableBodyListDiv>
                        <TableBodyListItemDiv flexValue={0.7}>
                          12345678
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          HYUNDAIHONOUR
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          Cartagena
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          New Busan
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          2021-10-24T18:30:00
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          2021-11-16T20:00:00
                        </TableBodyListItemDiv>
                      </TableBodyListDiv>
                    </TableBodyDiv>
                  </ListTableDiv>
                </BLDetailTableDiv>
                <BLDetailTableDiv>

                  <ListTableDiv>
                    <TableHeadDiv>
                      <TableHeadItemDiv flexValue={0.7}>ID</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>
                        컨테이너번호
                      </TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>종류</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>크기</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>SEALNO</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>ATA</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>ATD</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>PORTOUT</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>RAILON</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>RAILOFF</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>
                        FINALARRIVAL
                      </TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>상세조회</TableHeadItemDiv>
                    </TableHeadDiv>
                    <TableBodyDiv>
                      <TableBodyListDiv>
                        <TableBodyListItemDiv flexValue={0.7}>
                          12345678
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          CONT1234567
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          DRYST
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          20
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          BLA27247,BLA27248
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          2021-11-16T20:00:00
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          2021-11-16T20:00:00
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          2021-11-22T17:19:00
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                        <TableBodyListItemDiv flexValue={1}>
                          2021-11-23T10:35:00
                        </TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                      </TableBodyListDiv>
                    </TableBodyDiv>
                  </ListTableDiv>
                </BLDetailTableDiv>

                <BLDetailTableDiv>
                  <ListTableDiv>
                    <TableHeadDiv>
                      <TableHeadItemDiv flexValue={0.7}>문구</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>
                        이벤트 날짜 타입
                      </TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>
                        이벤트 날짜
                      </TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>
                        체크포인트
                      </TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>선박명</TableHeadItemDiv>
                      <TableHeadItemDiv flexValue={1}>항차</TableHeadItemDiv>
                    </TableHeadDiv>
                    <TableBodyDiv>
                      <TableBodyListDiv>
                        <TableBodyListItemDiv
                          flexValue={0.7}
                        ></TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                        <TableBodyListItemDiv
                          flexValue={1}
                        ></TableBodyListItemDiv>
                      </TableBodyListDiv>
                    </TableBodyDiv>
                  </ListTableDiv>
                </BLDetailTableDiv>
              </BLDetaiTableslDiv>
            </BLListDetailDiv>
          )}
        </BLResultDiv>
      </PageContent>
    </PageDiv>
  );
};
export default Finder;
