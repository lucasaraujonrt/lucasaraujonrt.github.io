import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "../../components";
//@ts-ignore
import Icon from "react-eva-icons";
import * as S from "./styles";
import { timeline } from "../../utils/me";

const Timeline: React.FC = () => {
  return (
    <S.Container>
      <S.WrapperTitle>
        <Typography color="white" font="medium" size="title">
          Timeline
        </Typography>
      </S.WrapperTitle>
      <S.WrapperTimeLine>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#482b7b",
              borderBottomColor: "#482b7b",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #482b7b" }}
            date="Jun 2020 - Dec 2020 at MB Labs"
            iconStyle={{
              background: "#482b7b",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<Icon name="code-outline" fill="white" />}
          >
            <div className="vertical-timeline-element-title">
              <Typography color="white" font="bold" size="medium">
                Front End Internship
              </Typography>
            </div>
            <Typography color="white" font="medium" size="small">
              Development with ReactJS and React-Native
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#482b7b", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #482b7b" }}
            date="Dec 2020 - Jan 2021 at MB Labs"
            position="left"
            iconStyle={{
              background: "#482b7b",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<Icon name="code-outline" fill="white" />}
          >
            <div className="vertical-timeline-element-title">
              <Typography color="white" font="bold" size="medium">
                React Native Developer
              </Typography>
            </div>
            <Typography color="white" font="medium" size="small">
              <ul>
                {timeline.second.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#482b7b", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #482b7b" }}
            date="Nov 2021 - Jan 2022 at MB Labs"
            position="left"
            iconStyle={{
              background: "#482b7b",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<Icon name="code-outline" fill="white" />}
          >
            <div className="vertical-timeline-element-title">
              <Typography color="white" font="bold" size="medium">
                Mid Level Developer
              </Typography>
            </div>
            <Typography color="white" font="medium" size="small">
              <ul>
                {timeline.second.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#d20c30", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #d20c30" }}
            date="Jan 2022 - Present at CI&T"
            position="right"
            iconStyle={{
              background: "#d20c30",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<Icon name="code-outline" fill="white" />}
          >
            <div className="vertical-timeline-element-title">
              <Typography color="white" font="bold" size="medium">
                Mid Level Developer
              </Typography>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </S.WrapperTimeLine>
    </S.Container>
  );
};

export default Timeline;
