import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      main: string;
    };
    colors: {
      point: string;
      subPoint: string;
      subGray: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      dark: string;
      white: string;
    };
    breakpoints: {
      sm: string;
      md: string;
    };
    alt: {
      backgroud1: string;
      backgroud2: string;
      backgroud3: string;
      backgroud4: string;
      backgroud5: string;
      backgroud6: string;
      backgroud7: string;
      text1: string;
      text2: string;
      text3: string;
      text4: string;
      text5: string;
    };
  }
}
