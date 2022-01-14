import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import style from './blob.module.css';

const SpaceLaunch = () => {
	useEffect(() => AOS.init({ duration: 700 }), []);

	return (
		<div className="w-screen bg-[#04293a] relative">
			<div
				className={`absolute z-10 -right-8 h-96 w-96 ${style.blob1}`}
			></div>
			<div
				className={`absolute z-10 -left-8 h-96 w-96 ${style.blob2}`}
			></div>
			<div className={`max-w-5xl mx-auto py-12 px-4 pr-6 z-20`}>
				<div className="flex flex-col space-y-12">
					<div className="flex justify-center">
						<h1 className="inline-block text-center text-3xl sm:text-5xl text-[#fc9973] border-[#fc9973] font-bold uppercase border-b-2">
							Space launch
						</h1>
					</div>
					<div className="space-y-4 mr-2">
						<div className="flex space-y-4 flex-col justify-center sm:items-center">
							<div
								className="space-y-2 rounded-xl px-4 py-2 max-w-md"
								data-aos-once="true"
								data-aos="zoom-in-up"
							>
								<h4 className="text-[#ecb365] font-semibold text-2xl sm:text-3xl">
									25% sold
								</h4>
								<p className="text-[#fafafa] font-normal text-lg">
									First 25% of minters will automatically
									enter a mini giveaway with an opportunity to
									win a prize of 66 SOL.
								</p>
							</div>
							<div
								className="space-y-2 rounded-xl px-4 py-2 max-w-md"
								data-aos-once="true"
								data-aos="zoom-in-up"
							>
								<h4 className="text-[#ecb365] font-semibold text-2xl sm:text-3xl">
									50% sold
								</h4>
								<p className="text-[#fafafa] font-normal text-lg">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Amet eveniet facere alias
									delectus, minus eligendi harum? Assumenda
									perferendis beatae incidunt, nesciunt
									explicabo voluptatem officiis doloremque
									commodi aut voluptatibus magni. Commodi
									deleniti itaque ut,
								</p>
							</div>
							<div
								className="space-y-2 rounded-xl px-4 py-2 max-w-md"
								data-aos-once="true"
								data-aos="zoom-in-up"
							>
								<h4 className="text-[#ecb365] font-semibold text-2xl sm:text-3xl">
									75% sold
								</h4>
								<p className="text-[#fafafa] font-normal text-lg">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Quia reprehenderit sit,
									vero molestiae ipsa blanditiis reiciendis
									laborum, voluptatem consequatur impedit
									nihil nulla! Dolore deserunt eum similique
									vero. Maxime rerum officia a dolor quam fuga
									laboriosam.
								</p>
							</div>
							<div
								className="space-y-2 rounded-xl px-4 py-2 max-w-md"
								data-aos-once="true"
								data-aos="zoom-in-up"
							>
								<h4 className="text-[#ecb365] font-semibold text-2xl sm:text-3xl">
									100% sold
								</h4>
								<p className="text-[#fafafa] font-normal text-lg">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Ad perferendis
									consectetur, expedita, alias itaque illum,
									molestiae corrupti laborum a qui non
									tenetur! Eligendi, nam quibusdam?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpaceLaunch;
