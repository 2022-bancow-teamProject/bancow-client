import DetailLink from './components/DetailLink';
import AppLinkBox from '../../common/global/AppLinkBox';
import MainLeftImg from './components/MainLeftImg';
import SloganText from './components/SloganText';
import ReviewsSlider from './components/ReviewsSlider';
import styled from 'styled-components';
import { review } from '../../pages';

const Slogan = ({ reviews }: { reviews: Array<review> }) => {
	return (
		<Section>
			<MainLeftImg />
			<Container>
				<Box>
					<SloganText />
					<AppLinkBox />
					<DetailLink />
				</Box>
			</Container>
			<ReviewsSlider reviews={reviews} />
		</Section>
	);
};

const Section = styled.div`
	position: relative;
	height: 1850px;
	transition: ease all 0.5s;
	overflow: hidden;
	background-color: ${(props) => props.theme.alt.backgroud1};
	@media screen and (max-width: 1800px) {
		height: 1680px;
	}
	@media screen and (max-width: 1540px) {
		height: 1410px;
	}
	@media screen and (max-width: 1280px) {
		height: 1340px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		height: 1100px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 1000px;
	}
`;

export const Container = styled.div`
	width: 82%;
	margin: 0 auto;
	padding-top: 320px;
	padding-right: 8vw;
	display: flex;
	justify-content: flex-end;
	@media screen and (max-width: 1540px) {
		padding-top: 260px;
	}
	@media screen and (max-width: 1280px) {
		padding-right: 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		height: 46%;
		padding-top: 200px;
		justify-content: center;
		background-color: ${(props) => props.theme.alt.backgroud2};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding-top: 120px;
		height: 40%;
	}
`;

export const Box = styled.div`
	position: relative;
`;

export default Slogan;
