import { Emphasis } from '../../common/typography';
import { HeadLine2 } from '../../common/typography';
import { CenteredColBox } from '../../common/layouts';
import styled from 'styled-components';

const CowChart = () => {
	return (
		<Section>
			<CenteredColBox>
				<Phrase>
					<Emphasis>캐시카우가 되는 순간, 설레지 않나요?</Emphasis>
				</Phrase>
				<ChartBox />
			</CenteredColBox>
		</Section>
	);
};

const Section = styled.div`
	overflow: hidden;
	transition: ease all 0.5s;
	padding: 90px;
	background-color: ${(props) => props.theme.alt.backgroud1};
`;

const Phrase = styled(HeadLine2)`
	margin-bottom: 30px;
	color: ${(props) => props.theme.alt.text4};
	@media screen and (max-width: 1160px) {
		font-size: 50px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 46px;
		width: 460px;
		padding-left: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 30px;
		padding-left: 0px;
		width: 300px;
		text-align: center;
	}
`;

const ChartBox = styled.div`
	width: 100%;
	height: 700px;
	background-color: purple;
	opacity: 0.5;
	transition: ease all 0.5s;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;

export default CowChart;
