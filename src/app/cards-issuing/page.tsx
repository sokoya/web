"use client";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { CardsIssuingHero } from "./_components/CardsIssuingHero";
import { CardsIssuingFeatures } from "./_components/CardsIssuingFeatures";
import CardSolutions from "./_components/CardSolutions";
import StartBuilding from "../_components/startBuilding";
import { CardServices } from "./_components/CardServices";

export default function CardsIssuingPage() {
	return (
		<div className='min-h-screen bg-gray-50 text-white'>
			<Nav variant='white' />
			<CardsIssuingHero />
			<CardsIssuingFeatures />
			<CardServices />
			<CardSolutions />
			<StartBuilding />
			<Footer />
		</div>
	);
}
