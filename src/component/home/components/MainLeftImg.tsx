import styled from 'styled-components';
import { BackgroundImg } from '../../../common/layouts';

const MainLeftImg = () => {
	return <MainImgBox url="/mainpagecow.jpg" />;
};

const MainImgBox = styled(BackgroundImg)`
	height: 1600px;
	width: 1400px;
	border-radius: 50%;
	background-position: 50% 16%;
	position: absolute;
	transform: translate(-446px, -200px);
	transition: ease all 0.5s;

	@media screen and (max-width: 1800px) {
		height: 1400px;
		width: 1200px;
		background-position: 49% 16%;
	}
	@media screen and (max-width: 1540px) {
		height: 1200px;
		width: 1000px;
		background-size: 160%;
		background-position: 40% 56%;
	}
	@media screen and (max-width: 1280px) {
		width: 900px;
		background-size: 150%;
		background-position: 30% 56%;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;

export default MainLeftImg;
