import styled from "styled-components";

export const Section = styled.div`
  height: 2044px;
  position: relative;
  overflow: hidden;
  transition: ease all 0.5s;
  background-color: ${(props) => props.theme.alt.backgroud1};
  padding-top: 110px;
  @media screen and (max-width: 1350px) {
    height: 1860px;
  }
  @media screen and (max-width: 850px) {
    height: 1700px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 60px;
    height: 1250px;
  }
`;

export const Row = styled.div`
  width: 100%;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Img1 = styled.div`
  width: 553px;
  height: 696px;
  background-image: url("/mainpage/mainpagesection6-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  @media screen and (max-width: 1350px) {
    width: 492px;
    height: 620px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const Img2 = styled.div`
  width: 553px;
  height: 706px;
  background-image: url("/mainpage/mainpagesection6-2.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  margin-top: 64px;
  @media screen and (max-width: 1350px) {
    margin-top: 40px;
    width: 485px;
    height: 620px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const TextBox = styled.div`
  width: 552px;
  height: 1465px;
  margin-left: 60px;
  border-radius: 20px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1350px) {
    height: 1282px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0;
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 600px;
    height: 1000px;
    position: absolute;
  }
`;

export const Text = styled.div`
  font-size: 33px;
  color: ${(props) => props.theme.colors.white};
  margin: 80px auto 0;
  text-align: right;
  @media screen and (max-width: 1350px) {
    font-size: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    margin-top: 40px;
  }
`;

export const Img3 = styled.div`
  width: 411px;
  height: 835px;
  margin: 120px auto;
  background-image: url("/mainpage/mainpagesection6-3.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1350px) {
    width: 344px;
    height: 700px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 344px;
    height: 700px;
    margin: 40px auto;
  }
`;

export const Text2 = styled.div`
  font-size: 33px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 1350px) {
    font-size: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;
