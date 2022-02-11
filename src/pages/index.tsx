import type { NextPage } from 'next';
import Footer from '../common/global/Footer';
import SubFooter from '../common/global/SubFooter';
import Slogan from '../component/home/Slogan';
import Catchphrase from '../component/home/Catchphrase';
import IntroService from '../component/home/IntroService';
import ExplainBuy from '../component/home/ExplainBuy';
import ExplainGrow from '../component/home/ExplainGrow';
import ExplainMarket from '../component/home/ExplainMarket';
import ExplainSell from '../component/home/ExplainSell';
import CowChart from '../component/home/CowChart';
import SemiFaq from '../component/home/SemiFaq';

const Home: NextPage = () => {
	return (
		<>
			<Slogan />
			<Catchphrase />
			<IntroService />
			<ExplainBuy />
			<ExplainGrow />
			<ExplainMarket />
			<ExplainSell />
			<CowChart />
			<SemiFaq />
			<SubFooter />
			<Footer />
		</>
	);
};

export default Home;
