import React from 'react';
import { Section, HeadLine4Style, HeadLine5Style } from './noticeHeaderStyle';

const NoticeHeader = () => {
	return (
		<Section>
			<HeadLine4Style>공지사항</HeadLine4Style>
			<HeadLine5Style>뱅카우의 새로운 공지 정보를 한눈에 알아가요.</HeadLine5Style>
		</Section>
	);
};

export default NoticeHeader;
