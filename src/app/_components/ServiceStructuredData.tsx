import { absoluteUrl } from "@/lib/seo";
import { StructuredData } from "./StructuredData";

type ServiceStructuredDataProps = {
	name: string;
	description: string;
	path: string;
};

export function ServiceStructuredData({ name, description, path }: ServiceStructuredDataProps) {
	const url = absoluteUrl(path);

	return (
		<StructuredData
			data={[
				{
					"@context": "https://schema.org",
					"@type": "Service",
					name,
					description,
					url,
					provider: {
						"@type": "Organization",
						name: "Payscribe",
						url: absoluteUrl("/"),
					},
				},
				{
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
						{ "@type": "ListItem", position: 2, name, item: url },
					],
				},
			]}
		/>
	);
}
