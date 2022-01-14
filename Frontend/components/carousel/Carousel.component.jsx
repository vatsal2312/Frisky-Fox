import Carousel from 'react-elastic-carousel';
import Item from './Item';
import Image from 'next/image';
import AOS from 'aos';
import { useEffect } from 'react';

const CarouselComponent = () => {
	useEffect(() => AOS.init({ duration: 800 }), []);
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];
	return (
		<>
			<Carousel breakPoints={breakPoints}>
				<Item className="flex flex-col">
					<Image
						data-aos-once="true"
						data-aos="zoom-in-down"
						height={256}
						width={256}
						src="/memapeq.jpg"
						alt="unknown person"
						className="rounded-xl"
					/>
					<p className="text-center text-lg mt-2 text-gray-200">
						hello
					</p>
				</Item>
				<Item className="flex flex-col">
					<Image
						height={256}
						width={256}
						src="/memapeq.jpg"
						alt="unknown person"
						data-aos-once="true"
						data-aos="zoom-in-down"
						className="rounded-xl"
					/>
					<p className="text-center text-lg mt-2 text-gray-200">
						hello
					</p>
				</Item>
				<Item className="flex flex-col">
					<Image
						height={256}
						width={256}
						src="/memapeq.jpg"
						alt="unknown person"
						data-aos-once="true"
						data-aos="zoom-in-down"
						className="rounded-xl"
					/>
					<p className="text-center text-lg mt-2 text-gray-200">
						hello
					</p>
				</Item>
				<Item className="flex flex-col">
					<Image
						height={256}
						width={256}
						src="/memapeq.jpg"
						alt="unknown person"
						data-aos-once="true"
						data-aos="zoom-in-down"
						className="rounded-xl"
					/>
					<p className="text-center text-lg mt-2 text-gray-200">
						hello
					</p>
				</Item>
				<Item className="flex flex-col">
					<Image
						height={256}
						width={256}
						src="/memapeq.jpg"
						alt="unknown person"
						data-aos-once="true"
						data-aos="zoom-in-down"
						className="rounded-xl"
					/>
					<p className="text-center text-lg mt-2 text-gray-200">
						hello
					</p>
				</Item>
				<Item className="flex flex-col">
					<Image
						height={256}
						width={256}
						src="/memapeq.jpg"
						alt="unknown person"
						data-aos-once="true"
						data-aos="zoom-in-down"
						className="rounded-xl"
					/>
					<p className="text-center text-lg mt-2 text-gray-200">
						hello
					</p>
				</Item>
				<Item className="flex flex-col">
					<Image
						height={256}
						width={256}
						src="/memapeq.jpg"
						alt="unknown person"
						data-aos-once="true"
						data-aos="zoom-in-down"
						className="rounded-xl"
					/>
					<p className="text-center text-lg mt-2 text-gray-200">
						hello
					</p>
				</Item>
			</Carousel>
		</>
	);
};

export default CarouselComponent;
