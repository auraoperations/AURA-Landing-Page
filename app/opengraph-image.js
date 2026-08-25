import { ImageResponse } from "next/og";

export const alt = "Aura — Agentic AI Tools & Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background: "#0a0b0c",
        color: "#f2f2ec",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#d4ff6b",
            display: "flex",
          }}
        />{" "}
        AURA<span style={{ color: "#d4ff6b" }}>/</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#d4ff6b",
            fontSize: 18,
            letterSpacing: "3px",
            marginBottom: 24,
          }}
        >
          AGENTIC AI TOOLS &amp; AUTOMATION
        </div>
        <div
          style={{
            fontSize: 74,
            lineHeight: 1,
            letterSpacing: "-5px",
            maxWidth: 960,
          }}
        >
          AI agents that don&apos;t just answer.{" "}
          <span style={{ color: "#d4ff6b" }}>They execute.</span>
        </div>
      </div>
      <div style={{ display: "flex", color: "#a8aba7", fontSize: 20 }}>
        Research&nbsp; → &nbsp;Reason&nbsp; → &nbsp;Execute&nbsp; →
        &nbsp;Review&nbsp; → &nbsp;Output
      </div>
    </div>,
    size,
  );
}
