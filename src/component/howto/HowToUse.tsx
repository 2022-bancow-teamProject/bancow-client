import React, { useState } from 'react';
import GuideModal from './components/GuideModal';
import { HeadLine2 } from '../../common/typography';
import { BackgroundImg } from '../../common/layouts';
import StepContentList from './components/StepContentList';
import styled from 'styled-components';
import { video } from '../../pages/howto';

const HowToUse = ({ data }: { data: Array<video> }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [step, setStep] = useState(0);

	const trigger = (stepNum: number) => {
		setStep(stepNum);
		setIsOpen((curr) => !curr);
	};
	return (
		<Section>
			<Title>뱅카우 하는 법 알아볼까요?</Title>
			<Img1 url="/howtopage/howto1.png" />
			<StepContentList trigger={trigger} />
			{isOpen && <GuideModal setIsOpen={setIsOpen} step={step} data={data} />}
		</Section>
	);
};

const Section = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud1};
	padding: 120px 0 0;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 80px 0 0;
	}
`;

export const Title = styled(HeadLine2)`
	text-align: center;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 42px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 28px;
	}
`;

const Img1 = styled(BackgroundImg)`
	width: 1000px;
	height: 723px;
	margin: 160px auto 0;
	border-radius: 30px;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-top: 100px;
		width: 630px;
		height: 455px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 60px;
		width: 370px;
		height: 267.5px;
	}
`;

export default HowToUse;
