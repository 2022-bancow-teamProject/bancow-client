import React from 'react';
import styled from 'styled-components';
import { HeadLine4, HeadLine5 } from '../../common/typography';

const Section = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud7};
	height: 249px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.md} {
		height: 180px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 130px;
	}
`;

const HeadLine4Style = styled(HeadLine4)`
	margin-bottom: 16px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 22px;
		margin-bottom: 10px;
	}
`;

const HeadLine5Style = styled(HeadLine5)`
	color: ${(props) => props.theme.alt.text2};
	strong {
		color: ${(props) => props.theme.colors.point};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		width: 100%;
		text-align: center;
	}
`;

const Section1 = () => {
	return (
		<Section>
			<HeadLine4Style>입점문의</HeadLine4Style>
			<HeadLine5Style>
				농가를 위한 상생 파트너, <strong>뱅카우</strong>입니다.
			</HeadLine5Style>
		</Section>
	);
};

export default Section1;
