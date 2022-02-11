import AppLinkBox from './AppLinkBox';
import { InnerBox } from '../layouts';
import styled from 'styled-components';

const SubFooter = () => {
	return (
		<Section>
			<Container>
				<HeadLine3>뱅카우로</HeadLine3>
				<HeadLine3B>한우 투자하러 가볼까요?</HeadLine3B>
				<AppLinkBox />
			</Container>
		</Section>
	);
};

const Section = styled.div`
	transition: ease all 0.5s;
	background-color: ${(props) => props.theme.alt.backgroud1};
	padding-top: 50px;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding-top: 10px;
	}
`;

const Container = styled(InnerBox)`
	padding-left: 6%;
	@media ${(props) => props.theme.breakpoints.md} {
		padding-left: 0;
	}
`;

const HeadLine3 = styled.h3`
	font-size: 44px;
	color: ${(props) => props.theme.alt.text1};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 36px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		text-align: center;
	}
`;

const HeadLine3B = styled(HeadLine3)`
	font-weight: 700;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 240px;
	}
`;

export default SubFooter;
