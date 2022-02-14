import React, { Dispatch, SetStateAction, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { GoX } from 'react-icons/go';
import { CenteredRowBox } from '../../../common/layouts';
import styled from 'styled-components';
import { video } from '../../../pages/howto';

interface ModalProps {
	step: number;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	data: Array<video>;
}

const GuideModal: React.FC<ModalProps> = ({ step, setIsOpen, data }) => {
	const modalHandler = () => {
		setIsOpen((curr) => !curr);
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);
	return (
		<Modal>
			<PlayerWrapper>
				<CloseBox onClick={modalHandler} />
				<ReactPlayer width="100%" height="100%" url={data[step].movie_url} playing controls></ReactPlayer>
			</PlayerWrapper>
		</Modal>
	);
};

export const Modal = styled(CenteredRowBox)`
	position: fixed;
	overflow: hidden;
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

export default GuideModal;
