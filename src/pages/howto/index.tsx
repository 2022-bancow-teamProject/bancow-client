import Footer from '../../common/global/Footer';
import HowToUse from '../../component/howto/HowToUse';

export interface video {
	id: number;
	mmovie_name: string;
	movie_url: string;
}

const Howto = ({ videoLinks }: { videoLinks: Array<video> }) => {
	return (
		<>
			<HowToUse data={videoLinks} />
			<Footer />
		</>
	);
};

export async function getStaticProps() {
	const baseApi = process.env.NEXT_PUBLIC_BASE_API;

	const res = await fetch(`${baseApi}howto`);
	const { data: videoLinks } = await res.json();

	return {
		props: {
			videoLinks
		}
	};
}

export default Howto;
