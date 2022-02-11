import React, { useEffect, useRef } from 'react';
import { useObserver } from '../../common/hooks/IntersectionObserver';
import CatchphraseCardSmall from './components/CatchphraseCardSmall';
import { CenteredColBox, PureInnerBox } from '../../common/layouts';
import { HeadLine2, HeadLine5, HeadLine6 } from '../../common/typography';
import styled from 'styled-components';

function Catchphrase() {
	const ref1 = useRef<HTMLDivElement>(null);
	const ref2 = useRef<HTMLDivElement>(null);
	const ref3 = useRef<HTMLDivElement>(null);
	const ref4 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = useObserver();
		observer.observe(ref1.current as HTMLDivElement);
		observer.observe(ref2.current as HTMLDivElement);
		observer.observe(ref3.current as HTMLDivElement);
		observer.observe(ref4.current as HTMLDivElement);
		return () => observer.disconnect();
	}, []);
	return (
		<Section>
			<ContentBox>
				<CatchphraseCardSmall
					ref={ref1}
					num={1}
					title="마리당 최저 구매 비용<br />4만원부터"
					sub="한우라고 무조건 비쌀 줄 알았다면 뱅카우를 만나보세요.<br />최저 4만원부터 투자가 가능해요."
				/>
				<CatchphraseCardSmall
					ref={ref2}
					num={2}
					title="2년 뒤 평균 수익률<br />19.7%"
					sub="보증된 수익률로 한우 경매 시 투자금을<br />확실히 챙겨가요."
				/>
				<CatchphraseCardSmall
					ref={ref3}
					num={3}
					title="가축재해보험으로 소가 죽어도<br />구매금 100% 보장"
					sub="더 이상 내 투자금이 날아갈까 걱정하지 마세요.<br />보장된 안전투자로 편하게 맡겨봐요."
				/>
			</ContentBox>
			<PureInnerBox>
				<Card ref={ref4}>
					<SubTitle>복잡한 투자는 그만</SubTitle>
					<MainTitle>
						안정성 있는 투자로
						<br />
						2년 뒤 투자금 회수해요.
					</MainTitle>
					<SubTitle2>
						1초 단위로 확인해야하는
						<br />
						불안한 투자, 지치진 않나요?
					</SubTitle2>
					<ImgMoney />
				</Card>
			</PureInnerBox>
		</Section>
	);
}

const Section = styled.div`
	padding: 120px 0;
	background-color: ${(props) => props.theme.alt.backgroud1};
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;

const ContentBox = styled(PureInnerBox)`
	display: flex;
	flex-direction: column;
	gap: 120px;
	@media ${(props) => props.theme.breakpoints.md} {
		gap: 60px;
	}
`;

const ImgMoney = styled.div`
	width: 214px;
	height: 190px;
	background-image: url('/mainpage/mainpagecoin.png');
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: 60px;
`;

const Card = styled(CenteredColBox)`
	height: 698px;
	margin: 120px 0 0;
	border-radius: 30px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.colors.white};
	//
	opacity: 0;
	transition: all 0.9s ease-in-out;
	&.go {
		opacity: 1;
	}
`;

const SubTitle = styled(HeadLine5)`
	text-align: center;
	margin-top: 15px;
	color: ${(props) => props.theme.alt.text3};
`;

const MainTitle = styled(HeadLine2)`
	margin-bottom: 30px;
	text-align: center;
	color: ${(props) => props.theme.alt.text3};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 46px;
	}
`;

const SubTitle2 = styled(HeadLine6)`
	font-size: 19px;
	text-align: center;
	margin-top: 32px;
	color: ${(props) => props.theme.alt.text3};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 18px;
	}
`;

export default Catchphrase;
