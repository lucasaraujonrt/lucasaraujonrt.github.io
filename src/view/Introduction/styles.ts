import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 20px;
    padding: 10px 7.5px 30px;
  }
`;

export const WrapperMe = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media all and (max-width: 1100px) {
    width: 60%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperAnimation = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media all and (max-width: 550px) {
    width: 50%;
  }
`;

export const IndicatorToScroll = styled.div`
  height: 50vh;
  position: relative;
  width: 100%;

  @keyframes bounce {
    50% {
      transform: translateY(-50%);
    }
  }

  ::before {
    animation: bounce 1s ease infinite;
    animation-delay: 2s;
    bottom: 2rem;
    color: #fff;
    content: "╲╱";
    font-size: 1.5rem;
    height: 4rem;
    left: 50%;
    letter-spacing: -1px;
    line-height: 4rem;
    margin-left: -3rem;
    opacity: 0.8;
    position: absolute;
    text-align: center;
    width: 6rem;
  }
`;
