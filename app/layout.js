import "./globals.css";
import { absoluteUrl, siteConfig } from "../lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: "%s | Aura" },
  description: siteConfig.description,
  keywords: [
    "agentic AI tools automation",
    "agentic AI automation",
    "AI agents",
    "AI agent automation",
    "AI workflow automation",
    "AI agent orchestration",
    "AI content automation",
    "content operations",
  ],
  alternates: { canonical: "/" },
  category: "technology",
  applicationName: "Aura",
  authors: [{ name: "Aura" }],
  creator: "Aura",
  publisher: "Aura",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aura",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Aura — Agentic AI Tools & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
};
export const viewport = { themeColor: "#0a0b0c", colorScheme: "dark" };

export default function RootLayout({ children }) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Aura",
      url: siteConfig.url,
      logo: absoluteUrl("/favicon.ico"),
      description:
        "Aura develops agentic AI automation for content operations.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Aura",
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Aura",
      url: siteConfig.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      image: absoluteUrl(siteConfig.socialImage),
      description:
        "An upcoming agentic AI automation system for research, writing, editing, review, and publishing workflows.",
      featureList: [
        "Specialized AI agents",
        "AI workflow automation",
        "Shared pipeline context",
        "Human approval gates",
      ],
    },
  ];
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </body>
    </html>
  );
}
