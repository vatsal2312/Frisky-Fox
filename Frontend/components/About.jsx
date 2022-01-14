import CarouselComponent from './carousel/Carousel.component';
import Image from 'next/image';
import { useRouter } from 'next/router';

const About = () => {
	const router = useRouter();

	return (
		<div className="w-screen bg-[#04293a] pb-12 " id="about">
			<div className="max-w-5xl mx-auto py-12 px-4 z-40">
				<div className="flex flex-col space-y-8">
					<div className="">
						<h1 className="text-center text-[#fc9973] font-semibold text-4xl sm:text-5xl">
							<span>
								<Image
									src="/assets/logo[a].gif"
									height={46}
									width={46}
									objectFit="cover"
									className=""
								/>
							</span>{' '}
							Who is{' '}
							<span className="text-yellow-500 border-b-2 border-red-500">
								Frisky
							</span>{' '}
							?{' '}
							<span>
								<Image
									src="/assets/logo[a]-rotated.gif"
									height={46}
									width={46}
									objectFit="cover"
									className=""
								/>
							</span>
						</h1>
					</div>
					<div className="space-y-4">
						<p className="text-center font-medium text-xl sm:text-2xl text-purple-100">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Aliquam voluptas
						</p>
						<p className="text-center font-normal text-xl sm:text-2xl text-purple-200">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Minima eligendi officia facere, qui
							perspiciatis culpa voluptatum, laboriosam vero
							cupiditate magni quam hic autem expedita ipsa ullam
							cumque optio incidunt similique voluptas deleniti?
							Et nemo eum.
						</p>
					</div>
					<div>
						<p
							onClick={() => router.push('/mint')}
							className="text-center font-semibold text-2xl sm:text-3xl text-yellow-400 cursor-pointer sm:hover:text-yellow-500 transition-all duration-200 ease-out"
						>
							Click here to continue
						</p>
					</div>
				</div>
			</div>
			<div className="">
				<CarouselComponent />
			</div>
		</div>
	);
};

export default About;
