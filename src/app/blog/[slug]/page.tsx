import type { Metadata } from "next";
import { Footer } from "@/app/_components/Footer";
import { Nav } from "@/app/_components/Nav";
import Link from "next/link";
import Image from "next/image";
import { getPublishedPostBySlugFromApi } from "../_api/blog";
import { HighlightedBlogContent } from "../_components/HighlightedBlogContent";
import { notFound } from "next/navigation";
import { createPageMetadata, absoluteUrl } from "@/lib/seo";
import { StructuredData } from "@/app/_components/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPublishedPostBySlugFromApi(slug);
    if (!post) {
      return createPageMetadata({
        title: "Blog post",
        description: "Payscribe blog post.",
        path: `/blog/${slug}`,
        keywords: ["Payscribe", "blog", "payments", "fintech"],
        noIndex: true,
      });
    }
    const metadata = createPageMetadata({
      title: post.title,
      description: post.excerpt || "Payscribe blog post.",
      path: `/blog/${post.slug}`,
      image: post.coverImageUrl || undefined,
      type: "article",
      keywords: ["Payscribe", "blog", post.category, "payments", "fintech", "API"],
    });
    return {
      ...metadata,
      openGraph: {
        ...metadata.openGraph,
        type: "article",
        publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
        modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
        authors: ["Payscribe"],
      },
    };
  } catch {
    return createPageMetadata({
      title: "Blog post",
      description: "Payscribe blog post.",
      path: `/blog/${slug}`,
      keywords: ["Payscribe", "blog", "payments", "fintech"],
      noIndex: true,
    });
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublishedPostBySlugFromApi(slug);

  if (!post) notFound();

  const articleUrl = absoluteUrl(`/blog/${post.slug}`);
  const publishedAt = post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined;
  const updatedAt = post.updatedAt ? new Date(post.updatedAt).toISOString() : publishedAt;

  return (
    <div className="min-h-screen bg-white text-secondary">
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt || "Payscribe blog post.",
            image: post.coverImageUrl || absoluteUrl("/opengraph-image"),
            datePublished: publishedAt,
            dateModified: updatedAt,
            mainEntityOfPage: articleUrl,
            author: { "@type": "Organization", name: "Payscribe" },
            publisher: {
              "@type": "Organization",
              name: "Payscribe",
              logo: { "@type": "ImageObject", url: absoluteUrl("/app-icon.png") },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
              { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
            ],
          },
        ]}
      />
      <Nav />
      <main>
        <header className="relative overflow-hidden bg-secondary">
          <div className="absolute inset-0">
            {post.coverImageUrl?.trim() ? (
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            ) : null}
            <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/55 to-black/75" />
          </div>

          <div className="relative px-5 pb-12 pt-16 sm:pb-16 sm:pt-20">
            <div className="mx-auto container max-w-4xl">
              <Link href="/blog" className="inline-flex text-sm font-semibold text-white/90 hover:text-white hover:underline">
                ← Back to blog
              </Link>

              <h1 className="mt-6 max-w-full text-3xl font-semibold leading-tight text-white [overflow-wrap:anywhere] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-sm text-white/80">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "—"} • {post.category}
              </p>
            </div>
          </div>
        </header>

        <section className="px-5 py-12">
          <div className="mx-auto container max-w-3xl">
            <div className="blog-post-content">
              <HighlightedBlogContent html={post.contentHtml ?? ""} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
