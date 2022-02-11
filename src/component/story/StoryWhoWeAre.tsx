import React from 'react';
import styled from 'styled-components';
import { HeadLine3, HeadLine2 } from '../../common/typography';
import { BlueFont } from './StoryVideo';

const StoryWhoWeAre = () => {
	return (
		<SectionBox>
			<HeadLine3Style>
				<BlueFont>Who we are</BlueFont> 뱅카우
			</HeadLine3Style>
			<HeadLine2Style>
				세상에 없던 상생 투자를<span> </span>
				<span>탄생시키다</span>
			</HeadLine2Style>
			<EmployeeProfileContainer>
				<EmployeeProfileCard></EmployeeProfileCard>
				<EmployeeProfileCard></EmployeeProfileCard>
				<EmployeeProfileCard>
					<EmployeeImg src="/storypage/roin.svg" alt="Roin"></EmployeeImg>
					<EmployeeInfo>
						<strong>Roin 안재현</strong>
						<span>CEO</span>
						<p>새로운 연결을 통해 선순환하는 산업 생태계를 만들고자 합니다.</p>
					</EmployeeInfo>
				</EmployeeProfileCard>
				<EmployeeProfileCard>
					<EmployeeImg src="/storypage/dal.svg" alt="Dal"></EmployeeImg>
					<EmployeeInfo>
						<strong>Dal 이재윤</strong>
						<span>Android Developer</span>
						<p>수많은 사용자가 사용하게 될 앱을 개발하고 있습니다.</p>
					</EmployeeInfo>
				</EmployeeProfileCard>
				<EmployeeProfileCard>
					<EmployeeImg src="/storypage/yoonbae.svg" alt="YoonBae"></EmployeeImg>
					<EmployeeInfo>
						<strong>YoonBae 배윤진</strong>
						<span>Designer</span>
						<p>서비스와 사용자의 즐거운 연결을 고민하고 있습니다.</p>
					</EmployeeInfo>
				</EmployeeProfileCard>
				<EmployeeProfileCard>
					<EmployeeImg src="/storypage/huhiyan.svg" alt="Huhiyan"></EmployeeImg>
					<EmployeeInfo>
						<strong>Huhiyan 박혜연</strong>
						<span>COO</span>
						<p>내부 운영 및 관리 업무를 원활하게 추진하는 역할을 하고 있습니다.</p>
					</EmployeeInfo>
				</EmployeeProfileCard>
				<EmployeeProfileCard>
					<EmployeeImg src="/storypage/spitto.svg" alt="Spitto"></EmployeeImg>
					<EmployeeInfo>
						<strong>Spitto 강현준</strong>
						<span>CPO</span>
						<p>소비자와 생산자, 나아가 산업의 모든 플레이어들을 상생의 가치로 연결시키는 스탁키퍼가 되고자 합니다.</p>
					</EmployeeInfo>
				</EmployeeProfileCard>
				<EmployeeProfileCard>
					<EmployeeImg src="/storypage/maru.svg" alt="Maru"></EmployeeImg>
					<EmployeeInfo>
						<strong>Maru 이석민</strong>
						<span>Backend Developer</span>
						<p>뱅카우 서비스의 백앤드 개발과 서버 개발을 진행하고 있습니다.</p>
					</EmployeeInfo>
				</EmployeeProfileCard>
				<EmployeeProfileCard>
					<EmployeeImg src="/storypage/walt.svg" alt="Walt"></EmployeeImg>
					<EmployeeInfo>
						<strong>Walt 김효진</strong>
						<span>Backend Developer</span>
						<p>뱅카우 서비스의 백엔드 개발 담당으로 API개발과 서버운영을 맡고 있습니다!</p>
					</EmployeeInfo>
				</EmployeeProfileCard>
			</EmployeeProfileContainer>
		</SectionBox>
	);
};

export default StoryWhoWeAre;

export const SectionBox = styled.div`
	position: relative;
	width: 100%;
	max-width: 1332px;
	height: 930px;
	margin: 180px auto 0;
	background: ${(props) => props.theme.alt.backgroud1};
	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 576px;
		height: 620px;
		margin: 80px auto 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		height: 924px;
		margin-top: 10px;
		display: flex;
		flex-flow: column;
		align-items: center;
	}
`;

export const HeadLine3Style = styled(HeadLine3)`
	color: ${(props) => props.theme.alt.text2};
	margin-bottom: 12px;
`;
export const HeadLine2Style = styled(HeadLine2)`
	font-size: 58px;
	font-weight: 700;
	color: ${(props) => props.theme.alt.text2};
	span {
		display: block;
	}
	@media screen and (max-width: 1100px) {
		font-size: 50px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 23px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		letter-spacing: -1.2px;
		span {
			display: inline;
		}
	}
`;
export const EmployeeProfileContainer = styled.div`
	position: absolute;
	top: 150px;
	width: 1332px;
	height: 626px;
	/* background: pink; */
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
	& > div:first-child,
	& > div:nth-child(2) {
		visibility: hidden;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 576px;
		height: 520px;
		top: 70px;

		& > div:first-child {
			display: none;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-flow: column;
		height: fit-content;
		align-items: center;
		width: 100%;
		margin-top: 50px;
		& > div:nth-child(2) {
			display: none;
		}
	}
`;

export const EmployeeProfileCard = styled.div`
	box-sizing: border-box;
	width: 392px;
	height: 150px;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 265px;
		height: 110px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 276px;
	}
`;

export const EmployeeImg = styled.img`
	display: block;
	width: 150px;
	height: 150px;
	border-bottom-right-radius: 50px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 92px;
		height: 93px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;

export const EmployeeInfo = styled.div`
	width: 202px;
	height: 152px;
	margin-left: 32px;
	font-size: 20px;
	strong {
		font-weight: 700;
	}
	span {
		display: block;
		font-weight: 600;
		color: ${(props) => props.theme.colors.gray2};
		margin: 12px 0 14px;
	}
	p {
		font-size: 16px;
		@media ${(props) => props.theme.breakpoints.sm} {
			font-size: 12px;
		}
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 160px;
		height: 72px;
		font-size: 12px;
		margin-left: 2px;
		span {
			margin: 3px 0 5px;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;
