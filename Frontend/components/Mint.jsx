import Image from 'next/image';

const Mint = () => {
	return (
		<div className="bg-[#04293a]">
			<div className="max-w-6xl min-h-screen -mt-5 mx-auto py-12 px-4">
				<div className="flex justify-center">
					<Image
						src="/assets/logo.png"
						width={256}
						height={96}
						objectFit="contain"
					/>
				</div>
				<div className="flex flex-col lg:flex-row justify-between items-center mt-0 lg:mt-4 space-y-6 lg:space-y-0">
					<div className="hidden lg:block">
						<Image
							src="/memapeq.jpg"
							width={266}
							height={326}
							className="rounded-full"
							objectFit="cover"
						/>
					</div>
					<div className="flex-1 min-h-full">
						<div className="mx-4 bg-gray-800 rounded-xl shadow-md py-12 px-20 space-y-4">
							<p className="text-center text-4xl font-bold text-gray-100">
								<span>0</span>
								<span>/</span>
								<span>5555</span>
							</p>
							<p className="text-center text-sm text-blue-400">
								<a href="#">ajasklj3eoiwnsaljienx903e</a>
							</p>
							<p className="text-center text-gray-200 text-lg">
								Lorem ipsum dolor sit.
							</p>
							<p className="text-center text-gray-200 text-lg">
								Lorem, ipsum dolor.
							</p>
							<p className="text-center text-gray-200 text-lg">
								Lorem ipsum dolor sit amet.
							</p>
							<div className="flex justify-center">
								<p className="inline bg-yellow-300 md:hover:bg-yellow-200 cursor-pointer uppercase px-4 py-2 rounded-full font-semibold text-gray-800">
									button
								</p>
							</div>
						</div>
					</div>
					<div>
						<Image
							src="/memapeq.jpg"
							width={266}
							height={326}
							className="rounded-full"
							objectFit="cover"
						/>
					</div>
				</div>
				<div>
					<div className="flex flex-col space-y-4 mt-6 text-center text-gray-300">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Itaque autem, culpa voluptatibus illum
							expedita labore asperiores! Harum, quam. Expedita
							rerum tenetur quae optio necessitatibus sequi ipsa,
							consectetur quod modi ab!
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Modi quis quam nobis ex vitae perspiciatis!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mint;
