import SlideCard from './SlideCard';
import { Col } from '../../../common/layouts';
import styled, { keyframes } from 'styled-components';

const mockData = [
	{
		url: 'https://via.placeholder.com/45',
		title: '제목입니다제목입니다',
		content:
			' 주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저 같은 일반 투자자도 이제 투자가 가능해졌네요.'
	},
	{
		url: 'https://via.placeholder.com/45',
		title: '제목입니다제목입니다',
		content:
			' 주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저 같은 일반 투자자도 이제 투자가 가능해졌네요.'
	},
	{
		url: 'https://via.placeholder.com/45',
		title: '제목입니다제목입니다',
		content:
			' 주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저 같은 일반 투자자도 이제 투자가 가능해졌네요.'
	},
	{
		url: 'https://via.placeholder.com/45',
		title: '제목입니다제목입니다',
		content:
			' 주변에 한우목장들이 있어 산업이 유망하다고 알고는 있었는데, 저 같은 일반 투자자도 이제 투자가 가능해졌네요.'
	}
];

const ReviewsSlider = () => {
	return (
		<SlideGroup>
			<Slider>
				<SlideTrack>
					{mockData.map((data, idx) => (
						<SlideCard key={idx} {...data} />
					))}
					{mockData.map((data, idx) => (
						<SlideCard key={idx} {...data} />
					))}
				</SlideTrack>
			</Slider>
			<Slider delay={-200}>
				<SlideTrack>
					{mockData.map((data, idx) => (
						<SlideCard key={idx} {...data} />
					))}
					{mockData.map((data, idx) => (
						<SlideCard key={idx} {...data} />
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
