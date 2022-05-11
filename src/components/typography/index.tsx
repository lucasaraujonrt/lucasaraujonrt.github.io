import React from "react";

import { Text } from "./styles";

interface ITypographyProps {
  size: "small" | "large" | "medium" | "title";
  font: "bold" | "medium" | "regular";
  color: string;
  children: string | React.ReactNode;
  textAlign?: string;
  cursor?: boolean;
}

const Typography = (props: ITypographyProps) => (
  <Text {...props}>{props.children}</Text>
);

export default Typography;
