import styled from "styled-components";

export const Section = styled.div`
  height: 1334px;
  overflow: hidden;
  transition: ease all 0.5s;
  padding: 110px 0 0;
  background-color: ${(props) => props.theme.alt.backgroud1};
  @media screen and (max-width: 1550px) {
    height: 1700px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1640px;
  }
  @media screen and (max-width: 980px) {
    height: 1540px;
  }
  @media screen and (max-width: 850px) {
    height: 1300px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 60px;
    height: 1200px;
  }
`;

export const Img1 = styled.div`
  width: 430px;
  height: 346px;
  margin-right: 50px;
  background-image: url("/mainpage/mainpagesection5-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1100px) {
    width: 320px;
    height: 220px;
    margin-top: 60px;
  }
  @media screen and (max-width: 980px) {
    margin: 0;
    border-radius: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 270px;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  height: 346px;
  border-radius: 20px;
  background-color: #000;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 980px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    position: relative;
  }
`;

export const GrayBox = styled.div`
  width: 47%;
  height: 308px;
  border-radius: 20px;
  margin-right: 2%;
  background-color: ${(props) => props.theme.colors.gray2};
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 1550px) {
    width: 78%;
    margin-right: 0;
  }
  @media screen and (max-width: 980px) {
    display: none;
  }
`;
export const GrayBox2 = styled.div`
  width: 51%;
  height: 308px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.gray2};
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  @media screen and (max-width: 1550px) {
    width: 78%;
  }
  @media screen and (max-width: 980px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 460px;
    margin-right: 0px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 600px;
    position: relative;
  }
`;

export const Text = styled.div`
  font-size: 33px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 30px;
  margin-left: 34px;
  @media screen and (max-width: 980px) {
    margin: 0 0 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const RowFlex = styled.div`
  display: flex;
  margin-top: 28px;
  @media screen and (max-width: 1550px) {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
`;

export const Img2 = styled.div`
  width: 315px;
  height: 309px;
  margin-left: 20px;
  background-image: url("/mainpage/mainpagesection5-2.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Img3 = styled.div`
  width: 315px;
  height: 309px;
  margin-right: 20px;
  background-image: url("/mainpage/mainpagesection5-3.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 980px) {
    margin: 0;
    border-radius: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 280px;
    margin-bottom: 12px;
  }
`;

export const Text2 = styled.div`
  font-size: 33px;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.white};
  margin-top: 30px;
  padding-right: 90px;
`;

export const Text3 = styled.div`
  font-size: 33px;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.white};
  margin: 30px 0 30px 30px;
  text-align: end;
  @media screen and (max-width: 980px) {
    margin: 0;
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    margin-top: 12px;
  }
`;
