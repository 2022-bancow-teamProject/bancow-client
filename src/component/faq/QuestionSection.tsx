import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

export const Wrapper = styled.ul`
  margin: 0 auto;
  padding-top: 65px;
  max-width: 1024px;

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const QuestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  border-top: 1px solid ${(props) => props.theme.colors.gray3};
  padding: 0 24px;
  font-weight: normal;
  cursor: pointer;
`;

export const QuestionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  padding: 0 24px;
  cursor: pointer;
`;

interface showProps {
  show: boolean;
}

export const AnswerItem = styled.li<showProps>`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.subGray};
  padding: 32px;
  white-space: pre-wrap;
`;

export const MdKeyboardArrowDownStyle = styled(MdKeyboardArrowDown)`
  width: 24px;
  height: 24px;
`;

export const InquiryBtn = styled.button`
  display: block;
  width: 258px;
  height: 54px;
  margin: 0 auto;
  margin-top: 70px;
  border: 1px solid ${(props) => props.theme.colors.point};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 220px;
    height: 46px;
    margin-top: 30.4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 150px;
    height: 40px;
    margin-top: 15.6px;
  }
`;

const Question = () => {
  const [showQuestion, setShowQuestion] = useState(false);

  const questions = [
    {
      id: 1,
      faq_category: ["전체", "구매하기"],
      question: "Q. 구매 금액은 어떻게 지불하나요?",
      answer: "보유하고 계신 예치금에서 구매하신 지분 금액만큼 차감됩니다.",
      create_date: "2022-01-25",
      update_date: "2022-01-25"
    },
    {
      id: 2,
      faq_category: ["전체", "사육중"],
      question: "Q. 구매 금액은 어떻게 지불하나요?",
      answer: "보유하고 계신 예치금에서 구매하신 지분 금액만큼 차감됩니다.",
      create_date: "2022-01-26",
      update_date: "2022-01-26"
    },
    {
      id: 3,
      faq_category: ["전체", "출하 및 경매"],
      question: "Q. 구매 금액은 어떻게 지불하나요?",
      answer: "보유하고 계신 예치금에서 구매하신 지분 금액만큼 차감됩니다.",
      create_date: "2022-01-27",
      update_date: "2022-01-27"
    }
  ];

  return (
    <>
      <Wrapper>
        {questions.map((qs, i) => (
          <>
            <QuestionBox
              key={i}
              onClick={() => {
                setShowQuestion(!showQuestion);
              }}
            >
              {qs.question}
              <MdKeyboardArrowDownStyle />
            </QuestionBox>
            <AnswerItem key={i} show={showQuestion}>
              {qs.answer}
            </AnswerItem>
          </>
        ))}
      </Wrapper>
      <InquiryBtn>
        <Link href="/faq/question">
          <a style={{ color: "#0048FA" }}>1:1 문의하기</a>
        </Link>
      </InquiryBtn>
    </>
  );
};

export default Question;
