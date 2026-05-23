/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { inViewZoom } from "@/lib/animations";

export function Calcom() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "15min" });
			cal("ui", {
				styles: { branding: { brandColor: "#020414" } },
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);
	return (
		<motion.div
			{...inViewZoom({ reduced: reducedMotion, delay: 0.06, duration: 0.95, amount: 0.2 })}
			className='mx-auto container px-5 pb-20'
		>
			<div className='overflow-hidden rounded-3xl bg-white shadow-sm'>
				<Cal
					namespace='15min'
					calLink='payscribe/15min'
					style={{ width: "100%", height: "760px", overflow: "scroll" }}
					config={{ layout: "month_view" }}
				/>
			</div>
		</motion.div>
	);
}
