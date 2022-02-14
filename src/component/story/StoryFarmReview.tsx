import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeadLine2 } from '../../common/typography';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Scrollbar } from 'swiper';

const StoryFarmReview = () => {
	const rendering = () => {
		const result = [];
		for (let i = 0; i < 13; i++) {
			result.push(
				<SwiperSlide key={i}>
					<FarmerCard>
						<UpperBox>
							<FarmerImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"></FarmerImg>
							<FarmerInfo>
								<FarmerName>홍길동</FarmerName>
								<FarmerLocation>강원도 횡성</FarmerLocation>
							</FarmerInfo>
						</UpperBox>
						<LowerBox>
							<FarmerComment>“소비자 분들의 투자로 더 효율적으로 소를 키울 수있었어요.”</FarmerComment>
						</LowerBox>
					</FarmerCard>
				</SwiperSlide>
			);
		}
		return result;
	};
	return (
		<SectionBox>
			<HeadLine2Style>
				생산자와 소비자가 함께 만드는 새로운 가치
				<BlueFontHead>농가가 말하는 공유문화</BlueFontHead>
			</HeadLine2Style>
			<SlideContainer>
				<Swiper
					scrollbar={{
						hide: false
					}}
					breakpoints={{
						1: {
							slidesPerView: 1
						},
						500: {
							slidesPerView: 2
						},
						800: {
							slidesPerView: 3
						},
						1200: {
							slidesPerView: 4
						},
						1800: {
							slidesPerView: 5
						}
					}}
					spaceBetween={55}
					className="mySwiper"
				>
					<div>{rendering()}</div>
				</Swiper>
			</SlideContainer>
		</SectionBox>
	);
};

export default StoryFarmReview;

// install Swiper modules
SwiperCore.use([Scrollbar]);
export const SectionBox = styled.div`
	width: 100%;
	height: fit-content;
	padding-top: 44px;
	display: flex;
	flex-flow: column;
	align-items: center;
	padding-bottom: 60px;
	@media ${(props) => props.theme.breakpoints.md} {
		/* height: 680px; */
		/* height: 550px; */
		padding-bottom: 40px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 580px;
		padding-left: 30px;
		padding-right: 30px;
		padding-bottom: 20px;
	}
`;

export const HeadLine2Style = styled(HeadLine2)`
	font-size: 58px;
	font-weight: 700;
	color: ${(props) => props.theme.alt.text2};
	@media screen and (max-width: 1100px) {
		font-size: 50px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 23px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		letter-spacing: -1.2px;
	}
`;
export const BlueFontHead = styled.div`
	color: ${(props) => props.theme.colors.point};
	text-align: center;
`;

export const SlideContainer = styled.div`
	width: 87%;
	max-width: 1420px;
	height: 608px;
	min-height: 608px;
	position: relative;
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 400px;
		min-height: 400px;
	}
`;

export const FarmerCard = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 30px;
`;
export const UpperBox = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const FarmerImg = styled.img`
	width: 76px;
	border-radius: 20px;
	@media ${(props) => props.theme.breakpoints.md} {
	}
	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;

export const FarmerInfo = styled.div`
	width: 42%;
	height: 130px;
	display: flex;
	flex-flow: column;
	justify-content: center;
`;

export const FarmerName = styled.p`
	font-size: 24px;
	margin-bottom: 10px;
	font-weight: 600;
	text-align: right;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 20px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;

export const FarmerLocation = styled.span`
	display: block;
	text-align: right;
	font-size: 18px;
	color: ${(props) => props.theme.colors.gray1};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
	}
`;

export const LowerBox = styled.div`
	display: flex;
	height: 50%;
`;
export const FarmerComment = styled.p`
	font-size: 18px;
	padding: 0 20px;
	text-align: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
	}
`;
