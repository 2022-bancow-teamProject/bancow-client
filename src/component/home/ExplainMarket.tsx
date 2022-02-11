import React from 'react';
import { EmphasisSub } from '../../common/typography';
import { Container80, DescTextmt30, SubDescText, UseOrder } from './components/common';
import {
	Section,
	TextBox,
	Text,
	Img1,
	GrayBox,
	Text2,
	Img2,
	Img3,
	Text3,
	RowFlex,
	GrayBox2
} from './ExplainMarketStyle';

const ExplainMarket = () => {
	return (
		<Section>
			<Container80>
				<UseOrder>3. 출하하기</UseOrder>
				<DescTextmt30>
					30개월 되면
					<br />
					출하진행
				</DescTextmt30>
				<SubDescText>
					한우는 생후 26개월~34개월이 되면 출하가 이뤄져요.
					<br />
					이후 출하,도축,판정이 순서대로 진행돼요.
				</SubDescText>
				<TextBox>
					<Text>
						출하일이 확정되면
						<br />
						<EmphasisSub>출하, 도축, 판정순</EmphasisSub>으로
						<br /> 진행돼요
					</Text>
					<Img1 />
				</TextBox>
				<RowFlex>
					<GrayBox>
						<Img2 />
						<Text2>
							출하정보
							<br />
							도축정보를
							<br />
							확인하세요
						</Text2>
					</GrayBox>
					<GrayBox2>
						<Text3>
							마지막 판정등급을
							<br />
							확인하면 완료!
						</Text3>
						<Img3 />
					</GrayBox2>
				</RowFlex>
			</Container80>
		</Section>
	);
};

export default ExplainMarket;
