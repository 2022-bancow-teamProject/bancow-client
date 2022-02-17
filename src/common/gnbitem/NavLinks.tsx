import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { HeadLine6 } from '../typography';
import styled from 'styled-components';

const NavLinks = () => {
	const { pathname } = useRouter();
	return (
		<>
			<Link href="/story">
				<a className={pathname === '/story' ? 'active' : ''}>
					<LinkTab>뱅카우정보</LinkTab>
				</a>
			</Link>
			<Link href="/howto">
				<a className={pathname === '/howto' ? 'active' : ''}>
					<LinkTab>이용방법</LinkTab>
				</a>
			</Link>
			<Link href="/notice">
				<a className={pathname === '/notice' ? 'active' : ''}>
					<LinkTab>공지</LinkTab>
				</a>
			</Link>
			<Link href="/event">
				<a className={pathname.includes('/event') ? 'active' : ''}>
					<LinkTab>이벤트</LinkTab>
				</a>
			</Link>
			<Link href="/faq">
				<a className={pathname === '/faq' ? 'active' : ''}>
					<LinkTab>FAQ</LinkTab>
				</a>
			</Link>
			<Link href="/farmer">
				<a className={pathname === '/farmer' ? 'active' : ''}>
					<LinkTab>입점문의</LinkTab>
				</a>
			</Link>
		</>
	);
};

const LinkTab = styled(HeadLine6)`
	color: ${(props) => props.theme.alt.text1};
	a.active & {
		color: ${(props) => props.theme.alt.text5};
	}
	@media ${(props) => props.theme.breakpoints.md} {
		color: ${(props) => props.theme.colors.white};
		a.active & {
			color: ${(props) => props.theme.colors.gray4};
		}
	}
`;

export default NavLinks;
