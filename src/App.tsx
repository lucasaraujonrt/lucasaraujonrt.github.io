import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Introduction from "./view/Introduction/Introduction";
import AboutMe from "./view/AboutMe/AboutMe";
import Timeline from "./view/Timeline/Timeline";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
  }

  a:visited {
    color: transparent;
  }
`;

const SectionWipesStyled = styled.div`
  overflow: hidden;

  .panel {
    height: 100vh;
    width: 100vw;
  }
`;

const App = () => {
  return (
    <>
      {/* <SectionWipesStyled> */}
      {/* <Controller globalSceneOptions={{ triggerHook: "onLeave" }}> */}
      <GlobalStyle />
      {/* <Scene pin> */}
      <div className="panel">
        <Introduction />
      </div>
      {/* </Scene> */}
      {/* <Scene pin> */}
      <div className="panel">
        <AboutMe />
      </div>
      {/* </Scene> */}
      {/* <Scene pin> */}
      {/* <div className="panel"> */}
      <Timeline />
      {/* </div> */}
      {/* </Scene> */}
      {/* </Controller> */}
      {/* </SectionWipesStyled> */}
    </>
  );
};

export default App;
