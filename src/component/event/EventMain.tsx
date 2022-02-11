import React from 'react';
import EventCard from './components/EventCard';
import { Section, Container } from './eventMainStyle';

const EventMain = ({ isEnd }: { isEnd: boolean }) => {
	return (
		<Section>
			<Container>
				{isEnd && (
					<>
						<EventCard />
						<EventCard />
						<EventCard />
						<EventCard />
						<EventCard />
					</>
				)}
				{/* ssr로 프롭스 받아서 내용을 채우면 좋을 듯 */}
			</Container>
		</Section>
	);
};

export default EventMain;
