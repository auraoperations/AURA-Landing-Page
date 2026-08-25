export const siteConfig = {
  name: "Aura",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.agenticaitoolsautomation.com",
  title: "Agentic AI Tools & Automation | AI Agents That Execute",
  description:
    "Aura is an agentic AI automation system for content operations. Specialized AI agents research, write, edit, review, and prepare work for publishing while you stay in control.",
  socialImage: "/opengraph-image",
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();
