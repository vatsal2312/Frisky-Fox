import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
	const [open, setOpen] = useState(true);

	const router = useRouter();
	// console.log(router.pathname);

	const openNavlist = () => (!open ? setOpen(true) : setOpen(false));

	useEffect(() => AOS.init({ duration: 1400 }), []);
	return (
		<div
			className="bg-gray-800 fixed top-0 left-0 w-full z-50"
			data-aos-once="true"
			data-aos="fade-down"
			data-aos-duration="1000"
		>
			<div className="flex items-center justify-between max-w-5xl mx-auto py-2 px-4 relative">
				<div data-aos-once="true" data-aos="fade-right">
					{/* <h1
						data-aos-once="true"
						onClick={() => router.push('/')}
						data-aos="fade-right"
						className="font-semibold text-2xl text-gray-200 cursor-pointer"
					>
						Frisky Fox
					</h1> */}
					<Image
						src="/assets/logo.png"
						height={52}
						width={152}
						objectFit="fill"
						onClick={() => {
							router.push('/');
						}}
						className="cursor-pointer"
					/>
				</div>
				<div>
					<ul className="hidden sm:flex text-xl font-medium space-x-6 text-gray-300">
						{router.pathname === '/' ? (
							<>
								<li
									data-aos-once="true"
									data-aos="fade-left"
									className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
								>
									<Link href="#home">
										<a>Home</a>
									</Link>
								</li>
								<li
									data-aos-once="true"
									data-aos="fade-left"
									className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
								>
									<Link href="#about">
										<a>About</a>
									</Link>
								</li>
								<li
									data-aos-once="true"
									data-aos="fade-left"
									className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
								>
									<Link href="#sitemap">
										<a>Sitemap</a>
									</Link>
								</li>
								<li
									data-aos-once="true"
									data-aos="fade-left"
									className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
								>
									<Link href="#faq">
										<a>FAQ</a>
									</Link>
								</li>
								<li
									data-aos-once="true"
									data-aos="fade-left"
									className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
								>
									<Link href="#team">
										<a>Team</a>
									</Link>
								</li>
							</>
						) : (
							<>
								<li
									onClick={() => router.push('/')}
									data-aos-once="true"
									data-aos="fade-left"
									className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
								>
									Home
								</li>
							</>
						)}
					</ul>
				</div>
				{open ? (
					<div className="inline-block sm:hidden">
						<MenuAlt3Icon
							onClick={openNavlist}
							className="cursor-pointer h-8 text-gray-300"
						/>
					</div>
				) : (
					<div className="inline-block sm:hidden">
						<XIcon
							onClick={openNavlist}
							className="cursor-pointer h-8 text-gray-300"
						/>
					</div>
				)}
				{!open && (
					<div className="sm:hidden absolute top-24 left-1/2 -translate-x-1/2 h-80 z-40 w-11/12 bg-gray-800 rounded-xl flex justify-center items-center">
						<ul className="flex flex-col justify-center items-center text-lg font-medium space-y-10 text-gray-300">
							{router.pathname === '/' ? (
								<>
									<li
										data-aos-once="true"
										data-aos="fade-left"
										data-aos-duration="300"
										className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
									>
										<Link href="#about">
											<a>About</a>
										</Link>
									</li>
									<li
										data-aos-once="true"
										data-aos="fade-left"
										data-aos-duration="350"
										className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
									>
										<Link href="#sitemap">
											<a>Sitemap</a>
										</Link>
									</li>
									<li
										data-aos-once="true"
										data-aos="fade-left"
										data-aos-duration="400"
										className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
									>
										<Link href="#faq">
											<a>FAQ</a>
										</Link>
									</li>
									<li
										data-aos-once="true"
										data-aos="fade-left"
										data-aos-duration="450"
										className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
									>
										<Link href="#team">
											<a>Team</a>
										</Link>
									</li>
								</>
							) : (
								<>
									<li
										onClick={() => {
											router.push('/');
										}}
										data-aos-once="true"
										data-aos="fade-left"
										className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
									>
										Home
									</li>
								</>
							)}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
