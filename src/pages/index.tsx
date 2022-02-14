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

export interface review {
	id: number;
	content: string;
	title: string;
	buyer_name: string;
	farm_name: string;
	farm_ceo_name: string;
	farm_image: string;
}

const Home = ({ reviews }: { reviews: Array<review> }) => {
	console.log(reviews);
	return (
		<>
			<Slogan reviews={reviews} />
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

export async function getServerSideProps() {
	const baseApi = process.env.NEXT_PUBLIC_BASE_API;

	const res = await fetch(`${baseApi}buyer/distribute`);
	const { data: reviews } = await res.json();

	return { props: { reviews } };
}

export default Home;
