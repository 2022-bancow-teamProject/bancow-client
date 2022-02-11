import React, { useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { Emphasis } from '../../common/typography';
import { CenterBox, LinkText, Text, TextBox, SubInfo } from './components/common';
import GuideModal from './components/GuideModal';
import { Section, Title, Img1, Img2, Img3, Img4, Img5, Img6 } from './howToUseStyle';

const HowToUse = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [step, setStep] = useState(0);

	const trigger = (stepNum: number) => {
		setStep(stepNum);
		setIsOpen((curr) => !curr);
	};
	return (
		<Section>
			<Title>뱅카우 하는 법 알아볼까요?</Title>
			<Img1 />
			<CenterBox>
				<Img2 />
				<TextBox>
					<Text>
						<Emphasis>STEP 01. 예치금 입금하기</Emphasis>
					</Text>
					<Text>예치금은 한우 구매 시 사용하는 돈이예요. 먼저 부여된 나만의 예치금 계좌에 입금해 준비해주세요.</Text>
					<LinkText onClick={() => trigger(0)}>
						영상 가이드 <HiArrowSmRight />
					</LinkText>
				</TextBox>
			</CenterBox>
			<CenterBox>
				<TextBox>
					<Text>
						<Emphasis>STEP 02. 구매하기</Emphasis>
					</Text>
					<Text>
						우선 현재 구매 가능한 송아지들을 둘러볼 수 있어요. 4만원부터 원하는 지분 만큼 한우 구매가 가능해요.
						<SubInfo as="p">*유전지수, 농가등급, 예상수익률 확인</SubInfo>
					</Text>
					<LinkText onClick={() => trigger(1)}>
						영상 가이드 <HiArrowSmRight />
					</LinkText>
				</TextBox>
				<Img3 />
			</CenterBox>
			<CenterBox>
				<Img4 />
				<TextBox>
					<Text>
						<Emphasis>STEP 03. 사육 중</Emphasis>
					</Text>
					<Text>
						농가에서 알아서 키워주는 내 소가 자라는 모습을 업데이트 되는 사진으로 확인 할 수 있어요.
						<SubInfo as="p">*체중, 건강검진 내역 확인</SubInfo>
					</Text>
					<LinkText onClick={() => trigger(2)}>
						영상 가이드 <HiArrowSmRight />
					</LinkText>
				</TextBox>
			</CenterBox>
			<CenterBox>
				<TextBox>
					<Text>
						<Emphasis>STEP 04. 출하조회</Emphasis>
					</Text>
					<Text>
						내 소의 출하 과정을 실시간으로 보고 출하부터 등급 판정까지 한 눈에 알 수 있어요.
						<SubInfo as="p">*출하일, 도축일, 경매일, 판정결과, 수익금, 수익률</SubInfo>
					</Text>
					<LinkText onClick={() => trigger(3)}>
						영상 가이드 <HiArrowSmRight />
					</LinkText>
				</TextBox>
				<Img5 />
			</CenterBox>
			<CenterBox>
				<Img6 />
				<TextBox>
					<Text>
						<Emphasis>STEP 05. 경매완료</Emphasis>
					</Text>
					<Text>드디어 내 한우의 경매가 완료 되었어요! 내 자산의 최종적인 수익률과 수익금을 확인할 수 있어요.</Text>
					<LinkText onClick={() => trigger(4)}>
						영상 가이드 <HiArrowSmRight />
					</LinkText>
				</TextBox>
			</CenterBox>
			{isOpen && <GuideModal setIsOpen={setIsOpen} step={step} />}
		</Section>
	);
};

export default HowToUse;
