"use client";

import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { BookADemoHero } from "./_components/BookADemoHero";
import { Calcom } from "./_components/Calcom";

export default function BookADemoPage() {
	return (
		<div className='min-h-screen bg-secondary text-white'>
			<Nav variant='white' />
			<BookADemoHero />
			<Calcom />
			<Footer />
		</div>
	);
}
