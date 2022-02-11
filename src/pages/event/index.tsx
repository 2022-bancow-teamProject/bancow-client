import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Wrapper } from '../../common/layouts';
import EventDetail from '../../component/event/components/EventDetail';
import Section1 from '../../component/event/Section1';
import Section2 from '../../component/event/Section2';
import Section3 from '../../component/event/Section3';

const Event = () => {
	const { query } = useRouter();
	const [isEnd, setIsEnd] = useState(false);
	return (
		<Wrapper>
			<Section1 />
			{query.eventID ? (
				<EventDetail />
			) : (
				<>
					<Section2 isEnd={isEnd} setIsEnd={setIsEnd} />
					<Section3 isEnd={isEnd} />
				</>
			)}
		</Wrapper>
	);
};

export default Event;
