import styled from "styled-components";
import Image from "next/image";

export const ListTableDiv = () => {

  const ListTableDiv = styled.div`
    border: 1px solid #eaeaea;
  `;

  const ListDetailButton = styled.button`

  `;

  return (
    <ListTableDiv>
      {/* <ListDetailButton onClick={()=>setActiveDetaillDiv(true)}>상세 조회</ListDetailButton> */}
    </ListTableDiv>
  );
};
