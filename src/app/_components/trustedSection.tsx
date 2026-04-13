import React from "react";
import trust from "@/assets/images/trusted.png";
import Image from "next/image";

const TrustedSection = () => {
	return (
		<div className='mx-auto container px-5 py-20'>
			<h2 className='text-3xl text-center font-semibold text-secondary'>
				Trusted by Businesses Around the World
			</h2>
			<p className='text-center text-sm text-slate-600 max-w-lg+ mx-auto'>
				Businesses everywhere trust Payscribe to move money faster, simpler, and
				without borders.
			</p>
			<div className='mx-auto mt-10 flex w-full max-w-3xl justify-center'>
				<Image
					src={trust}
					className='animate-spin w-full'
					style={{ animationDuration: "20s" }}
					alt='trust'
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default TrustedSection;
