import { Dispatch, SetStateAction } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import ModeToggle from './ModeToggle';
import NavLinks from './NavLinks';

interface NavMenuAreaProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavMenuArea: React.FC<NavMenuAreaProps> = ({ setIsOpen }) => {
	return (
		<MenuArea>
			<NavLinks />
			<ModeToggle />
			<GiHamburgerMenu
				onClick={() => setIsOpen(true)}
				style={{
					color: 'white',
					fontSize: '28px',
					marginTop: '2px'
				}}
			/>
		</MenuArea>
	);
};

const MenuArea = styled.div`
	display: flex;
	gap: 34px;
	svg {
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		gap: 14px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		gap: 8px;
		a {
			display: none;
		}
		svg {
			display: block;
		}
	}
`;

export default NavMenuArea;
