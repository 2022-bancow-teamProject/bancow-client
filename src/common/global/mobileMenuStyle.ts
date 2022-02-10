import styled from 'styled-components';
import { GoX } from 'react-icons/go';

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

export const Item = styled.h5`
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
	right: 20%;
	top: 10%;
`;
