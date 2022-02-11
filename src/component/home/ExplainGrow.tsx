import React from 'react';
import { EmphasisSub } from '../../common/typography';
import { Container80, UseOrder, DescTextmt30, SubDescText } from './components/common';
import { Section, RowItem, ImgBox, Img, TextBox, Img2, Text } from './ExplainGrowStyle';

const ExplainGrow = () => {
	return (
		<Section>
			<Container80>
				<UseOrder>2. 사육하기</UseOrder>
				<DescTextmt30>
					4만원부터
					<br />
					한우를 소유가능
				</DescTextmt30>
				<SubDescText>
					보기도 어려운 차트로 정신 없진 않으신가요?
					<br />
					귀여운 송아지에 투자하여 키우는 재미도 느껴요!
				</SubDescText>
				<RowItem>
					<ImgBox>
						<Img />
					</ImgBox>
					<TextBox>
						<Img2 />
						<Text>
							실시간 업로드되는
							<br /> 실물사진,
							<br />
							<br /> 지금 바로 <EmphasisSub>뱅카우</EmphasisSub>에서
							<br /> 확인해보세요
						</Text>
					</TextBox>
				</RowItem>
			</Container80>
		</Section>
	);
};

export default ExplainGrow;
