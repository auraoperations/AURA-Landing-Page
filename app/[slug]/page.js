import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, siteConfig } from "../../lib/site";
import { seoPages } from "../../lib/seo-pages";
import styles from "./page.module.css";

export function generateStaticParams() {
  return Object.keys(seoPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = seoPages[slug];
  if (!page) return {};
  const path = `/${slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${page.title} | Aura`,
      description: page.description,
      url: path,
    },
    twitter: { title: `${page.title} | Aura`, description: page.description },
  };
}

export default async function TopicPage({ params }) {
  const { slug } = await params;
  const page = seoPages[slug];
  if (!page) notFound();
  const path = `/${slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: absoluteUrl(path),
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: absoluteUrl(path),
        },
      ],
    },
  ];
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className="wordmark" href="/" aria-label="Aura home">
          <i />
          AURA<span>/</span>
        </Link>
        <nav aria-label="Topic navigation">
          <Link href="/">Product</Link>
          <Link href="/#pipeline">How it works</Link>
          <Link href="/#early">Early access</Link>
        </nav>
      </header>
      <article>
        <div className={styles.eyebrow}>{page.eyebrow}</div>
        <h1>{page.h1}</h1>
        <p className={styles.intro}>{page.intro}</p>
        <div className={styles.rule} />
        <div className={styles.sections}>
          {page.sections.map(([heading, body]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
        <aside className={styles.cta}>
          <p>Build a content operation, not another prompt habit.</p>
          <Link className="button primary" href="/#early">
            Join Aura&apos;s waitlist <span className="arrow">↗</span>
          </Link>
        </aside>
        <section className={styles.related} aria-labelledby="related-topics">
          <p id="related-topics">RELATED TOPICS</p>
          <div>
            {page.related.map((relatedSlug) => (
              <Link key={relatedSlug} href={`/${relatedSlug}`}>
                {seoPages[relatedSlug].title} <span>↗</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <footer className={styles.footer}>
        <span>© 2026 Aura. Agentic AI for content operations.</span>
        <Link href="/">Back to product</Link>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
