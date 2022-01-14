import { useRouter } from 'next/router';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { useEffect, useRef } from 'react';
import style from './hero.module.css';
import { Parallax, Background } from 'react-parallax';

const Hero = () => {
	const boxRef = useRef(null);
	const bodyRef = useRef(null);
	const dress = useRef(null);

	const router = useRouter();

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.to('.dress', {
			scrollTrigger: {
				trigger: '.dress',
				start: 'center 80%',
				markers: false,
				scrub: true,
				toggleActions: 'restart pause reverse pause',
				end: '+=300',
			},
			opacity: 1,
			x: 100,
			duration: 0.5,
		});
		gsap.to('.eye', {
			scrollTrigger: {
				trigger: '.eye',
				start: 'center 75%',
				markers: false,
				scrub: true,
				toggleActions: 'restart pause reverse pause',
				end: '+=300',
			},
			opacity: 1,
			x: -100,
			duration: 0.5,
		});
		gsap.to('.hair', {
			scrollTrigger: {
				trigger: '.hair',
				start: 'center 75%',
				markers: false,
				scrub: true,
				toggleActions: 'restart pause reverse pause',
				end: '+=300',
			},
			opacity: 1,
			x: 100,
			duration: 0.5,
		});
		gsap.to('.earRing', {
			scrollTrigger: {
				trigger: '.earRing',
				start: 'center 75%',
				markers: false,
				scrub: true,
				toggleActions: 'restart pause reverse pause',
				end: '+=300',
			},
			opacity: 1,
			x: -100,
			duration: 0.5,
		});
		gsap.to('.bubbleGum', {
			scrollTrigger: {
				trigger: '.bubbleGum',
				start: 'center 75%',
				markers: false,
				scrub: true,
				toggleActions: 'restart pause reverse pause',
				end: '+=300',
			},
			opacity: 1,
			x: 100,
			duration: 0.5,
		});
	});

	return (
		<div
			className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
			id="home"
		>
			<Parallax blur={{ min: -15, max: 50 }} strength={700} className="">
				<Background className="w-screen">
					<img
						src="/assets/background.png"
						alt="background image"
						className={`h-screen w-screen mt-4 filter brightness-75 blur-sm`}
					/>
				</Background>
				<h1
					onClick={() => router.push('/mint')}
					className="absolute mt-20 z-40 inline left-1/2 -translate-x-1/2 bg-indigo-50 text-[#064663] rounded-lg text-6xl cursor-pointer border-[#064663] border-2 font-semibold py-2 px-4 md:hover:bg-[#064663] md:hover:border-indigo-50 md:hover:text-indigo-50 md:hover:scale-110 md:active:scale-95 transition-all duration-300 ease-out"
				>
					Mint
				</h1>

				<div
					className={`relative flex justify-center min-h-screen items-end`}
				>
					{/* <div className="h-96 w-96 animation-container"></div> */}
					<div className={`relative h-96 w-96 top-7`} ref={boxRef}>
						<div
							ref={bodyRef}
							className="absolute top-0 h-96 w-96 body"
						>
							<Image
								src="/layers/14.png"
								objectFit="cover"
								width={356}
								height={356}
							/>
						</div>
						<div
							className={`absolute opacity-0 top-0 h-96 w-96 dress ${style.dress}`}
						>
							<Image
								src="/layers/20.png"
								objectFit="cover"
								width={356}
								height={356}
							/>
						</div>
						<div
							className={`absolute opacity-0 top-0 h-96 w-96 eye ${style.eye}`}
						>
							<Image
								src="/layers/25.png"
								objectFit="cover"
								width={356}
								height={356}
							/>
						</div>
						<div
							className={`absolute opacity-0 top-0 h-96 w-96 hair ${style.hair}`}
						>
							<Image
								src="/layers/33.png"
								objectFit="cover"
								width={356}
								height={356}
							/>
						</div>
						<div
							className={`absolute opacity-0 top-0 h-96 w-96 earRing ${style.earRing}`}
						>
							<Image
								src="/layers/5.png"
								objectFit="cover"
								width={356}
								height={356}
							/>
						</div>
						<div
							className={`absolute opacity-0 top-0 h-96 w-96 bubbleGum ${style.bubbleGum}`}
						>
							<Image
								src="/layers/21.png"
								objectFit="cover"
								width={356}
								height={356}
							/>
						</div>
					</div>
				</div>
			</Parallax>
		</div>
	);
};

export default Hero;
