import styled from 'styled-components';
import { HeadLine5 } from '../../../common/typography';

export const Box = styled.div`
	width: 350px;
	height: 500px;
	background-color: ${(props) => props.theme.alt.backgroud4};
	border-radius: 15px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	padding: 40px 0;
`;

export const Title = styled(HeadLine5)`
	font-weight: 700;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	margin: 0 40px 10px;
`;

export const SubText = styled.span`
	display: inline-block;
	font-size: 18px;
	font-weight: 700;
	margin: 0 40px 20px;
	color: ${(props) => props.theme.colors.gray1};
`;

export const Desc = styled(SubText)`
	margin-top: 20px;
	height: 63px;
	overflow: hidden;
`;

export const Img = styled.div`
	width: 350px;
	height: 220px;
	background-image: url('https://via.placeholder.com/350x220');
	background-repeat: no-repeat;
	background-size: cover;
`;
