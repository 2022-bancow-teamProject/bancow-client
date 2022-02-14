import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Emphasis } from '../../../common/typography';
import { CenteredColBox } from '../../../common/layouts';
import { Desc, Img, SubText, Title } from './EventCard';
import styled from 'styled-components';

const EventDetail = () => {
	const { query } = useRouter();
	console.log(query.eventID); // 추가 정보요청
	return (
		<Section>
			<div>
				<Title>풍차돌리기 이벤트</Title>
				<SubText>마감</SubText>
			</div>
			<Img url="https://via.placeholder.com/350x220" />
			<Desc style={{ width: '320px' }}>
				풍차돌리기란, 적금 또는 예금 통장을 1년 동안 매달 만드는 방법을 일컫는 말이에요. 풍차돌리기란, 적금 또는 예금
				통장을 1년 동안 매달 만드는 방법을 일컫는 말이에요.풍차돌리기란, 적금 또는 예금 통장을 1년 동안 매달 만드는
				방법을 일컫는 말이에요.
			</Desc>
			<SubText>
				<Link href="/event" scroll={false}>
					<a>
						<Emphasis>돌아가기</Emphasis>
					</a>
				</Link>
			</SubText>
		</Section>
	);
};

const Section = styled(CenteredColBox)`
	margin: 50px 0;
	flex: 1;
	background-color: ${(props) => props.theme.alt.backgroud1};
`;

export default EventDetail;
