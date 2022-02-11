import React from 'react';
import AppLinkBox from '../AppLinkBox';
import { Section, Container, HeadLine3, HeadLine3B } from './subFooterStyle';

const SubFooter = () => {
	return (
		<Section>
			<Container>
				<HeadLine3>뱅카우로</HeadLine3>
				<HeadLine3B>한우 투자하러 가볼까요?</HeadLine3B>
				<AppLinkBox />
			</Container>
		</Section>
	);
};

export default SubFooter;
