import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Wrapper } from '../../common/layouts';
import EventDetail from '../../component/event/components/EventDetail';
import EventHeader from '../../component/event/EventHeader';
import EvnetIsEndToggle from '../../component/event/EvnetIsEndToggle';
import EventMain from '../../component/event/EventMain';

const Event = () => {
	const { query } = useRouter();
	const [isEnd, setIsEnd] = useState(false);
	return (
		<Wrapper>
			<EventHeader />
			{query.eventID ? (
				<EventDetail />
			) : (
				<>
					<EvnetIsEndToggle isEnd={isEnd} setIsEnd={setIsEnd} />
					<EventMain isEnd={isEnd} />
				</>
			)}
		</Wrapper>
	);
};

export default Event;
