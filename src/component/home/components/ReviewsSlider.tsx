import SlideCard from './SlideCard';
import { Col } from '../../../common/layouts';
import styled, { keyframes } from 'styled-components';
import { review } from '../../../pages';

const ReviewsSlider = ({ reviews }: { reviews: Array<review> }) => {
	const topSlide = reviews.slice(0, 4);
	const bottomSlide = reviews.slice(4, 8);

	return (
		<SlideGroup>
			<Slider>
				<SlideTrack>
					{topSlide.map((data) => (
						<SlideCard key={data.id} {...data} />
					))}
					{topSlide.map((data) => (
						<SlideCard key={data.id + '2'} {...data} />
					))}
				</SlideTrack>
			</Slider>
			<Slider delay={-200}>
				<SlideTrack>
					{bottomSlide.map((data) => (
						<SlideCard key={data.id} {...data} />
					))}
					{bottomSlide.map((data) => (
						<SlideCard key={data.id + '2'} {...data} />
					))}
				</SlideTrack>
			</Slider>
		</SlideGroup>
	);
};

const animate = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-480px * 4)); // - 카드 너비 * 카드 수 
  }
`;

const animatesm = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-346px * 4)); // - 카드 너비 * 카드 수 
  }
`;

const SlideGroup = styled(Col)`
	position: absolute;
	bottom: 0;
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 408px;
	}
`;

const Slider = styled.div<{ delay?: number }>`
	transform: ${({ delay }) => delay && `translateX(${delay}px);`};
`;

const SlideTrack = styled.div`
	display: flex;
	width: calc(480px * 8); // 카드 너비 * 카드 수 * 2
	height: 300px;
	animation: ${animate} 26s linear infinite;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: calc(346px * 8);
		animation: ${animatesm} 26s linear infinite;
	}
`;

export default ReviewsSlider;
