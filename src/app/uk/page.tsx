import type { Metadata } from "next";
import { UkHero } from "@/app/uk/_components/UkHero";
import { UkHowItWorks } from "@/app/uk/_components/UkHowItWorks";
import { UkRegulationPassport } from "@/app/uk/_components/UkRegulationPassport";
import { UkEntitySeparation } from "@/app/uk/_components/UkEntitySeparation";
import { UkWaitlist } from "@/app/uk/_components/UkWaitlist";

export const metadata: Metadata = {
	title: "Payscribe Limited (UK) — Send money to Nigeria",
	description:
		"Payscribe Limited is preparing to launch regulated money remittance between the UK and Nigeria. See rates and fees upfront — recipients get paid in Naira, usually within minutes.",
	keywords: [
		"Payscribe",
		"UK",
		"Nigeria",
		"money transfer",
		"remittance",
		"GBP to NGN",
		"FCA",
		"regulated",
	],
};

export default function UkLandingPage() {
	return (
		<>
			<UkHero />
			<UkHowItWorks />
			<UkRegulationPassport />
			<UkEntitySeparation />
			<UkWaitlist />
		</>
	);
}
