import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import BancowTypoLogo from '../gnbitem/BancowTypoLogo';
import MobileMenu from '../gnbitem/MobileMenu';
import { RowSpaceBetween } from '../layouts';
import NavMenuArea from '../gnbitem/NavMenuArea';
import styled from 'styled-components';

const GNB = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavBox>
			<Nav as="nav">
				<Link href="/">
					<a>
						<BancowTypoLogo />
					</a>
				</Link>
				<NavMenuArea setIsOpen={setIsOpen} />
=======
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
>>>>>>> 5fcd34c8e3bf5ae3456bb683aeef51311c5476f3
			</Nav>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</NavBox>
	);
};

<<<<<<< HEAD
const NavBox = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud5};
	@media ${(props) => props.theme.breakpoints.md} {
		background-color: ${(props) => props.theme.alt.backgroud2};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		background-color: ${(props) => props.theme.colors.point};
	}
`;

const Nav = styled(RowSpaceBetween)`
	width: 82%;
	height: 68px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 90%;
		height: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 88%;
	}
`;

=======
>>>>>>> 5fcd34c8e3bf5ae3456bb683aeef51311c5476f3
export default GNB;
