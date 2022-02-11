import React from 'react';
import ReviewsSlider from './components/ReviewsSlider';
import DetailLink from './components/DetailLink';
import { MainImgBox, Section, MainText, MainTextSmall, Container, Box } from './SloganStyle';
import { Emphasis } from '../../common/typography';
import AppLinkBox from '../../common/global/AppLinkBox';

const Slogan = () => {
	return (
		<Section>
			<MainImgBox />
			<Container>
				<Box>
					<MainText>
						누구나
						<br />
						<Emphasis>4만원</Emphasis>부터
						<br />
						<Emphasis>한우</Emphasis>를<br />
						소유할 수 있다고요?
					</MainText>
					<MainTextSmall>누구나 4만원부터 한우를 소유할 수 있다고요?</MainTextSmall>
					<AppLinkBox />
					<DetailLink />
				</Box>
			</Container>
			<ReviewsSlider />
		</Section>
	);
};

export default Slogan;
