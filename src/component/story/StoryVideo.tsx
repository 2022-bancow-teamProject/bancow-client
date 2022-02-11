import React from 'react';
import styled from 'styled-components';
import { HeadLine3 } from '../../common/typography';
import ReactPlayer from 'react-player';

const StoryVideo = () => {
	return (
		<SectionBox>
			<HeadLine3>
				<BlueFont>Story</BlueFont> 뱅카우
			</HeadLine3>
			<PlayerWrapper>
				<ReactPlayer
					width="100%"
					height="100%"
					url="https://www.youtube.com/watch?v=3UVPw_pn0JY"
					playing={false}
					controls
				></ReactPlayer>
			</PlayerWrapper>
		</SectionBox>
	);
};

export default StoryVideo;

export const SectionBox = styled.div`
	width: 100%;
	height: fit-content;
	padding-top: 44px;
	background: ${(props) => props.theme.colors.subPoint};
	display: flex;
	flex-flow: column;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.md} {
		padding-top: 18px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 260px;
	}
`;

export const BlueFont = styled.span`
	color: ${(props) => props.theme.colors.point};
`;

export const PlayerWrapper = styled.div`
	width: 54%;
	max-width: 2000px;
	height: 33.6vw;
	margin-top: 84px;
	margin-bottom: 100px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 70%;
		height: 44.6vw;
		margin-top: 18px;
		margin-bottom: 46px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 68%;
		height: 44.8vw;
		margin-top: 18px;
		margin-bottom: 28px;
		@media only screen and (max-width: 285px) {
			width: 100%;
		}
	}
`;
