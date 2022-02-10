import styled from 'styled-components';
import { HeadLine6 } from '../typography';

export const NavBox = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud5};
	@media ${(props) => props.theme.breakpoints.md} {
		background-color: ${(props) => props.theme.alt.backgroud2};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		background-color: ${(props) => props.theme.colors.point};
	}
`;

export const Nav = styled.nav`
	width: 82%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	height: 68px;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 90%;
		height: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 88%;
	}
`;

export const MenuArea = styled.div`
	display: flex;
	gap: 34px;
	div {
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		gap: 14px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		gap: 8px;
		a {
			display: none;
		}
		div {
			display: block;
		}
	}
`;

export const LinkTab = styled(HeadLine6)`
	font-size: 20px;
	color: ${(props) => props.theme.alt.text1};
	a.active & {
		color: ${(props) => props.theme.alt.text5};
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
		color: ${(props) => props.theme.colors.white};
		a.active & {
			color: ${(props) => props.theme.colors.gray4};
		}
	}
`;
