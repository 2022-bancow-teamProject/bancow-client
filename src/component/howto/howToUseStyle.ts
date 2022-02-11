import styled from "styled-components";
import { HeadLine2 } from "../../common/typography";

export const Section = styled.div`
  padding: 120px 0 0;
  background-color: ${(props) => props.theme.alt.backgroud1};
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 80px 0 0;
  }
`;

export const Title = styled(HeadLine2)`
  text-align: center;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 42px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
  }
`;

export const Img1 = styled.div`
  width: 1000px;
  height: 723px;
  margin: 160px auto 0;
  background-image: url("/howtopage/howto1.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 100px;
    width: 630px;
    height: 455px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 60px;
    width: 370px;
    height: 267.5px;
  }
`;

export const Img2 = styled.div`
  width: 392px;
  height: 781px;
  background-image: url("/howtopage/howto2.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1230px) {
    width: 250px;
    height: 498px;
  }
  @media screen and (max-width: 710px) {
    display: none;
  }
`;

export const Img3 = styled.div`
  width: 392px;
  height: 643px;
  background-image: url("/howtopage/howto3.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1230px) {
    width: 250px;
    height: 410px;
  }
  @media screen and (max-width: 710px) {
    display: none;
  }
`;

export const Img4 = styled.div`
  width: 420px;
  height: 610px;
  background-image: url("/howtopage/howto4.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1230px) {
    width: 300px;
    height: 436px;
  }
  @media screen and (max-width: 710px) {
    display: none;
  }
`;

export const Img5 = styled.div`
  width: 400px;
  height: 690px;
  background-image: url("/howtopage/howto5.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1230px) {
    width: 290px;
    height: 500px;
  }
  @media screen and (max-width: 710px) {
    display: none;
  }
`;

export const Img6 = styled.div`
  width: 392px;
  height: 802px;
  background-image: url("/howtopage/howto6.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1230px) {
    width: 300px;
    height: 614px;
  }
  @media screen and (max-width: 710px) {
    display: none;
  }
`;
