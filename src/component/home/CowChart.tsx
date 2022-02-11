import React from 'react';
import { Emphasis } from '../../common/typography';
import { FlexVerticalCenterBox } from './components/common';
import { Section, Phrase, ChartBox } from './CowChartStyle';

const CowChart = () => {
	return (
		<Section>
			<FlexVerticalCenterBox>
				<Phrase>
					<Emphasis>캐시카우가 되는 순간, 설레지 않나요?</Emphasis>
				</Phrase>
				<ChartBox />
			</FlexVerticalCenterBox>
		</Section>
	);
};

export default CowChart;
