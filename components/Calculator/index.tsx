import type { NextPage } from 'next'
import { useMemo, useState } from 'react';
import styled from 'styled-components';


const CalculateDiv = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 500px;
  padding: 20px;
`;

const CalculateTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

const CalculateInputDiv = styled.div`
  border: 1px solid #929aa7;
  margin: 0 30px 0 30px;
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #fff;
  @media (max-width: 768px) {
    margin: 0 10px 0 10px;
    // width: 100%;
  }
`;

const CalculateInput = styled.input`
  width: 100%;
  border: none;
  font-size: 20px;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

const AddButton = styled.button`
  // background-color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 0 20px;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin: 0 10px 0 10px;
    // width: 100%;
  }
`;

const NumberListUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style:none;
`;  

const NumberListLi = styled.li`
  span {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 0 20px;
  }
`;  

const CalculateAvgDiv = styled.div`
  display: flex;
  justify-content: space-between;
  list-style:none;
  margin: 0 30px 0 30px;
  padding: 0 10px 0 10px;
`;

const ResetButton = styled.button`
  // background-color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 0 20px;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin: 0 10px 0 10px;
    // width: 100%;
  }
`;

const getAverage = (numbers: number[]) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0)
  return sum / numbers.length
}

const Calculate = () => {

  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState(0);

  const onInsert = () => {
    if (!number) return;
    const newList = [...list, number];
    setList(newList);
    setNumber(0);
  }
  const onReset = () => {
    if (list.length === 0) return;
    setList([]);
    setNumber(0);
  }

  const avg = useMemo (() => getAverage(list), [list]);

  return (
    <>
    <CalculateDiv>
      <CalculateTitle>계산기</CalculateTitle>
      <CalculateInputDiv>
        <CalculateInput value={number} onChange={(e) => setNumber(+e.target.value)} type={'number'}/>
        <AddButton onClick={onInsert}>추가</AddButton>
      </CalculateInputDiv>
      <NumberListUl>
        {list.map((value, idx) => (
          <NumberListLi key={idx}><span>{idx + 1}.</span> {value}</NumberListLi>))}
      </NumberListUl>
      <CalculateAvgDiv>
        <b>평균값: </b> {avg}
        <ResetButton onClick={onReset}>초기화하기</ResetButton>
      </CalculateAvgDiv>
    </CalculateDiv>
    </>

  )
}

export default Calculate
