import Link from 'next/link';
import { BackgroundImg, Wrapper } from '../common/layouts';
import { HeadLine2, HeadLine5, EmphasisSub } from '../common/typography';
import styled from 'styled-components';

const NotFound = () => {
	return (
		<Box>
			<InfoText>
				404 Error <ImgAlert url="/404page/page404-2.png" />
			</InfoText>
			<Desc>
				요청하신 페이지를 찾을 수 없습니다.
				<br />
				입력하신 주소가 정확한지 다시 한번 확인해주세요.
			</Desc>
			<Desc>
				<Link href="/">
					<a>
						<EmphasisSub>홈으로 돌아가기</EmphasisSub>
					</a>
				</Link>
			</Desc>
			<Img url="/404page/page404-1.png" />
		</Box>
	);
};

const Box = styled(Wrapper)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const InfoText = styled(HeadLine2)`
	display: flex;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 40px;
	}
`;

const Desc = styled(HeadLine5)`
	text-align: center;
	margin: 20px 0;
	color: ${(props) => props.theme.colors.gray1};
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
	}
`;

const Img = styled(BackgroundImg)`
	width: 206px;
	height: 212px;
	margin-top: 68px;
`;

const ImgAlert = styled(BackgroundImg)`
	width: 54px;
	height: 54px;
	margin-top: 7px;
	margin-left: 16px;
`;

export default NotFound;
