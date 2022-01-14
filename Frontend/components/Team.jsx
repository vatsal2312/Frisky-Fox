import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Team = () => {
	useEffect(() => AOS.init({ duration: 700 }), []);

	return (
		<div className="bg-[#04293a]" id="team">
			<div className={`max-w-5xl mx-auto py-12 px-4`}>
				<div className="space-y-12">
					<div className="flex justify-center">
						<h1 className="inline-block text-center text-3xl sm:text-5xl text-[#fc9973] border-[#fc9973] font-bold uppercase border-b-2">
							Meet the team
						</h1>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
						<div
							className="space-y-2"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div className="flex justify-center">
								<Image
									src="/memapeq.jpg"
									height={212}
									width={212}
									objectFit="cover"
									className="rounded-2xl"
								/>
							</div>
							<h6 className="text-center text-indigo-100 font-semibold text-xl">
								Name
							</h6>
							<p className="text-center text-lg text-indigo-200">
								Occupation
							</p>
						</div>
						<div
							className="space-y-2"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div className="flex justify-center">
								<Image
									src="/memapeq.jpg"
									height={212}
									width={212}
									objectFit="cover"
									className="rounded-2xl"
								/>
							</div>
							<h6 className="text-center text-indigo-100 font-semibold text-xl">
								Name
							</h6>
							<p className="text-center text-lg text-indigo-200">
								Occupation
							</p>
						</div>
						<div
							className="space-y-2"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div className="flex justify-center">
								<Image
									src="/memapeq.jpg"
									height={212}
									width={212}
									objectFit="cover"
									className="rounded-2xl"
								/>
							</div>
							<h6 className="text-center text-indigo-100 font-semibold text-xl">
								Name
							</h6>
							<p className="text-center text-lg text-indigo-200">
								Occupation
							</p>
						</div>
						<div
							className="space-y-2"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div className="flex justify-center">
								<Image
									src="/memapeq.jpg"
									height={212}
									width={212}
									objectFit="cover"
									className="rounded-2xl"
								/>
							</div>
							<h6 className="text-center text-indigo-100 font-semibold text-xl">
								Name
							</h6>
							<p className="text-center text-lg text-indigo-200">
								Occupation
							</p>
						</div>
						<div
							className="space-y-2"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div className="flex justify-center">
								<Image
									src="/memapeq.jpg"
									height={212}
									width={212}
									objectFit="cover"
									className="rounded-2xl"
								/>
							</div>
							<h6 className="text-center text-indigo-100 font-semibold text-xl">
								Name
							</h6>
							<p className="text-center text-lg text-indigo-200">
								Occupation
							</p>
						</div>
						<div
							className="space-y-2"
							data-aos-once="true"
							data-aos="zoom-in-up"
						>
							<div className="flex justify-center">
								<Image
									src="/memapeq.jpg"
									height={212}
									width={212}
									objectFit="cover"
									className="rounded-2xl"
								/>
							</div>
							<h6 className="text-center text-indigo-100 font-semibold text-xl">
								Name
							</h6>
							<p className="text-center text-lg text-indigo-200">
								Occupation
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
