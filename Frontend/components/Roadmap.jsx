import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';

const Roadmap = () => {
	useEffect(() => AOS.init({ duration: 700 }), []);

	return (
		<div className="w-screen bg-[#04293a] relative" id="sitemap">
			<div className="max-w-5xl mx-auto py-12 px-4 pr-6 z-40 relative">
				<div className="flex flex-col space-y-12">
					<div className="flex justify-center">
						<h1 className="inline-block text-center text-3xl sm:text-5xl text-[#fc9973] border-[#fc9973] font-bold uppercase border-b-2">
							Development Roadmap
						</h1>
					</div>
					<div className="space-y-4 mr-2">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div
								className="space-y-2 ring-2 ring-opacity-80 rounded-xl ring-gray-50 px-4 py-2"
								data-aos-once="true"
								data-aos="zoom-in-up"
							>
								<h4 className="text-center text-gray-100 font-bold text-3xl">
									Sweep it up
								</h4>
								<p className="text-gray-50 font-normal text-lg">
									Every week for the next 3 months after
									launch, 90% of royalties (8%) will be
									allocated to sweeping the floor on our
									secondary markets. The other 10% will be
									used for the upkeep of our socials and the
									prosperity of our lovely E.T.
								</p>
							</div>
							<div
								className="space-y-2 ring-2 ring-opacity-80 rounded-xl ring-gray-50 px-4 py-2"
								data-aos-once="true"
								data-aos="zoom-in-up"
							>
								<h4 className="text-center text-gray-100 font-bold text-3xl">
									Spaceship Special
								</h4>
								<p className="text-gray-50 font-normal text-lg">
									All Ernest holders will be airdropped a
									spaceship at an undisclosed time post-mint,
									make sure you're holding on to an Ernest NFT
									to receive this drop...you never know where
									this spaceship is going to take him.
								</p>
							</div>
						</div>
						<div
							className="space-y-2 ring-2 ring-opacity-80 rounded-xl ring-gray-50 px-4 py-2"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<h4 className="text-center text-gray-100 font-bold text-3xl">
								Ernest In-Siders
							</h4>
							<p className="text-gray-50 font-normal text-lg">
								Owners of our dear Ernest that hold 2 NFTs will
								be allowed access into an exclusive DAO. All
								participants will be able to contribute in our
								future plans and decisions on which space route
								Ernest should take in the future. In addition to
								this, we will be holding a monthly chat with our
								trading experts who will be giving our holders
								technical insight into everything trading and
								crypto related.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`absolute -bottom-16 -left-16 h-96 w-96 z-0 opacity-30`}
			>
				<Image
					src="/blob/blob3.svg"
					layout="fill"
					className="scale-125"
				/>
			</div>
			<div
				className={`absolute -top-16 -right-20 h-96 w-96 z-0 opacity-30`}
			>
				<Image
					src="/blob/blob4.svg"
					layout="fill"
					className="scale-125"
				/>
			</div>
		</div>
	);
};

export default Roadmap;
