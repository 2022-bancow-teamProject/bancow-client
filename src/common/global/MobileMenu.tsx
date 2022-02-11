import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Link from 'next/link';
import { Menu, MenuModal, CloseBox, Item } from './mobileMenuStyle';

interface ModalProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);
	return (
		<MenuModal className={`${isOpen && 'active'}`}>
			<Menu>
				<CloseBox onClick={() => setIsOpen(false)} />
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
