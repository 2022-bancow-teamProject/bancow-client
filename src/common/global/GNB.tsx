import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import ModeToggle from '../ModeToggle';
import MobileMenu from './MobileMenu';
import { NavBox, Nav, MenuArea, LinkTab } from './gnbStyle';

const GNB = () => {
	const { pathname } = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<NavBox>
			<Nav>
				<Link href="/">
					<a>
						<Logo />
					</a>
				</Link>
				<MenuArea>
					<Link href="/story">
						<a className={pathname === '/story' ? 'active' : ''}>
							<LinkTab>뱅카우정보</LinkTab>
						</a>
					</Link>
					<Link href="/howto">
						<a className={pathname === '/howto' ? 'active' : ''}>
							<LinkTab>이용방법</LinkTab>
						</a>
					</Link>
					<Link href="/notice">
						<a className={pathname === '/notice' ? 'active' : ''}>
							<LinkTab>공지</LinkTab>
						</a>
					</Link>
					<Link href="/event">
						<a className={pathname.includes('/event') ? 'active' : ''}>
							<LinkTab>이벤트</LinkTab>
						</a>
					</Link>
					<Link href="/faq">
						<a className={pathname === '/faq' ? 'active' : ''}>
							<LinkTab>FAQ</LinkTab>
						</a>
					</Link>
					<Link href="/farmer">
						<a className={pathname === '/farmer' ? 'active' : ''}>
							<LinkTab>입점문의</LinkTab>
						</a>
					</Link>
					<ModeToggle />
					<div>
						<GiHamburgerMenu
							onClick={() => setIsOpen(true)}
							style={{
								color: 'white',
								fontSize: '28px',
								marginTop: '2px'
							}}
						/>
					</div>
				</MenuArea>
			</Nav>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</NavBox>
	);
};

export default GNB;
