import styled from "styled-components";
import { BackgroundImage, HorizontalCenterBox } from "./components/common";

export const Section = styled.div`
  height: 1110px;
  transition: ease all 0.5s;
  padding: 40px 0 60px;
  background-color: ${(props) => props.theme.alt.backgroud1};
  position: relative;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1090px;
  }
  @media screen and (max-width: 850px) {
    height: 960px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 820px;
  }
`;

export const RowItem = styled(HorizontalCenterBox)`
  height: 516px;
  margin-top: 80px;
`;

export const ImgBox = styled.div`
  width: 378px;
  height: 516px;
  border-radius: 20px;
  margin-right: 30px;
  background-color: ${(props) => props.theme.colors.gray1};
  @media screen and (max-width: 1420px) {
    display: none;
  }
`;
export const Img = styled(BackgroundImage)`
  width: 325px;
  height: 516px;
  margin: 0 auto;
  background-image: url("/mainpage/mainpagesection4-1.png");
  position: relative;
`;

export const Img2 = styled(BackgroundImage)`
  width: 336px;
  height: 516px;
  margin-left: 60px;
  background-image: url("/mainpage/mainpagesection4-2.png");
  position: relative;
  @media screen and (max-width: 980px) {
    margin: 50px auto;
    border-radius: 20px;
    background-size: 116%;
    background-position-y: 18%;
    background-position-x: 24%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 300px;
    background-size: 144%;
    background-position-y: 19%;
    margin-bottom: 40px;
  }
`;

export const TextBox = styled.div`
  width: 880px;
  height: 516px;
  border-radius: 20px;
  margin-right: 30px;
  background-color: #000;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    height: 540px;
    margin-right: 0px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    position: absolute;
  }
`;

export const Text = styled.div`
  font-size: 33px;
  color: ${(props) => props.theme.colors.white};
  margin-left: 46px;
  margin-bottom: 60px;
  @media screen and (max-width: 980px) {
    margin-left: 0px;
    margin-bottom: 40px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;
