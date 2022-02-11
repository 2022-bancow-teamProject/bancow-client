import React from 'react';
import styled from 'styled-components';
import { HeadLine3 } from '../../common/typography';

const StoryProcessCards = () => {
	return (
		<SectionBox>
			<Card>
				<TextBox mt={170} ml={507}>
					<HeadLine3>
						<ResponsiveText>
							한우자산플랫폼 뱅카우는
							<br />
							<span>농가와 소비자를 투자로 연결해요</span>
						</ResponsiveText>
					</HeadLine3>
				</TextBox>
				<ImgProducer src="/storypage/storypage1-1.svg" alt="producer" />
				<ImgConsumer src="/storypage/storypage1-2.svg" alt="consumer" />
			</Card>
			<Card>
				<TextBox mt={170} ml={546}>
					<HeadLine3>
						<ResponsiveText>
							한우가 다 자라면
							<br />
							<span>생산자와 소비자가 수익을 공유해요</span>
						</ResponsiveText>
					</HeadLine3>
				</TextBox>
				<ImgSharingProfit src="/storypage/storypage2.svg" alt="sharingprofit" />
			</Card>
			<ResponsiveBoxWeb>
				<Card>
					<TextBox mt={56} ml={450}>
						<HeadLine3>
							농가는
							<br />
							<span>생산비 부담을 줄이고 생산성을 높이고,</span>
						</HeadLine3>
					</TextBox>
					<TextBox mt={96} ml={108}>
						<HeadLine3>
							소비자는
							<br />
							<span>새로운 투자시장에 진출하는 기회를 가져요</span>
						</HeadLine3>
						<ImgProductivity src="/storypage/storypage3-1.svg" alt="higher productivity" />
						<ImgConsumer2 src="/storypage/storypage3-2.svg" alt="consumer in a new investment market" />
					</TextBox>
				</Card>
			</ResponsiveBoxWeb>
			<ResponsiveBoxMobile>
				<Card>
					<TextBox mt={56} ml={450}>
						<HeadLine3>
							<ResponsiveText>
								농가는
								<br />
								<span>생산비 부담을 줄이고 생산성을 높이고,</span>
							</ResponsiveText>
						</HeadLine3>
					</TextBox>
					<ImgProductivity src="/storypage/storypage3-1.svg" alt="higher productivity" />
				</Card>
				<Card>
					<TextBox mt={96} ml={108}>
						<HeadLine3>
							<ResponsiveText>
								소비자는
								<br />
								<span>새로운 투자시장으로의 기회를 가져요</span>
							</ResponsiveText>
						</HeadLine3>
						<ImgConsumer2 src="/storypage/storypage3-2.svg" alt="consumer in a new investment market" />
					</TextBox>
				</Card>
			</ResponsiveBoxMobile>
		</SectionBox>
	);
};
export default StoryProcessCards;

export const SectionBox = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 1916px;
	@media ${(props) => props.theme.breakpoints.md} {
		height: 658px;
		padding-top: 60px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 768px;
		padding-top: 42px;
	}
`;
export const Card = styled.div`
	position: relative;
	width: 1300px;
	max-width: 1300px;
	height: 500px;
	margin: 0 auto;
	margin-bottom: 93px;
	border-radius: 20px;
	box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.2);
	background: white;
	overflow: hidden;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 585px;
		height: 118px;
		margin-bottom: 23px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 290px;
		height: 158px;
		margin-bottom: 17px;
		@media only screen and (max-width: 290px) {
			width: 100%;
		}
	}
`;
export const TextBox = styled.div<{ mt?: number; ml?: number }>`
	margin-top: ${({ mt }) => (mt ? mt : 0)}px;
	margin-left: ${({ ml }) => (ml ? ml : 0)}px;
	&& span {
		color: ${(props) => props.theme.colors.point};
	}
	@media ${(props) => props.theme.breakpoints.md} {
		margin-top: 34px;
		margin-left: 220px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 0 auto;
		text-align: center;
		margin-top: 100px;
	}
`;
export const ImgProducer = styled.img`
	position: absolute;
	display: block;
	top: 36px;
	left: 109px;
	@media ${(props) => props.theme.breakpoints.md} {
		top: 10px;
		left: 67px;
		width: 50px;
		height: 62px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 2px;
		left: 107px;
	}
`;
export const ImgConsumer = styled.img`
	position: absolute;
	display: block;
	top: 180px;
	left: 233px;
	@media ${(props) => props.theme.breakpoints.md} {
		top: 41px;
		left: 101px;
		width: 50px;
		height: 62px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 33px;
		left: 141px;
	}
`;
export const ImgSharingProfit = styled.img`
	position: absolute;
	display: block;
	top: 0;
	left: 57px;
	@media ${(props) => props.theme.breakpoints.md} {
		top: 7px;
		left: 37px;
		width: 114px;
		height: 98px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 4px;
		left: calc(50% - 40px);
		width: 80px;
	}
`;
export const ImgProductivity = styled.img`
	position: absolute;
	display: block;
	top: 31px;
	left: 74px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 106px;
		height: 66px;
		left: 53px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		left: calc(50% - 60px);
		top: 16px;
		width: 120px;
		height: auto;
	}
`;
export const ImgConsumer2 = styled.img`
	position: absolute;
	display: block;
	bottom: 33px;
	right: 69px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 79px;
		height: 70px;
		top: 29px;
		left: 48px;
		bottom: 0;
		right: 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		left: calc(50% - 45px);
		top: 12px;
		width: 90px;
		height: auto;
	}
`;
export const ResponsiveBoxWeb = styled.div`
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;
export const ResponsiveBoxMobile = styled.div`
	display: none;
	@media ${(props) => props.theme.breakpoints.md} {
		display: block;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: block;
	}
`;
export const ResponsiveText = styled.div`
	@media ${(props) => props.theme.breakpoints.md} {
		font-weight: 400;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-weight: 400;
		@media only screen and (max-width: 290px) {
			font-size: 12px;
		}
	}
`;
