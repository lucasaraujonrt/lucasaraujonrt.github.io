import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  overflow-y: hidden;
`;

export const WrapperTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const WrapperTimeLine = styled.div`
  margin-top: 20px;
`;
