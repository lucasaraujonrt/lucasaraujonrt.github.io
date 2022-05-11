import styled from "styled-components";

interface IProps {
  size: "small" | "large" | "medium" | "title";
  color?: string;
  font: "bold" | "medium" | "regular";
  textAlign?: string;
  cursor?: boolean;
}

const getCurrentFont = (font: string) => {
  switch (font) {
    case "bold":
      return "JetBrains Mono";
    case "medium":
      return "JetBrains Mono Medium";
    case "regular":
      return "JetBrains Mono";
    default:
      break;
  }
};

const getCurrentSize = (size: string) => {
  switch (size) {
    case "small":
      return "0.938rem";
    case "large":
      return "2.188rem";
    case "medium":
      return "1.563rem";
    case "title":
      return "2.813rem";
    default:
      break;
  }
};

export const Text = styled.label`
  font-family: ${({ font }) => getCurrentFont(font)};
  color: ${({ color }: IProps) => color};
  font-size: ${({ size }) => getCurrentSize(size)};
  font-size: ${({ size }) => getCurrentSize(size)};
  text-align: ${({ textAlign }: IProps) => textAlign};
  cursor: ${({ cursor }: IProps) => cursor && 'pointer'};
`;
