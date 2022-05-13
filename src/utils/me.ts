export const icons = [
  {
    name: "github",
    fill: "black",
    size: "xlarge",
    animation: {
      type: "pulse",
      hover: true, // default true
    },
    currentLink: "https://github.com/lucasaraujonrt",
  },
  {
    name: "linkedin",
    fill: "black",
    size: "xlarge",
    animation: {
      type: "pulse",
      hover: true, // default true
    },
    currentLink: "https://www.linkedin.com/in/lucasaraujonrt/",
  },
  {
    name: "email",
    fill: "black",
    size: "xlarge",
    animation: {
      type: "pulse",
      hover: true, // default true
    },
    currentLink: "mailto:lucasaraujo8186@gmail.com",
  },
  {
    name: "npm",
    fill: "black",
    size: "xlarge",
    animation: {
      type: "pulse",
      hover: true, // default true
    },
    currentLink: "https://www.npmjs.com/~lucasaraujonrt",
  },
];

interface ITimeline {
  [key: string]: string[];
}

export const timeline: ITimeline = {
  second: [
    "Intern Mentor",
    "Speaker on technology",
    "Release applications to the Apple and Google Play stores.",
    "Use of agile methodologies and tools like Jira, Bitbucket and Trello",
  ],
};

export interface ITimelineEvent {
  className: string;
  contentStyle: {
    background: string;
    color: string;
  };
  iconStyle: {
    background: string;
    color: string;
  };
  contentArrowStyle: {
    borderRight: string;
  };
  date: string;
  classNameTitle: string;
  carrier: {
    title: string;
    description?: string;
    timeline?: string[];
  };
  position: string;
}

export const timelineEvent: ITimelineEvent[] = [
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: "#482b7b",
      color: "#fff",
    },
    iconStyle: {
      background: "#482b7b",
      color: "#fff",
    },
    contentArrowStyle: {
      borderRight: "7px solid #482b7b",
    },
    date: "Jun 2020 - Dec 2020 at MB Labs",
    classNameTitle: "vertical-timeline-element-title",
    carrier: {
      title: "Front End Internship",
      description: "Development with ReactJS and React-Native",
    },
    position: "left",
  },
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: "#482b7b",
      color: "#fff",
    },
    iconStyle: {
      background: "#482b7b",
      color: "#fff",
    },
    contentArrowStyle: {
      borderRight: "7px solid #482b7b",
    },
    date: "Dec 2020 - Jan 2021 at MB Labs",
    classNameTitle: "vertical-timeline-element-title",
    carrier: {
      title: "React Native Developer",
      description: "",
      timeline: timeline.second,
    },
    position: "left",
  },
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: "#482b7b",
      color: "#fff",
    },
    iconStyle: {
      background: "#482b7b",
      color: "#fff",
    },
    contentArrowStyle: {
      borderRight: "7px solid #482b7b",
    },
    date: "Nov 2021 - Jan 2022 at MB Labs",
    classNameTitle: "vertical-timeline-element-title",
    carrier: {
      title: "Mid Level Developer",
      description: "wip",
    },
    position: "left",
  },
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: "#d20c30",
      color: "#fff",
    },
    iconStyle: {
      background: "#d20c30",
      color: "#fff",
    },
    contentArrowStyle: {
      borderRight: "7px solid #d20c30",
    },
    date: "Jan 2022 - Present at CI&T",
    classNameTitle: "vertical-timeline-element-title",
    carrier: {
      title: "Mid Level Developer",
      description: "wip",
    },
    position: "right",
  },
];
