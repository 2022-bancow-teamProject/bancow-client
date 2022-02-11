import type { NextPage } from 'next';
import Footer from '../common/global/Footer';
import SubFooter from '../common/global/SubFooter';
import Section0 from '../component/home/Slogan';
import Section1 from '../component/home/Catchphrase';
import Section2 from '../component/home/IntroService';
import Section3 from '../component/home/ExplainBuy';
import Section4 from '../component/home/ExplainGrow';
import Section5 from '../component/home/ExplainMarket';
import Section6 from '../component/home/ExplainSell';
import Section7 from '../component/home/CowChart';
import SemiFaq from '../component/home/SemiFaq';

const Home: NextPage = () => {
	return (
		<>
			<Section0 />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<SemiFaq />
			<SubFooter />
			<Footer />
		</>
	);
};

export default Home;
