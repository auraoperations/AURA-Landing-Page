import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <p
          style={{
            color: "#d4ff6b",
            fontSize: ".75rem",
            letterSpacing: ".12em",
          }}
        >
          404 / LOST IN THE PIPELINE
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            letterSpacing: "-.07em",
            margin: ".5rem 0 1rem",
          }}
        >
          This page doesn&apos;t exist.
        </h1>
        <p style={{ color: "#989b99", marginBottom: "1.5rem" }}>
          Return to Aura&apos;s agentic AI content operation.
        </p>
        <Link className="button primary" href="/">
          Back to home <span className="arrow">↗</span>
        </Link>
      </div>
    </main>
  );
}
