import React from 'react';
import AppLinkBox from '../../common/AppLinkBox';
import { Container, MainText, SubText, Section, TextBox, Img1, Img2, Img3 } from './IntroServiceStyle';

const IntroService = () => {
	return (
		<Section>
			<Container>
				<TextBox>
					<SubText>내 소가 캐시가 된다</SubText>
					<MainText>한우자산플랫폼 뱅카우</MainText>
					<AppLinkBox />
				</TextBox>
				<Img1 />
				<Img2 />
				<Img3 />
			</Container>
		</Section>
	);
};

export default IntroService;
