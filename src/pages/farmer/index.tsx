import React from 'react';
import Footer from '../../common/global/Footer';
import Section1 from '../../component/farmer/Section1';
import Section2 from '../../component/farmer/Section2';
import Section3 from '../../component/farmer/Section3';
import styled from 'styled-components';

export const StoryContainer = styled.div`
	width: 100%;
	background: ${(props) => props.theme.alt.backgroud1};
`;
const Farmer = () => {
	return (
		<StoryContainer>
			<Section1></Section1>
			<Section2></Section2>
			<Section3></Section3>
			<Footer></Footer>
		</StoryContainer>
	);
};

export default Farmer;
