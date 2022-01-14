import Image from 'next/image';

const Loader = () => {
	return (
		<div className="z-50 min-h-screen fixed min-w-full top-0 left-0 w-screen flex justify-center items-center bg-gray-100">
			<Image
				height={132}
				width={132}
				src="/loading-animation.svg"
				alt="loading animation"
			/>
		</div>
	);
};

export default Loader;
