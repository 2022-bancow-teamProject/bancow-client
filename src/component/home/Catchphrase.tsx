import React, { useEffect, useRef } from 'react';
import { useObserver } from '../../common/hooks/IntersectionObserver';
import { Container80 } from './components/common';
import {
	Section,
	ContentBox,
	ItemCard,
	Img,
	Card,
	ImgMoney,
	TitleText,
	SubText,
	SubTitle,
	SubTitle2,
	MainTitle
} from './CatchphraseStyle';

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
				<ItemCard ref={ref1}>
					<div>
						<TitleText>
							마리당 최저 구매 비용
							<br />
							4만원부터
						</TitleText>
						<SubText>
							한우라고 무조건 비쌀 줄 알았다면 뱅카우를 만나보세요.
							<br />
							최저 4만원부터 투자가 가능해요.
						</SubText>
					</div>
					<Img url="/mainpage/mainadd1.png" />
				</ItemCard>
				<ItemCard ref={ref2}>
					<div>
						<TitleText>
							2년 뒤 평균 수익률
							<br />
							19.7%
						</TitleText>
						<SubText>
							보증된 수익률로 한우 경매 시 투자금을
							<br />
							확실히 챙겨가요.
						</SubText>
					</div>
					<Img url="/mainpage/mainadd2.png" />
				</ItemCard>
				<ItemCard ref={ref3}>
					<div>
						<TitleText>
							가축재해보험으로 소가 죽어도
							<br />
							구매금 100% 보장
						</TitleText>
						<SubText>
							더 이상 내 투자금이 날아갈까 걱정하지 마세요.
							<br />
							보장된 안전투자로 편하게 맡겨봐요.
						</SubText>
					</div>
					<Img url="/mainpage/mainadd3.png" />
				</ItemCard>
			</ContentBox>
			<Container80>
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
			</Container80>
		</Section>
	);
}

export default Catchphrase;
