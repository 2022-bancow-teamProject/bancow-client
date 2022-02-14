import styled from 'styled-components';
import { BlueFont } from './StoryVideo';
import { HeadLine3 } from '../../common/typography';

const StoryHistory = () => {
	return (
		<SectionBox>
			<div className="history-header">
				<HeadLine3Style>
					<BlueFontStyle>History</BlueFontStyle>
					한우를 활용한 가치투자<span>뱅카우가 그 역사를 만들어갑니다</span>
				</HeadLine3Style>
			</div>
			<HistoryTableBox>
				<VerticalBar></VerticalBar>
				<HistoryUl className="scroll-spy">
					<li>
						<strong>2020년 10월</strong> 스탁키퍼 설립
					</li>
					<li>
						<strong>2020년 10월</strong> 스탁키퍼 2020 핀테크 공모전 대상
					</li>
					<li>
						<strong>2020년 10월</strong> 스탁키퍼 울랄라울랄라
					</li>
					<li>
						<strong>2020년 10월</strong> 가죽 플랫폼 어쩌구 저쩌구
					</li>
					<li>
						<strong>2020년 10월</strong> 정주영 보육기업 선정
					</li>
				</HistoryUl>
			</HistoryTableBox>
		</SectionBox>
	);
};

export default StoryHistory;

export const SectionBox = styled.div`
	position: relative;
	width: 100%;
	max-width: 1332px;
	height: fit-content;
	margin: 180px auto 0;
	display: flex;
	justify-content: space-between;
	span {
		display: block;
	}
	.history-header {
		width: 650px;
		@media ${(props) => props.theme.breakpoints.md} {
			width: 100%;
		}
		@media ${(props) => props.theme.breakpoints.sm} {
			width: 100%;
			display: flex;
			flex-flow: column;
			align-items: center;
			margin-bottom: 20px;
		}
	}
	background: ${(props) => props.theme.alt.backgroud1};
	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 576px;
		margin: 80px auto 0;
		display: block;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;
export const HeadLine3Style = styled(HeadLine3)`
	color: ${(props) => props.theme.alt.text2};
	@media ${(props) => props.theme.breakpoints.md} {
		margin-bottom: 30px;
	}
`;
export const BlueFontStyle = styled(BlueFont)`
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-bottom: 12px;
	}
`;
const HistoryTableBox = styled.div`
	width: 640px;
	height: 1192px;
	display: flex;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 276px;
		margin: 0 auto;
	}
`;

const VerticalBar = styled.div`
	width: 6px;
	height: 1117px;
	background: #0047f5;
	margin-left: 10px;
	@media ${(props) => props.theme.breakpoints.md} {
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 4px;
	}
`;
const HistoryUl = styled.ul`
	position: relative;
	width: 100%;
	@media ${(props) => props.theme.breakpoints.md} {
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%l;
	}
	li {
		color: ${(props) => props.theme.alt.text1};
		height: 30px;
		font-size: 18px;
		line-height: 30px;
		padding-left: 20px;
		visibility: hidden;
		@media ${(props) => props.theme.breakpoints.md} {
		}
		@media ${(props) => props.theme.breakpoints.sm} {
			font-size: 12px;
			padding-left: 12px;
		}
		&:before {
			content: '';
			position: absolute;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			border: 3px solid transparent;
			background: transparent;
			left: -15px;
			top: 4px;
			border: 3px solid #0047f5;
			background: white;
			@media ${(props) => props.theme.breakpoints.sm} {
				width: 16px;
				height: 16px;
				left: -13px;
			}
		}
	}

	li:nth-child(1) {
		animation-name: climb1;
		animation-timing-function: ease-in;
		animation-delay: 0.5s;
		animation-duration: 1s;
		animation-duration: leaner;
		animation-iteration-count: 1;
		animation-direction: alternate;
		animation-fill-mode: forwards;
	}
	li:nth-child(2) {
		animation-name: climb2;
		animation-delay: 1s;
		animation-timing-function: ease-in;
		animation-duration: 1s;
		animation-duration: leaner;
		animation-iteration-count: 1;
		animation-direction: alternate;
		animation-fill-mode: forwards;
	}
	li:nth-child(3) {
		animation-name: climb3;
		animation-delay: 1.5s;
		animation-timing-function: ease-in;
		animation-duration: 1s;
		animation-duration: leaner;
		animation-iteration-count: 1;
		animation-direction: alternate;
		animation-fill-mode: forwards;
	}
	li:nth-child(4) {
		animation-name: climb4;
		animation-delay: 2s;
		animation-timing-function: ease-in;
		animation-duration: 1s;
		animation-duration: leaner;
		animation-iteration-count: 1;
		animation-direction: alternate;
		animation-fill-mode: forwards;
	}
	li:nth-child(5) {
		animation-name: climb5;
		animation-delay: 2.5s;
		animation-timing-function: ease-in;
		animation-duration: 1s;
		animation-duration: leaner;
		animation-iteration-count: 1;
		animation-direction: alternate;
		animation-fill-mode: forwards;
	}
	@keyframes climb1 {
		0% {
			transform: translateY(50px);
			opacity: 0;
			visibility: visible;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
			color: ${(props) => props.theme.alt.text1};
			visibility: visible;
		}
	}
	@keyframes climb2 {
		0% {
			transform: translateY(100px);
			opacity: 0;
			visibility: visible;
		}

		100% {
			transform: translateY(50px);
			opacity: 1;
			color: ${(props) => props.theme.alt.text1};
			visibility: visible;
		}
	}
	@keyframes climb3 {
		0% {
			transform: translateY(150px);
			opacity: 0;
			visibility: visible;
		}

		100% {
			transform: translateY(100px);
			opacity: 1;
			color: ${(props) => props.theme.alt.text1};
			visibility: visible;
		}
	}
	@keyframes climb4 {
		0% {
			transform: translateY(200px);
			opacity: 0;
			visibility: visible;
		}

		100% {
			transform: translateY(150px);
			opacity: 1;
			color: ${(props) => props.theme.alt.text1};
			visibility: visible;
		}
	}
	@keyframes climb5 {
		0% {
			transform: translateY(250px);
			opacity: 0;
			visibility: visible;
		}

		100% {
			transform: translateY(200px);
			opacity: 1;
			color: ${(props) => props.theme.alt.text1};
			visibility: visible;
		}
	}
`;
