import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export const WrapperTitleAboutMe = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: space-between;
`;

export const Information = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstCircle = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 500px;
  border: 0.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondCircle = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Me = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 500px;
`;

export const AllMyLinks = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const WrapperFirstSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0;
  width: 200px;
  justify-content: space-around;
`;

export const InformationMe = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
