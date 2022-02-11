import React from 'react';
import styled from 'styled-components';
import { HeadLine3 } from '../../common/typography';

const StoryHeader = () => {
	return (
		<SectionBox>
			<TextBox>
				<HeadLine3>소비자와 생산자가 함께 자산을 키워가는 지속 가능한 선순환을 만들어갑니다.</HeadLine3>
			</TextBox>
		</SectionBox>
	);
};

export default StoryHeader;

export const SectionBox = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 412px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	@media ${(props) => props.theme.breakpoints.md} {
		height: 113px;
		background-color: ${(props) => props.theme.colors.point};
		font-weight: 400;
		color: white;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 99px;
	}
`;

export const TextBox = styled.div`
	width: 803px;
	height: 178px;
	color: ${(props) => props.theme.alt.text1};
	@media ${(props) => props.theme.breakpoints.md} {
		width: 330px;
		height: 60px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 274px;
		height: 46px;
	}
`;
