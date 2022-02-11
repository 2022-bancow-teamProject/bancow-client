import styled from "styled-components";
import { HeadLine3, HeadLine4 } from "../../common/typography";
import { HorizontalCenterBox, BackgroundImage } from "./components/common";

export const Section = styled.div`
  height: 1520px;
  transition: ease all 0.5s;
  padding: 80px 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.alt.backgroud1};
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1540px;
  }
`;

export const RowFlex = styled.div<{ mt?: number }>`
  display: flex;
  gap: 40px;
  margin-top: ${({ mt }) => (mt ? mt + "px" : 0 + "px")};
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: ${({ mt }) => (mt ? mt / 2 + "px" : 0 + "px")};
  }
`;

export const WhiteText = styled(HeadLine4)`
  padding-top: 50px;
  padding-left: 45px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 23px;
  }
`;

export const ExplainText2 = styled(HeadLine4)`
  position: absolute;
  left: 48px;
  bottom: 45px;
  color: #000;
  font-weight: 700;
  @media screen and (max-width: 1340px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1110px) {
    font-size: 26px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 22px;
  }
`;

export const ExplainText = styled(HeadLine3)`
  @media screen and (max-width: 1340px) {
    font-size: 38px;
  }
  @media screen and (max-width: 1220px) {
    font-size: 30px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

export const Img1 = styled(BackgroundImage)`
  width: 450px;
  height: 470px;
  background-image: url("/mainpage/mainpagesection3-1.png");
  border-radius: 20px;
  position: static;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    width: 300px;
    height: 272px;
  }
`;

export const TextBox = styled(HorizontalCenterBox)`
  flex-grow: 1;
  min-width: 370px;
  height: 470px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 200px;
    margin-top: 10px;
  }
`;

export const TextBox2 = styled.div`
  width: 416px;
  height: 471px;
  background-color: #000;
  border-radius: 20px;
  position: relative;
  @media screen and (max-width: 870px) {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const Img2 = styled(BackgroundImage)`
  width: 200px;
  height: 167px;
  background-image: url("/mainpage/mainpagesection3-2.png");
  right: 40px;
  bottom: 60px;
`;

export const TextBox3 = styled.div`
  flex-grow: 1;
  height: 471px;
  max-width: 800px;
  min-width: 370px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 171px;
    margin-left: 0px;
    margin-top: 20px;
  }
`;

export const Img3 = styled(BackgroundImage)`
  width: 384px;
  height: 260px;
  background-image: url("/mainpage/mainpagesection3-3.png");
  top: 0;
  left: 40%;
  @media screen and (max-width: 1340px) {
    width: 250px;
    height: 190px;
  }
  @media screen and (max-width: 1110px) {
    left: 20%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
