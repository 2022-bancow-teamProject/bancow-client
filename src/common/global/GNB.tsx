import React, { useState } from 'react';
import Link from 'next/link';
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
			</Nav>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</NavBox>
	);
};

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

export default GNB;
