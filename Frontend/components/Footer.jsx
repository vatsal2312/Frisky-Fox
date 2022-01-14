import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="bg-[#064663]">
			<div className="max-w-5xl mx-auto py-12 px-4">
				<div className="flex flex-col space-y-2 justify-center items-center">
					<div className="flex space-x-8">
						<Link href="https://www.google.com">
							<a
								target="_blank"
								className="sm:hover:scale-125 sm:active:scale-105 transition-all duration-300 ease-out"
							>
								<Image
									src="/logo/ig.png"
									height={28}
									width={28}
									objectFit="contain"
								/>
							</a>
						</Link>
						<Link href="https://www.google.com">
							<a
								target="_blank"
								className="sm:hover:scale-125 sm:active:scale-105 transition-all duration-300 ease-out"
							>
								<Image
									src="/logo/tw.png"
									height={28}
									width={28}
									objectFit="contain"
								/>
							</a>
						</Link>
						<Link href="https://www.google.com">
							<a
								target="_blank"
								className="sm:hover:scale-125 sm:active:scale-105 transition-all duration-300 ease-out"
							>
								<Image
									src="/logo/disc.png"
									height={28}
									width={28}
									objectFit="contain"
								/>
							</a>
						</Link>
						<Link href="https://www.google.com">
							<a
								target="_blank"
								className="sm:hover:scale-125 sm:active:scale-105 transition-all duration-300 ease-out"
							>
								<Image
									src="/logo/github.png"
									height={28}
									width={28}
									objectFit="contain"
								/>
							</a>
						</Link>
					</div>
					<p className="text-center uppercase text-gray-200 font-medium">
						© FRISKY FOX IN DISGUISE, 2021
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
