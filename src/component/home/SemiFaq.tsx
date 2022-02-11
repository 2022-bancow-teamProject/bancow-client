import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Container80, FlexVerticalCenterBox } from './components/common';
import { MainText, SubText, LinkText, Section, CardBox, Card, Title, DescLine, SubLine } from './SemiFaqStyle';

const SemiFaq = () => {
	return (
		<Section>
			<Container80>
				<FlexVerticalCenterBox>
					<MainText>자주 묻는 질문</MainText>
					<SubText>
						뱅카우를 처음 시작하시나요?
						<br />
						가장 자주 묻는 질문을
						<br />
						간추려 보았어요
					</SubText>
					<Link href="/howto">
						<a>
							<LinkText>
								자세히 보러가기 <IoIosArrowForward />
							</LinkText>
						</a>
					</Link>
				</FlexVerticalCenterBox>
				<CardBox>
					<Card>
						<Title>구매하기</Title>
						<DescLine>
							구매금액은 어떻게
							<br />
							지불하나요?
						</DescLine>
						<SubLine>
							보유하고 계신 예치금에서
							<br />
							구매하신 지분 금액만큼
							<br />
							차감됩니다.
						</SubLine>
					</Card>
					<Card>
						<Title>사육중</Title>
						<DescLine>
							상품이 죽거나 다치면
							<br />
							어떻게 되나요?
						</DescLine>
						<SubLine>
							상품의 손실 및 손상을
							<br />
							방지하기 위하여 모든
							<br />
							상품은 가축보험에
							<br />
							가입되어 있습니다.
						</SubLine>
					</Card>
					<Card>
						<Title>출하 및 경매</Title>
						<DescLine>
							구매부터 출하까지 얼마나
							<br />
							기간이 소요되나요?
						</DescLine>
						<SubLine>
							일반적으로 한우는
							<br />
							30개월령까지 성장한 뒤
							<br />
							출하됩니다.
						</SubLine>
					</Card>
					<Card>
						<Title>회원 관련</Title>
						<DescLine>
							개인정보는 어디서
							<br />
							변경하나요?
						</DescLine>
						<SubLine>
							내정보-내정보수정에서
							<br />
							회원님의 정보를
							<br />
							수정가능합니다.
						</SubLine>
					</Card>
				</CardBox>
			</Container80>
		</Section>
	);
};

export default SemiFaq;
