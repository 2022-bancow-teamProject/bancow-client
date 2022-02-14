import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const DetailLink = () => {
	return (
		<Link href="/howto">
			<a>
				<DetailLinkText>
					자세히 보러가기 <IoIosArrowForward />
				</DetailLinkText>
			</a>
		</Link>
	);
};

const DetailLinkText = styled.h5`
	font-size: 24px;
	color: ${(props) => props.theme.colors.subPoint};
	display: flex;
	align-items: center;
	svg {
		margin-left: 8px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
		position: absolute;
		top: -20px;
		right: 0;
		color: ${(props) => props.theme.colors.subGray};
		text-decoration: underline;
		svg {
			display: none;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 12px;
		top: -40px;
		right: 0;
	}
`;

export default DetailLink;
