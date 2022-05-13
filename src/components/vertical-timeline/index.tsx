import React from "react";
import {
  VerticalTimelineElement,
  VerticalTimeline as Container,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ITimelineEvent } from "../../utils/me";
import Typography from "../typography";

interface IVerticalTimelineProps {
  data: ITimelineEvent[];
}

const VerticalTimeline = ({ data }: IVerticalTimelineProps) => {
  return (
    <>
      <Container>
        {data.map((item) => (
          <VerticalTimelineElement {...item}>
            <div className={item.classNameTitle}>
              <Typography color="white" font="bold" size="medium">
                {item.carrier.title}
              </Typography>
            </div>
            <Typography color="white" font="medium" size="small">
              {item.carrier.description ?? (
                <ul>
                  {item.carrier.timeline?.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              )}
            </Typography>
          </VerticalTimelineElement>
        ))}
      </Container>
    </>
  );
};

export default VerticalTimeline;
