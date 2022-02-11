import styled from "styled-components";
import { HeadLine2 } from "../../common/typography";

export const Section = styled.div`
  position: relative;
  height: 1850px;
  transition: ease all 0.5s;
  overflow: hidden;
  background-color: ${(props) => props.theme.alt.backgroud1};
  @media screen and (max-width: 1800px) {
    height: 1680px;
  }
  @media screen and (max-width: 1540px) {
    height: 1410px;
  }
  @media screen and (max-width: 1280px) {
    height: 1340px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1100px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 1000px;
  }
`;

export const MainImgBox = styled.div`
  height: 1600px;
  width: 1400px;
  border-radius: 50%;
  background-image: url("/mainpagecow.jpg");
  background-repeat: no-repeat;
  background-position: 50% 16%;
  background-size: cover;
  position: absolute;
  transform: translate(-446px, -200px);
  transition: ease all 0.5s;

  @media screen and (max-width: 1800px) {
    height: 1400px;
    width: 1200px;
    background-position: 49% 16%;
  }
  @media screen and (max-width: 1540px) {
    height: 1200px;
    width: 1000px;
    background-size: 160%;
    background-position: 40% 56%;
  }
  @media screen and (max-width: 1280px) {
    width: 900px;
    background-size: 150%;
    background-position: 30% 56%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const MainText = styled(HeadLine2)`
  @media screen and (max-width: 1280px) {
    font-size: 48px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const MainTextSmall = styled.h2`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.45;
    color: ${(props) => props.theme.colors.white};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 220px;
  }
`;

export const Container = styled.div`
  width: 82%;
  margin: 0 auto;
  padding-top: 320px;
  padding-right: 8vw;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1540px) {
    padding-top: 260px;
  }
  @media screen and (max-width: 1280px) {
    padding-right: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 46%;
    padding-top: 200px;
    justify-content: center;
    background-color: ${(props) => props.theme.alt.backgroud2};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 120px;
    height: 40%;
  }
`;

export const Box = styled.div`
  position: relative;
`;
