import Link from 'next/link';
import React from 'react';
import Pagenation from './components/Pagenation';
import { Section, UnderLineBox, HeadLine4Style, HeadLine5Style } from './noticeMainStyle';

// 언론ver  => event 처럼 상세페이지로 전환 가능
const NoticeMain = () => {
	return (
		<Section>
			<Link href="notice/?noticeID=1234" as="/notice/1234">
				<UnderLineBox>
					<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
					<HeadLine5Style>2022-01-27</HeadLine5Style>
				</UnderLineBox>
			</Link>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<Pagenation />
		</Section>
	);
};

export default NoticeMain;
