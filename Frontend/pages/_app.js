import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Loader from '../components/Loader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 3000);
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className={`h-16`}>
					<Header />
				</div>
			)}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
