import Link from "next/link";

type Block =
	| { type: "heading" | "subheading" | "paragraph"; text: string }
	| { type: "list"; items: string[] };

function parseTerms(source: string): Block[] {
	const lines = source.replaceAll("\f", "").split("\n").map((line) => line.trim());
	const blocks: Block[] = [];
	let paragraph = "";
	let list: string[] = [];
	let currentBullet = "";

	const flushParagraph = () => {
		if (paragraph) blocks.push({ type: "paragraph", text: paragraph });
		paragraph = "";
	};
	const flushList = () => {
		if (currentBullet) list.push(currentBullet);
		if (list.length) blocks.push({ type: "list", items: list });
		list = [];
		currentBullet = "";
	};

	for (const line of lines.slice(2)) {
		if (!line || /^\((?:new document|redline)/i.test(line)) {
			flushParagraph();
			flushList();
			continue;
		}
		if (/^\d+\.\d+\s/.test(line)) {
			flushParagraph();
			flushList();
			const match = line.match(/^(\d+\.\d+\s+[^.]+\.)(?:\s+(.+))?$/);
			blocks.push({ type: "subheading", text: match?.[1] || line });
			if (match?.[2]) paragraph = match[2];
			continue;
		}
		if (/^\d+\.\s/.test(line)) {
			flushParagraph();
			flushList();
			blocks.push({ type: "heading", text: line });
			continue;
		}
		if (line.startsWith("- ")) {
			flushParagraph();
			if (currentBullet) list.push(currentBullet);
			currentBullet = line.slice(2);
			continue;
		}
		if (currentBullet) currentBullet += ` ${line}`;
		else paragraph += `${paragraph ? " " : ""}${line}`;
	}
	flushParagraph();
	flushList();
	return blocks;
}

function RichText({ text }: { text: string }) {
	const parts = text.split(/(https?:\/\/[^\s,]+|www\.[^\s,]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g);
	return parts.map((part, index) => {
		if (/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(part)) {
			return <Link key={`${part}-${index}`} href={`mailto:${part}`} className='font-medium text-primary underline'>{part}</Link>;
		}
		if (/^(?:https?:\/\/|www\.)/.test(part)) {
			const href = part.startsWith("http") ? part : `https://${part}`;
			return <Link key={`${part}-${index}`} href={href} className='font-medium text-primary underline'>{part}</Link>;
		}
		return part;
	});
}

export function ExtractedTermsContent({
	entity,
	jurisdiction,
	source,
	version,
}: {
	entity: string;
	jurisdiction: string;
	source: string;
	version: string;
}) {
	const blocks = parseTerms(source);

	return (
		<section id='terms-content' className='bg-white py-16'>
			<div className='mx-auto max-w-5xl px-5 text-secondary'>
				<p className='text-xs font-semibold uppercase tracking-[0.18em] text-primary'>{jurisdiction} terms</p>
				<h2 className='mt-3 text-3xl font-semibold'>Terms and Conditions</h2>
				<p className='mt-3 text-sm text-slate-500'><strong>{entity}</strong> &middot; Version {version}</p>

				<article className='mt-10 space-y-5 text-sm leading-relaxed text-slate-700 md:text-base'>
					{blocks.map((block, index) => {
						if (block.type === "heading") return <h3 key={index} className='pt-7 text-2xl font-semibold text-secondary first:pt-0'>{block.text}</h3>;
						if (block.type === "subheading") return <h4 key={index} className='pt-2 text-base font-semibold text-secondary'><RichText text={block.text} /></h4>;
						if (block.type === "list") return <ul key={index} className='list-disc space-y-2 pl-6'>{block.items.map((item, itemIndex) => <li key={itemIndex}><RichText text={item} /></li>)}</ul>;
						return <p key={index}><RichText text={block.text} /></p>;
					})}
				</article>
			</div>
		</section>
	);
}
