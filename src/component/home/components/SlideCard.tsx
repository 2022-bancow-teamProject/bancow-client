import { Radius30WhiteBox } from '../../../common/layouts';
import styled from 'styled-components';

interface SlideCardProps {
	buyer_name: string;
	content: string;
	farm_image: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ buyer_name, content, farm_image }) => {
	return (
		<ReviewCard>
			<Header>
				<Profile src={farm_image} alt="profile" />
				<Title>구매자 {buyer_name}님</Title>
			</Header>
			<Content>{content}</Content>
		</ReviewCard>
	);
};

export const ReviewCard = styled(Radius30WhiteBox)`
	width: 480px;
	height: 254px;
	margin: 15px;
	padding: 32px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 346px;
		height: 280px;
	}
`;

const Header = styled.div`
	height: 46px;
	display: flex;
	align-items: center;
`;

const Profile = styled.img`
	border: 1px solid blue;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	margin-right: 12px;
`;

const Title = styled.p`
	font-size: 26px;
	line-height: 1.5;
	margin-left: 10px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 22px;
	}
`;

const Content = styled.div`
	width: 96%;
	margin: 0 auto;
	padding-top: 16px;
	font-size: 20px;
	line-height: 1.4;
	color: ${(props) => props.theme.colors.gray1};
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 90%;
		padding-top: 30px;
		font-size: 18px;
	}
`;

export default SlideCard;
