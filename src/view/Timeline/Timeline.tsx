import React from "react";
import { Typography, TimelineComponent } from "../../components";
//@ts-ignore
import * as S from "./styles";
import { timelineEvent } from "../../utils/me";

const Timeline: React.FC = () => {
  return (
    <S.Container>
      <S.WrapperTitle>
        <Typography color="white" font="medium" size="title">
          Timeline
        </Typography>
      </S.WrapperTitle>
      <S.WrapperTimeLine>
        <TimelineComponent data={timelineEvent} />
      </S.WrapperTimeLine>
    </S.Container>
  );
};

export default Timeline;
