import Link from 'next/link';
import React from 'react';
import { Emphasis } from '../../../common/typography';
import { Box, Title, SubText, Desc, Img } from './eventCardStyle';

const EventCard = () => {
	return (
		<Box>
			<Title>풍차돌리기 이벤트</Title>
			<SubText>마감</SubText>
			<Img />
			<Desc>
				풍차돌리기란, 적금 또는 예금 통장을 1년 동안 매달 만드는 방법을 일컫는 말이에요. 풍차돌리기란, 적금 또는 예금
				통장을 1년 동안 매달 만드는 방법을 일컫는 말이에요.풍차돌리기란, 적금 또는 예금 통장을 1년 동안 매달 만드는
				방법을 일컫는 말이에요.
			</Desc>
			<SubText>
				<Link href="event/?eventID=1234" as="/event/1234" scroll={false}>
					<a>
						<Emphasis>자세히</Emphasis>
					</a>
				</Link>
			</SubText>
		</Box>
	);
};

export default EventCard;
