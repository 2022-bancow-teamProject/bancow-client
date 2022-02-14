import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    cursor: default;
    position:relative;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
    line-height: 1.5;
    vertical-align: top;
    letter-spacing: -0.5%;
  }
  button {
    font-family: ${(props) => props.theme.fonts.main};
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li{
    list-style: none;
  }

  .swiper{
    width:100%;
    height:600px;
    // background:pink;
    padding:0 30px;
    @media ${(props) => props.theme.breakpoints.md} {
      // margin-top:-40px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      height:460px;
      margin-top:-40px;
      // padding:0 50px;
    }
    @media screen and (max-width:350px){
      padding:0 10px; 
      margin-top:-40px;
    }
  }
  .swiper-slide{
    background:#fff;
    max-width:300px;
    height:62%;
    border-radius:30px;
    margin-top:80px;
    box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.md} {
      // max-width:200px;
      min-width:250px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      // max-width:280px;
      min-width:220px;
      font-size: 200px;
      height:70%;
    }
    @media screen and (max-width:350px){
      min-width:180px;
    }
  }
  select{
    appearance: none;
    -webkit-appearance: none; /* 사파리, 크롬 하위버전용 */
    -moz-appearance: none; /* 사파리, 크롬 하위버전용 */
  }
  select::-ms-expand{ display: none; } /* 익스플로러용 */

`;
