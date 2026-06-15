import { ImageResponse } from "next/og";

export const alt = "Payscribe payment infrastructure";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					alignItems: "center",
					background: "#050505",
					color: "#ffffff",
					display: "flex",
					height: "100%",
					justifyContent: "center",
					padding: 72,
					width: "100%",
				}}
			>
				<div
					style={{
						alignItems: "center",
						display: "flex",
						gap: 48,
						width: "100%",
					}}
				>
					<div
						style={{
							alignItems: "center",
							background: "#ffffff",
							borderRadius: 40,
							display: "flex",
							height: 176,
							justifyContent: "center",
							width: 176,
						}}
					>
						<div
							style={{
								color: "#050505",
								fontSize: 104,
								fontWeight: 800,
								lineHeight: 1,
							}}
						>
							P
						</div>
					</div>
					<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
						<div
							style={{
								fontSize: 92,
								fontWeight: 800,
								letterSpacing: 0,
								lineHeight: 1,
							}}
						>
							Payscribe
						</div>
						<div
							style={{
								color: "#d4d4d4",
								fontSize: 42,
								fontWeight: 500,
								lineHeight: 1.25,
								maxWidth: 760,
							}}
						>
							Payment infrastructure for modern businesses.
						</div>
					</div>
				</div>
			</div>
		),
		size,
	);
}
