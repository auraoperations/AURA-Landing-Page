import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aura.example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aura — Run a content operation",
  description: "Four specialized AI agents research, write, edit, and prepare your content for publishing — while you stay in control.",
  keywords: ["content operation", "AI content workflow", "AI writing"],
  alternates: { canonical: "/" },
  openGraph: { title: "Aura — Run a content operation", description: "One idea. Four specialized agents. One publish-ready output.", type: "website" },
  twitter: { card: "summary_large_image", title: "Aura — Run a content operation", description: "One idea. Four specialized agents. One publish-ready output." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Aura", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "An AI-powered content operation for research, writing, editing, and publishing." };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
