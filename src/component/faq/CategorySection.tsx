import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 0;
    padding: 24px 0;
  }
`;

export const CategoryUl = styled.ul`
  display: block;
`;

export const CategoryBtn = styled.li`
  display: inline-block;
  padding: 10px;
  margin-right: 16px;
  border: 0.5px solid ${(props) => props.theme.colors.gray1};
  border-radius: 6px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.gray1};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &.active {
    border: 0.5px solid ${(props) => props.theme.colors.subPoint};
    color: ${(props) => props.theme.colors.subPoint};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const CategoryDrop = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    height: 48px;
    padding: 0 16px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    align-items: center;
  }
`;
interface showProps {
  show: boolean;
}

export const OptionUl = styled.ul<showProps>`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  display: inline-block;
  position: absolute;
  top: 26.5%;
  left: 10%;
  right: 10%;
  padding: 16px 0px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  max-height: 320px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 2;
  overflow-y: scroll;
`;

export const OptionLi = styled.li`
  color: ${(props) => props.theme.colors.gray1};
  height: 40px;
  line-height: 40px;
  padding: 0px 16px;

  &.active {
    background-color: rgb(232, 243, 255);
    color: ${(props) => props.theme.colors.subPoint};
  }
`;

export const RiArrowDropDownLineStyle = styled(RiArrowDropDownLine)`
  width: 24px;
  height: 24px;
`;

// TODO: 백오피스에서 faq crud 관리(api 호출)

const Category = () => {
  // 카테고리 버튼 데이터를 임의로 넣어서 렌더링
  const CATEGORYDATA = [
    "전체",
    "구매하기",
    "사육중",
    "출하 및 경매",
    "회원 관련"
  ];

  const [showCategory, setShowCategory] = useState(false);
  const [selectCategory, setSelectCategory] = useState<string>("전체");

  const optionClick = () => {
    // category에 맞는 질문 렌더링, style 적용
  };
  
  return (
    <>
      <Wrapper>
        <CategoryUl>
          {CATEGORYDATA.map((cate, i) => (
            <CategoryBtn
              className={` ${selectCategory === cate ? "active" : ""}`}
              key={i}
              onClick={() => {
                setSelectCategory(cate);
              }}
            >
              {cate}
            </CategoryBtn>
          ))}
          <CategoryDrop
            onClick={() => {
              setShowCategory(!showCategory);
            }}
          >
            <span>전체</span>
            <OptionUl show={showCategory}>
              {CATEGORYDATA.map((cate, i) => (
                <OptionLi
                  className={`${selectCategory === cate ? "active" : ""}`}
                  key={i}
                  onClick={() => {
                    setSelectCategory(cate);
                  }}
                >
                  {cate}
                </OptionLi>
              ))}
            </OptionUl>
            <RiArrowDropDownLineStyle />
          </CategoryDrop>
        </CategoryUl>
      </Wrapper>
    </>
  );
};

export default Category;

