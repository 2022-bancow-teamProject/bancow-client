import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Footer from '../../common/global/Footer';
import StoryFarmReview from '../../component/story/StoryFarmReview';
import StoryHeader from '../../component/story/StoryHeader';
import StoryProcessCards from '../../component/story/StoryProcessCards';
import StoryVideo from '../../component/story/StoryVideo';
import StoryWhoWeAre from '../../component/story/StoryWhoWeAre';
import StoryHistory from '../../component/story/StoryHistory';

export const StoryContainer = styled.div`
	width: 100%;
	background: ${(props) => props.theme.alt.backgroud1};
`;
const Story: NextPage = () => {
	return (
		<StoryContainer>
			<StoryHeader></StoryHeader>
			<StoryProcessCards></StoryProcessCards>
			<StoryVideo></StoryVideo>
			<StoryFarmReview></StoryFarmReview>
			<StoryWhoWeAre></StoryWhoWeAre>
			<StoryHistory></StoryHistory>
			<Footer></Footer>
		</StoryContainer>
	);
};

export default Story;
