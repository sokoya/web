import type { Metadata } from "next";
import { Footer } from "@/app/_components/Footer";
import { Nav } from "@/app/_components/Nav";
import Link from "next/link";
import Image from "next/image";
import { getPublishedPostBySlugFromApi } from "../_api/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPublishedPostBySlugFromApi(slug);
    if (!post) {
      return {
        title: "Blog post",
        description: "Payscribe blog post.",
        keywords: ["Payscribe", "blog", "payments", "fintech"],
      };
    }
    return {
      title: post.title,
      description: post.excerpt || "Payscribe blog post.",
      keywords: ["Payscribe", "blog", post.category, "payments", "fintech", "API"],
    };
  } catch {
    return {
      title: "Blog post",
      description: "Payscribe blog post.",
      keywords: ["Payscribe", "blog", "payments", "fintech"],
    };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: Awaited<ReturnType<typeof getPublishedPostBySlugFromApi>> = null;
  let loadFailed = false;
  try {
    post = await getPublishedPostBySlugFromApi(slug);
  } catch {
    loadFailed = true;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-secondary">
        <Nav />
        <main className="px-5 py-20">
          <div className="mx-auto container">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm sm:p-14">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Blog</p>
              <h1 className="mt-3 text-2xl font-semibold text-secondary sm:text-3xl">
                {loadFailed ? "Unable to load post" : "Post not found"}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                {loadFailed ? "Please try again in a moment." : "The post may have been removed or is not published yet."}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/blog"
                  className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Back to blog
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-secondary">
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

              <h1 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-5xl">
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
            <div className="prose prose-slate max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml ?? "" }} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

