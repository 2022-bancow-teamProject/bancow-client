import React from 'react';
import { EmphasisSub } from '../../common/typography';
import { Container80, DescTextmt30, FlexVerticalBox, SubDescText, UseOrder } from './components/common';
import { Section, TextBox, Text, Img1, Text2, Img2, Img3, Row } from './ExplainSellStyle';

const ExplainSell = () => {
	return (
		<Section>
			<Container80>
				<UseOrder>4. 경매완료</UseOrder>
				<DescTextmt30>
					나만의 소가
					<br />
					캐시카우로 바뀌어요
				</DescTextmt30>
				<SubDescText>판정 후 등급별 경매가 이루어져요</SubDescText>
				<Row>
					<FlexVerticalBox>
						<Img1 />
						<Img2 />
					</FlexVerticalBox>
					<TextBox>
						<Text>
							<EmphasisSub>도축 판정 결과</EmphasisSub>서
							<br />
							나온 등급으로 경매가 이루어져요
							<br />
							상세페이지에서 확인가능
						</Text>
						<Img3 />
						<Text2>
							경매가 끝나면 <EmphasisSub>나의 투자결과</EmphasisSub>를
							<br />
							확인 할 수 있어요
						</Text2>
					</TextBox>
				</Row>
			</Container80>
		</Section>
	);
};

export default ExplainSell;
