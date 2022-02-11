import React from 'react';
import { Section, HeadLine4Style, HeadLine5Style } from './eventHeaderStyle';

const EventHeader = () => {
	return (
		<Section>
			<HeadLine4Style>이벤트</HeadLine4Style>
			<HeadLine5Style>뱅카우 내 다양한 이벤트 정보를 한눈에 알아가요.</HeadLine5Style>
		</Section>
	);
};

export default EventHeader;
