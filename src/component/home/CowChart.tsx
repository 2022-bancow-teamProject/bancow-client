import { Emphasis } from '../../common/typography';
import { HeadLine2 } from '../../common/typography';
import { CenteredColBox } from '../../common/layouts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

type Idata = Array<{ year: string; price: number }>;

const CowChart = ({ chart }: { chart: Array<{}> }) => {
	const data: Idata = [];
	for (const [key, value] of Object.entries(chart[0])) {
		data.push({ year: key, price: value as number });
	}
	return (
		<Section>
			<CenteredColBox>
				<Phrase>
					<Emphasis>캐시카우가 되는 순간, 설레지 않나요?</Emphasis>
				</Phrase>
				<ChartBox>
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
							data={data}
							margin={{
								top: 20,
								right: 30,
								left: 30,
								bottom: 0
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="year" />
							<YAxis />
							<Tooltip />
							<Area type="monotone" dataKey="price" stroke="#0048FA" fill="#6B96FF" />
						</AreaChart>
					</ResponsiveContainer>
				</ChartBox>
			</CenteredColBox>
		</Section>
	);
};

const Section = styled.div`
	overflow: hidden;
	transition: ease all 0.5s;
	padding: 90px;
	background-color: ${(props) => props.theme.alt.backgroud1};
`;

const Phrase = styled(HeadLine2)`
	margin-bottom: 30px;
	color: ${(props) => props.theme.alt.text4};
	@media screen and (max-width: 1160px) {
		font-size: 50px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 46px;
		width: 460px;
		padding-left: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 30px;
		padding-left: 0px;
		width: 300px;
		text-align: center;
	}
`;

const ChartBox = styled.div`
	width: 100%;
	height: 700px;
	opacity: 0.5;
	transition: ease all 0.5s;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;

export default CowChart;
