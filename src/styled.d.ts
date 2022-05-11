// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      background: string;
      white: string;
      black: string;
    };
    sizes: {
      small: string;
      medium: string;
      large: string;
      title: string;
    };
    fonts: {
      regular: string;
      bold: string;
      medium: string;
    };
  }
}
