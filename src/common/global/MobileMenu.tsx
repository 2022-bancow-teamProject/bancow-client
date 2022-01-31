import React, { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { HeadLine5 } from "../typography";
import { GoX } from "react-icons/go";
import Link from "next/link";

export const MenuModal = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    position: fixed;
    overflow: hidden;
    height: 0px;
    &.active {
      transition: ease all 0.5s;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.94);
    }
  }
`;

export const Menu = styled.div`
  position: relative;
  padding: 80px;
`;

export const Item = styled(HeadLine5)`
  font-size: 23px;
  color: #fff;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const CloseBox = styled(GoX)`
  position: absolute;
  font-size: 26px;
  color: #fff;
  transform: translate(210px, -20px);
`;

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <MenuModal className={`${isOpen && "active"}`}>
      <Menu>
        <CloseBox onClick={() => setIsOpen(false)}>
          <GoX />
        </CloseBox>
        <Link href="/">
          <a>
            <Item onClick={() => setIsOpen(false)}>홈페이지</Item>
          </a>
        </Link>
        <Link href="/story">
          <a>
            <Item onClick={() => setIsOpen(false)}>뱅카우정보</Item>
          </a>
        </Link>
        <Link href="/howto">
          <a>
            <Item onClick={() => setIsOpen(false)}>이용방법</Item>
          </a>
        </Link>
        <Link href="/notice">
          <a>
            <Item onClick={() => setIsOpen(false)}>공지</Item>
          </a>
        </Link>
        <Link href="/event">
          <a>
            <Item onClick={() => setIsOpen(false)}>이벤트</Item>
          </a>
        </Link>
        <Link href="/faq">
          <a>
            <Item onClick={() => setIsOpen(false)}>FAQ</Item>
          </a>
        </Link>
        <Link href="/farmer">
          <a>
            <Item onClick={() => setIsOpen(false)}>입점문의</Item>
          </a>
        </Link>
      </Menu>
    </MenuModal>
  );
};

export default MobileMenu;
