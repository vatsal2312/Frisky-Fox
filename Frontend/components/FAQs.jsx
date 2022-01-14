import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import style from './blob.module.css';
import Image from 'next/image';

const FAQs = () => {
	useEffect(() => AOS.init({ duration: 700 }), []);

	const [question1, setQuestion1] = useState(false);
	const [question2, setQuestion2] = useState(false);
	const [question3, setQuestion3] = useState(false);
	const [question4, setQuestion4] = useState(false);
	const [question5, setQuestion5] = useState(false);

	const showQuestion1 = () =>
		question1 ? setQuestion1(false) : setQuestion1(true);
	const showQuestion2 = () =>
		question2 ? setQuestion2(false) : setQuestion2(true);
	const showQuestion3 = () =>
		question3 ? setQuestion3(false) : setQuestion3(true);
	const showQuestion4 = () =>
		question4 ? setQuestion4(false) : setQuestion4(true);
	const showQuestion5 = () =>
		question5 ? setQuestion5(false) : setQuestion5(true);

	return (
		<div className="bg-[#04293a] relative" id="faq">
			<div
				className={`absolute -top-10 -right-20 scale-125 z-0 h-96 w-96 opacity-25`}
			>
				<Image
					src="/blob/blob5.svg"
					layout="fill"
					className="scale-125"
				/>
			</div>
			<div
				className={`absolute top-80 -left-20 scale-125 z-0 h-96 w-96 opacity-25`}
			>
				<Image
					src="/blob/blob4.svg"
					layout="fill"
					className="scale-125"
				/>
			</div>
			<div className="max-w-5xl mx-auto py-12 px-4 z-40">
				<div className="space-y-12">
					<div className="flex justify-center">
						<h1 className="inline-block text-center text-3xl sm:text-5xl text-[#fc9973] border-[#fc9973] font-bold uppercase border-b-2">
							faqs
						</h1>
					</div>
					<div className="space-y-4">
						<div
							className="border-2 border-indigo-400 px-4 py-4 rounded-xl space-y-4"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div
								onClick={showQuestion1}
								className="flex justify-between items-center cursor-pointer text-indigo-50 font-semibold text-lg"
							>
								<h4 className="text-xl md:text-2xl">
									Why choose Solana & why a Solana NFT?
								</h4>
								<span>
									{question1 ? (
										<MinusIcon className="h-6 font-semibold" />
									) : (
										<PlusIcon className="h-6 font-semibold" />
									)}
								</span>
							</div>
							<p
								className={`${
									!question1 ? 'hidden' : ''
								} text-lg text-indigo-300`}
							>
								Solana is one of the fastest growing
								cryptocurrencies within the past year and the
								team at Ernest believes it is the future. We
								want to release on a platform where we believe
								it is much more fair with virtually NO gas fees
								and people getting priced out over a constant we
								can’t control. Coupled with the belief that
								Solana will be one of the biggest
								cryptocurrencies in the upcoming times, to us it
								was a no brainer.
							</p>
						</div>
						<div
							className="border-2 border-indigo-400 px-4 py-4 rounded-xl space-y-4"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div
								onClick={showQuestion2}
								className="flex justify-between items-center cursor-pointer text-indigo-50 font-semibold text-lg"
							>
								<h4 className="text-xl md:text-2xl">
									Why choose Solana & why a Solana NFT?
								</h4>
								<span>
									{question2 ? (
										<MinusIcon className="h-6 font-semibold" />
									) : (
										<PlusIcon className="h-6 font-semibold" />
									)}
								</span>
							</div>
							<p
								className={`${
									!question2 ? 'hidden' : ''
								} text-lg text-indigo-300`}
							>
								Solana is one of the fastest growing
								cryptocurrencies within the past year and the
								team at Ernest believes it is the future. We
								want to release on a platform where we believe
								it is much more fair with virtually NO gas fees
								and people getting priced out over a constant we
								can’t control. Coupled with the belief that
								Solana will be one of the biggest
								cryptocurrencies in the upcoming times, to us it
								was a no brainer.
							</p>
						</div>
						<div
							className="border-2 border-indigo-400 px-4 py-4 rounded-xl space-y-4"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div
								onClick={showQuestion3}
								className="flex justify-between items-center cursor-pointer text-indigo-50 font-semibold text-lg"
							>
								<h4 className="text-xl md:text-2xl">
									Why choose Solana & why a Solana NFT?
								</h4>
								<span>
									{question3 ? (
										<MinusIcon className="h-6 font-semibold" />
									) : (
										<PlusIcon className="h-6 font-semibold" />
									)}
								</span>
							</div>
							<p
								className={`${
									!question3 ? 'hidden' : ''
								} text-lg text-indigo-300`}
							>
								Solana is one of the fastest growing
								cryptocurrencies within the past year and the
								team at Ernest believes it is the future. We
								want to release on a platform where we believe
								it is much more fair with virtually NO gas fees
								and people getting priced out over a constant we
								can’t control. Coupled with the belief that
								Solana will be one of the biggest
								cryptocurrencies in the upcoming times, to us it
								was a no brainer.
							</p>
						</div>
						<div
							className="border-2 border-indigo-400 px-4 py-4 rounded-xl space-y-4"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div
								onClick={showQuestion4}
								className="flex justify-between items-center cursor-pointer text-indigo-50 font-semibold text-lg"
							>
								<h4 className="text-xl md:text-2xl">
									Why choose Solana & why a Solana NFT?
								</h4>
								<span>
									{question4 ? (
										<MinusIcon className="h-6 font-semibold" />
									) : (
										<PlusIcon className="h-6 font-semibold" />
									)}
								</span>
							</div>
							<p
								className={`${
									!question4 ? 'hidden' : ''
								} text-lg text-indigo-300`}
							>
								Solana is one of the fastest growing
								cryptocurrencies within the past year and the
								team at Ernest believes it is the future. We
								want to release on a platform where we believe
								it is much more fair with virtually NO gas fees
								and people getting priced out over a constant we
								can’t control. Coupled with the belief that
								Solana will be one of the biggest
								cryptocurrencies in the upcoming times, to us it
								was a no brainer.
							</p>
						</div>
						<div
							className="border-2 border-indigo-400 px-4 py-4 rounded-xl space-y-4"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div
								onClick={showQuestion5}
								className="flex justify-between items-center cursor-pointer text-indigo-50 font-semibold text-lg"
							>
								<h4 className="text-xl md:text-2xl">
									Why choose Solana & why a Solana NFT?
								</h4>
								<span>
									{question5 ? (
										<MinusIcon className="h-6 font-semibold" />
									) : (
										<PlusIcon className="h-6 font-semibold" />
									)}
								</span>
							</div>
							<p
								className={`${
									!question5 ? 'hidden' : ''
								} text-lg text-indigo-300`}
							>
								Solana is one of the fastest growing
								cryptocurrencies within the past year and the
								team at Ernest believes it is the future. We
								want to release on a platform where we believe
								it is much more fair with virtually NO gas fees
								and people getting priced out over a constant we
								can’t control. Coupled with the belief that
								Solana will be one of the biggest
								cryptocurrencies in the upcoming times, to us it
								was a no brainer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQs;
