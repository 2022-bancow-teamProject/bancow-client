import { DefaultTheme } from "styled-components";

export const themeDefault: DefaultTheme = {
  fonts: {
    main: "Noto Sans KR, sans-serif"
  },
  colors: {
    point: "#0048FA",
    subPoint: "#6B96FF",
    subGray: "#E8E8E8",
    gray1: "#7A7A81",
    gray2: "#AAAAB1",
    gray3: "#B9B9C1",
    gray4: "#D5D5DB",
    dark: "#353639",
    white: "#FFFFFF"
  },
  breakpoints: {
    sm: "screen and (max-width: 576px)", // mobile
    md: "screen and (max-width: 1024px)" // ipad pro
  },
  alt: {
    backgroud1: "#FFFFFF", // 흰 배경 => darkmode기본 배경색
    backgroud2: "#0048FA", // point(파랑) 배경 => darkmode기본 배경색
    backgroud3: "#F9FAFB", // sub gray 2(완전 연한 회색 거의 흰색) => 완전black 배경
    backgroud4: "#FFFFFF", // 흰 배경 => subgray
    backgroud5: "#FFFFFF", // 흰 배경 => point(파랑)
    backgroud6: "#E8E8E8", // 연회색 배경 => 검정색 배경
    backgroud7: "#E8E8E8", // 연회색 배경 => darkmode기본 배경색
    text1: "#000000", // 검정 글씨 => 흰 글씨
    text2: "#4B5360", // 회색 글씨 => 흰 글씨
    text3: "#000000", // 검정글씨 => darkmode기본색
    text4: "#0048FA", // point(파랑) => 흰 글씨
    text5: "#0048FA" // point(파랑) => gray4
  }
};

export const darkTheme: DefaultTheme = {
  fonts: {
    main: "Noto Sans KR, sans-serif"
  },
  colors: {
    point: "#0048FA",
    subPoint: "#6B96FF",
    subGray: "#E8E8E8",
    gray1: "#7A7A81",
    gray2: "#AAAAB1",
    gray3: "#B9B9C1",
    gray4: "#D5D5DB",
    dark: "#353639",
    white: "#FFFFFF"
  },
  breakpoints: {
    sm: "screen and (max-width: 576px)", // mobile
    md: "screen and (max-width: 1024px)" // ipad pro
  },
  alt: {
    backgroud1: "#353639",
    backgroud2: "#353639",
    backgroud3: "#000000",
    backgroud4: "#E8E8E8",
    backgroud5: "#0048FA",
    backgroud6: "#000000",
    backgroud7: "#353639",
    text1: "#FFFFFF",
    text2: "#FFFFFF",
    text3: "#353639",
    text4: "#FFFFFF",
    text5: "#D5D5DB"
  }
};
