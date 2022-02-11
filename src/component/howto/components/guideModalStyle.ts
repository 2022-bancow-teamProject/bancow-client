import styled from 'styled-components';
import { GoX } from 'react-icons/go';

export const Modal = styled.div`
	position: fixed;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.6);
`;

export const PlayerWrapper = styled.div`
	width: 54%;
	max-width: 2000px;
	height: 33.6vw;
	position: relative;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 70%;
		height: 44.6vw;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 68%;
		height: 44.8vw;
		@media only screen and (max-width: 285px) {
			width: 100%;
		}
	}
`;

export const CloseBox = styled(GoX)`
	position: absolute;
	right: 0;
	top: -50px;
	font-size: 40px;
	color: #fff;
	@media ${(props) => props.theme.breakpoints.md} {
		top: -40px;
		font-size: 30px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		top: -32px;
		font-size: 26px;
	}
`;
