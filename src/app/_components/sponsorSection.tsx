"use client";

import Image from "next/image";
import partner from "@/assets/images/partner1.png";

const partners = [partner, partner, partner, partner, partner];

const SponsorSection = () => {
	return (
		<section className='w-full bg-white py-12'>
			<div className='mx-auto container px-5'>
				<div className='overflow-hidden'>
					<div className='relative flex w-max animate-[sponsor-scroll_20s_linear_infinite]'>
						{/* First sequence */}
						{partners.map((logo, idx) => (
							<div
								key={`a-${idx}`}
								className='mx-12 flex items-center justify-center'
							>
								<Image src={logo} alt='Partner logo' className='h-10 w-auto' />
							</div>
						))}
						{/* Duplicate sequence for seamless loop */}
						{partners.map((logo, idx) => (
							<div
								key={`b-${idx}`}
								className='mx-12 flex items-center justify-center'
							>
								<Image src={logo} alt='Partner logo' className='h-10 w-auto' />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SponsorSection;
