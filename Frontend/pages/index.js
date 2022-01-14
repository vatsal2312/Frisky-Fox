import Head from 'next/head';
import About from '../components/About';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Roadmap from '../components/Roadmap';
import SpaceLaunch from '../components/SpaceLaunch';
import Team from '../components/Team';

export default function Home() {
	return (
		<div className="overflow-hidden">
			<Head>
				<title>Frisky Fox</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Hero />
				<About />
				<SpaceLaunch />
				<Roadmap />
				<FAQs />
				<Team />
				<Footer />
			</main>
		</div>
	);
}
