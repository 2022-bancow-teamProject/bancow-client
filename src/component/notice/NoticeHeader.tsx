import { CenteredColBox } from '../../common/layouts';
import { HeadLine4, HeadLine5 } from '../../common/typography';
import styled from 'styled-components';

const NoticeHeader = () => {
	return (
		<Section>
			<HeadLine4Style>공지사항</HeadLine4Style>
			<HeadLine5Style>뱅카우의 새로운 공지 정보를 한눈에 알아가요.</HeadLine5Style>
		</Section>
	);
};

const Section = styled(CenteredColBox)`
	background-color: ${(props) => props.theme.alt.backgroud7};
	height: 249px;
	flex-shrink: 0;
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
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		width: 210px;
		text-align: center;
	}
`;

export default NoticeHeader;
