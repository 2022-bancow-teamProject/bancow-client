import Link from 'next/link';
import { CenteredColBox } from '../../../common/layouts';
import { HeadLine2, HeadLine4 } from '../../../common/typography';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const SemiFaqHeader = () => {
	return (
		<CenteredColBox>
			<MainText>자주 묻는 질문</MainText>
			<SubText>
				뱅카우를 처음 시작하시나요?
				<br />
				가장 자주 묻는 질문을
				<br />
				간추려 보았어요
			</SubText>
			<Link href="/howto">
				<a>
					<LinkText>
						자세히 보러가기 <IoIosArrowForward />
					</LinkText>
				</a>
			</Link>
		</CenteredColBox>
	);
};

const MainText = styled(HeadLine2)`
	margin-bottom: 30px;
	text-align: center;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 30px;
	}
`;

const SubText = styled(HeadLine4)`
	margin-bottom: 20px;
	text-align: center;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-bottom: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-bottom: 30px;
	}
`;

const LinkText = styled.h5`
	font-size: 24px;
	color: ${(props) => props.theme.colors.subPoint};
	display: flex;
	align-items: center;
	svg {
		margin-left: 8px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

export default SemiFaqHeader;
