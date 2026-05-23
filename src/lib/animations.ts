import type { MotionProps } from "framer-motion";

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type InViewOptions = {
	reduced: boolean;
	delay?: number;
	duration?: number;
	amount?: number;
};

export function inViewFadeUp({
	reduced,
	delay = 0,
	duration = 0.7,
	amount = 0.35,
}: InViewOptions): MotionProps {
	if (reduced) return {};

	return {
		initial: { opacity: 0, y: 8 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: false, amount },
		transition: { duration, ease: SMOOTH_EASE, delay },
	};
}

export function inViewFromBottom({
	reduced,
	delay = 0,
	duration = 0.8,
	amount = 0.3,
}: InViewOptions): MotionProps {
	if (reduced) return {};

	return {
		initial: { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: false, amount },
		transition: { duration, ease: SMOOTH_EASE, delay },
	};
}

export function inViewFromRight({
	reduced,
	delay = 0,
	duration = 0.82,
	amount = 0.35,
}: InViewOptions): MotionProps {
	if (reduced) return {};

	return {
		initial: { opacity: 0, x: 24 },
		whileInView: { opacity: 1, x: 0 },
		viewport: { once: false, amount },
		transition: { duration, ease: SMOOTH_EASE, delay },
	};
}

export function inViewFromLeft({
	reduced,
	delay = 0,
	duration = 0.82,
	amount = 0.35,
}: InViewOptions): MotionProps {
	if (reduced) return {};

	return {
		initial: { opacity: 0, x: -24 },
		whileInView: { opacity: 1, x: 0 },
		viewport: { once: false, amount },
		transition: { duration, ease: SMOOTH_EASE, delay },
	};
}

export function inViewFromTop({
	reduced,
	delay = 0,
	duration = 0.8,
	amount = 0.3,
}: InViewOptions): MotionProps {
	if (reduced) return {};

	return {
		initial: { opacity: 0, y: -20 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: false, amount },
		transition: { duration, ease: SMOOTH_EASE, delay },
	};
}

/**
 * Hero-style "drop from top" reveal, used for headings/copy/CTA rows.
 * Slightly longer and smoother than the generic inViewFromTop.
 */
export function heroDropFromTop({
	reduced,
	delay = 0,
	duration = 0.9,
	amount = 0.45,
}: InViewOptions): MotionProps {
	if (reduced) return {};

	return {
		initial: { opacity: 0, y: -26 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: false, amount },
		transition: { duration, ease: SMOOTH_EASE, delay },
	};
}

/**
 * Subtle pulse attractor for primary CTAs on hero sections.
 */
export function heroCtaPulse(reduced: boolean): MotionProps {
	if (reduced) return {};

	return {
		animate: {
			scale: [1, 1.03, 1],
			boxShadow: [
				"0 0 0 rgba(33,77,192,0)",
				"0 18px 42px rgba(33,77,192,0.35)",
				"0 0 0 rgba(33,77,192,0)",
			],
		},
		transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
	};
}

export function inViewZoom({
	reduced,
	delay = 0,
	duration = 0.9,
	amount = 0.3,
}: InViewOptions): MotionProps {
	if (reduced) return {};

	return {
		initial: { opacity: 0, scale: 0.94 },
		whileInView: { opacity: 1, scale: 1 },
		viewport: { once: false, amount },
		transition: { duration, ease: SMOOTH_EASE, delay },
	};
}

export function subtleFloat(reduced: boolean, delay = 0): MotionProps {
	if (reduced) return {};

	return {
		animate: { y: [0, -1.5, 0] },
		transition: {
			duration: 5.6,
			repeat: Infinity,
			ease: "easeInOut",
			delay,
		},
	};
}
