import Link from 'next/link';
import Pagenation from './components/Pagenation';
import { HeadLine5 } from '../../common/typography';
import { CenteredColBox } from '../../common/layouts';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface Inotice {
	id: number;
	create_date: string;
	message: string;
	notice_category: string;
	status: boolean;
	title: string;
	update_date: string;
	username: string;
}

const NoticeMain = () => {
	const [data, setData] = useState<Inotice[]>([]);
	// const baseApi = process.env.NEXT_PUBLIC_BASE_API;

	// const getNotice = async (page: number) => {
	// 	const res = await fetch(`${baseApi}notice/public?page=${page}`);
	// 	const {
	// 		data: { content }
	// 	} = await res.json();
	// 	return content;
	// };
	// useEffect(() => {
	// 	(async () => {
	// 		const content = await getNotice(0);
	// 		console.log(content);
	// 		setData(content);
	// 	})();
	// }, []);
	return (
		<Section>
			{data.length &&
				data?.map((notice) => (
					<UnderLineBox key={notice.id}>
						{/* <Link href={`notice/?noticeID=${notice.id}`} as={`/notice/${notice.id}`}> */}
						<Title>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</Title>
						<Datetypo>2022-01-27</Datetypo>
						{/* </Link> */}
					</UnderLineBox>
				))}

			<Pagenation />
		</Section>
	);
};

const Section = styled(CenteredColBox)`
	background-color: ${(props) => props.theme.alt.backgroud1};
	padding: 100px 0;
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 70px 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 50px 0;
	}
`;

const UnderLineBox = styled.a`
	padding: 8px 0;
	width: 800px;
	border-bottom: 1px solid ${(props) => props.theme.alt.text1};
	margin-bottom: 38px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 600px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 270px;
	}
`;

const Title = styled.h4`
	font-size: 28px;
	color: ${(props) => props.theme.alt.text1};
	margin-bottom: 8px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 20px;
	}
`;

const Datetypo = styled(HeadLine5)`
	color: ${(props) => props.theme.alt.text1};
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

export default NoticeMain;
