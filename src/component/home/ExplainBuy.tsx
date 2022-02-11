import React from 'react';
import { Emphasis } from '../../common/typography';
import { Container80, UseOrder, DescText } from './components/common';
import {
	Section,
	RowFlex,
	Img1,
	Img2,
	Img3,
	ExplainText2,
	TextBox,
	TextBox2,
	TextBox3,
	WhiteText,
	ExplainText
} from './ExplainBuyStyle';

const ExplainBuy = () => {
	return (
		<Section>
			<Container80>
				<UseOrder>1. 구매하기</UseOrder>
				<DescText>
					유전지수와
					<br />
					농가지수로 구매 결정
				</DescText>
				<RowFlex mt={110}>
					<Img1 />
					<TextBox>
						<ExplainText>
							<Emphasis>유전지수</Emphasis>로 유전자를
							<br /> <Emphasis>농가지수</Emphasis>로 농가등급을
							<br /> 간단히 확인해요.
						</ExplainText>
					</TextBox>
				</RowFlex>
				<RowFlex mt={38}>
					<TextBox2>
						<WhiteText>
							출금가능금액은
							<br />
							출금등록으로
							<br />
							빠르게.
						</WhiteText>
						<Img2 />
					</TextBox2>
					<TextBox3>
						<ExplainText2>
							사진, 건강검진 내역, 체중으로
							<br /> <Emphasis>내 소의 성장</Emphasis>을 실시간
							<br /> 확인해보아요.
						</ExplainText2>
						<Img3 />
					</TextBox3>
				</RowFlex>
			</Container80>
		</Section>
	);
};

export default ExplainBuy;
