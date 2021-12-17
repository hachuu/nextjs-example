import { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';

const Finder: NextPage = () => {

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
  `

  const TabUl = styled.ul`
    width: 100%;
    padding: 0 50px;
  `;

  const TabLi = styled.li<{active: boolean}>`
    padding: 16px 10px;
    display: inline-block;
    width: 50%;
    border-radius: 6px 6px 0 0;
    border: 1px solid #929aa7;
    cursor: pointer;
    color: ${active=> active ? 'blue' : 'black'};
    span {
      &: hover {
        color: #929aa7;
      }
    }
  `;

  const PageContent = styled.div`
    border: 1px solid #929aa7;
  `;

  const [trackingYactive, setTrackingYactive] = useState(true);
  
  return (
    <PageDiv>
      <PageTab>
        {/* <></> */}
        <TabInput id="tab1" name="tab-control" type="radio"></TabInput>
        <TabInput id="tab2" name="tab-control" type="radio"></TabInput>
         <TabUl>
          <TabLi active={trackingYactive} onClick={()=>setTrackingYactive(true)}>
            <span>B/L로 조회</span>
          </TabLi>
          <TabLi active={!trackingYactive} onClick={()=>setTrackingYactive(false)}>
            <span>미추적상태 B/L 조회</span>
          </TabLi>
        </TabUl>
      </PageTab>
    {/* <PageContent></PageContent> */}

    </PageDiv>
  )
}
export default Finder;


       