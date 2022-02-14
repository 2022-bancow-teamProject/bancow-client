import React from 'react';
import { BackgroundImg, CenteredRowBox } from '../../../common/layouts';
import { HeadLine2 } from '../../../common/typography';
import styled from 'styled-components';

interface Iprops {
	num: number;
	title: string;
	sub: string;
}

const CatchphraseCardSmall = React.forwardRef<HTMLDivElement, Iprops>(({ num, title, sub }, ref) => {
	return (
		<ItemCard ref={ref}>
			<div>
				<TitleText dangerouslySetInnerHTML={{ __html: title }} />
				<SubText dangerouslySetInnerHTML={{ __html: sub }} />
			</div>
			<Img url={`/mainpage/mainadd${num}.png`} />
		</ItemCard>
	);
});

const ItemCard = styled(CenteredRowBox)`
	justify-content: space-between;
	height: 400px;
	border-radius: 40px;
	background-color: ${(props) => props.theme.alt.backgroud3};
	padding: 0 100px;
	opacity: 0;
	transition: all 0.9s ease-in-out;
	&.go {
		opacity: 1;
	}
	@media screen and (max-width: 1640px) {
		padding: 0 50px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		height: 300px;
	}
	@media screen and (max-width: 930px) {
		flex-direction: column;
		height: 600px;
		padding: 50px 0;
	}
`;

const TitleText = styled(HeadLine2)`
	margin-bottom: 30px;
	@media screen and (max-width: 1640px) {
		font-size: 40px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 28px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 30px;
	}
`;

const SubText = styled.h4`
	font-size: 33px;
	color: ${(props) => props.theme.alt.text1};
	@media screen and (max-width: 1640px) {
		font-size: 26px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
	}
`;

const Img = styled(BackgroundImg)`
	width: 330px;
	height: 400px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 247.5px;
		height: 300px;
	}
`;

export default CatchphraseCardSmall;
