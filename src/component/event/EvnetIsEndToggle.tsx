import React, { Dispatch, SetStateAction } from 'react';
import { Section, Container, TabBox, Back, Tab } from './evnetIsEndToggleStyle';

interface Props {
	isEnd: boolean;
	setIsEnd: Dispatch<SetStateAction<boolean>>;
}

const EvnetIsEndToggle: React.FC<Props> = ({ isEnd, setIsEnd }) => {
	return (
		<Section>
			<Container>
				<TabBox>
					<Back className={isEnd ? 'active' : ''} />
					<Tab onClick={() => setIsEnd(false)}>진행중</Tab>
					<Tab onClick={() => setIsEnd(true)}>종료</Tab>
				</TabBox>
			</Container>
		</Section>
	);
};

export default EvnetIsEndToggle;
