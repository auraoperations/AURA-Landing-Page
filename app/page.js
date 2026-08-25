"use client";

import { useEffect, useState } from "react";

const agents = [
  [
    "01",
    "Researcher",
    "RESEARCH",
    "Finds the angle, supporting evidence, useful references, and the question your audience actually wants answered.",
  ],
  [
    "02",
    "Writer",
    "WRITE",
    "Turns the research brief into a first draft using your defined voice, rhythm, and structure.",
  ],
  [
    "03",
    "Editor",
    "EDIT",
    "Catches weak sections, filler, repetition, and places where the reader stops learning.",
  ],
  [
    "04",
    "Publisher",
    "PUBLISH",
    "Transforms approved content into a platform-ready final output.",
  ],
];
const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    ↗
  </span>
);
const Wordmark = () => (
  <a className="wordmark" href="#top" aria-label="Aura home">
    <i />
    AURA<span>/</span>
  </a>
);

function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  function submit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setState("error");
    setState("loading");
    window.setTimeout(() => setState("success"), 500);
  }
  if (state === "success")
    return (
      <div className="form-success">
        <span>✓</span>
        <strong>You&apos;re on the list.</strong>
        <small>We&apos;ll be in touch when Aura is ready.</small>
      </div>
    );
  return (
    <form className="waitlist" onSubmit={submit} noValidate>
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setState("idle");
        }}
        placeholder="Enter your email address"
        inputMode="email"
        autoComplete="email"
      />
      <button type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Joining..." : "Get early access"}
        <Arrow />
      </button>
      {state === "error" && (
        <p className="form-error">Enter a valid email address to join.</p>
      )}
    </form>
  );
}

function HeroPipeline() {
  return (
    <div
      className="hero-pipeline"
      aria-label="An idea moving through four content agents"
    >
      <div className="idea-node">
        <span>INPUT</span>
        <b>
          How founders create
          <br />
          with less friction
        </b>
        <i className="pulse" />
      </div>
      <div className="rail">
        <i />
        <i />
        <i />
        <i />
      </div>
      {agents.map(([number, name, tag], index) => (
        <div className={`hero-stage stage-${index + 1}`} key={name}>
          <span>{number}</span>
          <b>{name}</b>
          <em>{tag}</em>
          <i className="status-dot" />
        </div>
      ))}
      <div className="ready-node">
        <span>OUTPUT</span>
        <b>
          READY TO
          <br />
          PUBLISH
        </b>
        <i>↗</i>
      </div>
    </div>
  );
}

function MiniVisual({ index }) {
  if (index === 0)
    return (
      <div className="mini research">
        <div className="search">⌕ &nbsp; solo founder content</div>
        <div className="result">
          <b>Content becomes an operation</b>
          <em>source / industry report</em>
        </div>
        <div className="result dim">
          <b>What founders actually need</b>
          <em>source / audience question</em>
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div className="mini writer">
        <div className="mini-top">
          <span>Draft</span>
          <span>1,247 words</span>
        </div>
        <h5>Stop treating content like a task.</h5>
        <p>
          Systems turn a single idea into momentum. The difference is a clear
          process.
        </p>
        <div className="text-line" />
        <div className="text-line short" />
      </div>
    );
  if (index === 2)
    return (
      <div className="mini editor">
        {[
          "Open with the reader’s real constraint.",
          "Make the value concrete here.",
          "Cut this repeated idea.",
        ].map((t, i) => (
          <div className={`edit-row ${i === 2 ? "muted" : ""}`} key={t}>
            <span className="marker">0{i + 1}</span>
            <p>{t}</p>
          </div>
        ))}
      </div>
    );
  return (
    <div className="mini publish">
      {[
        ["in", "LinkedIn article"],
        ["𝕏", "Thread"],
        ["◉", "Newsletter"],
      ].map(([icon, title]) => (
        <div className="platform" key={title}>
          <span>{icon}</span>
          <b>{title}</b>
          <i>Ready</i>
        </div>
      ))}
    </div>
  );
}

function Dashboard() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="dashboard">
      <div className="dash-header">
        <div>
          <span className="eyebrow">CONTENT PIPELINE</span>
          <h3>
            How solo founders are replacing
            <br />
            entire content teams with AI
          </h3>
        </div>
        <div className={`dash-state ${ready ? "is-ready" : ""}`}>
          <i />
          {ready ? "READY TO PUBLISH" : "IN PROGRESS"}
        </div>
      </div>
      <div className="dash-flow">
        {agents.map(([num, name, tag], index) => (
          <div
            className={`dash-step ${index === 2 && !ready ? "active" : "complete"}`}
            key={name}
          >
            <div className="step-index">{index < 3 || ready ? "✓" : num}</div>
            <div className="step-content">
              <span>{tag}</span>
              <b>{name}</b>
              <p>
                {index === 0
                  ? "Angle found · 3 points · 2 sources"
                  : index === 1
                    ? "First draft generated · 1,247 words"
                    : index === 2
                      ? ready
                        ? "3 improvements applied"
                        : "3 improvements found"
                      : "Approval requested"}
              </p>
            </div>
            <div className="step-status">
              {index < 2 || ready
                ? "COMPLETE"
                : index === 2
                  ? "REVIEWING"
                  : "WAITING"}
            </div>
          </div>
        ))}
      </div>
      <button className="dashboard-control" onClick={() => setReady(!ready)}>
        {ready ? "Restart preview" : "Approve edits"}
        <Arrow />
      </button>
    </div>
  );
}

export default function Home() {
  // test
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <main id="top">
      <nav className={scrolled ? "scrolled" : ""}>
        <Wordmark />
        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "≡"}
        </button>
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#how">How it works</a>
          <a href="#pipeline">The pipeline</a>
          <a href="#early">Early access</a>
        </div>
        <a className="nav-cta" href="#early">
          Join waitlist <Arrow />
        </a>
      </nav>
      <section className="hero">
        <div className="aurora" />
        <p className="kicker">
          <span />
          Agentic AI automation for people with a point of view
        </p>
        <h1>
          Stop creating content.
          <br />
          <em>Start running</em> an AI content operation.
        </h1>
        <p className="hero-copy">
          Aura is an agentic AI automation system where specialized AI agents
          research, write, edit, review, and prepare your content for publishing
          — while you stay in control.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#early">
            Join the waitlist <Arrow />
          </a>
          <a className="text-link" href="#how">
            See how it works <span>↓</span>
          </a>
        </div>
        <HeroPipeline />
        <p className="scroll-note">
          SCROLL TO EXPLORE <span>↓</span>
        </p>
      </section>
      <section className="old-new section" id="how">
        <div className="section-label">01 / THE SHIFT</div>
        <div className="old-grid">
          <div>
            <h2>
              Most people use AI
              <br />
              one prompt at a time.
            </h2>
            <div className="old-loop">
              Idea → Open chat → Prompt → Generate → Rewrite → Research again →
              Edit → Format → Repeat
            </div>
          </div>
          <p className="statement">
            That&apos;s not a content operation.
            <br />
            <strong>
              That&apos;s manual labor with
              <br />
              an AI keyboard.
            </strong>
          </p>
        </div>
        <div className="new-model">
          <span>THE BETTER MODEL</span>
          <div>
            IDEA <i>→</i> RESEARCH <i>→</i> WRITE <i>→</i> EDIT <i>→</i> PUBLISH
          </div>
          <p>One brief. A defined system. Work that moves forward.</p>
        </div>
      </section>
      <section className="agents section">
        <div className="section-label">02 / THE OPERATORS</div>
        <div className="heading-row">
          <h2>
            One system. Four
            <br />
            <em>specialized minds.</em>
          </h2>
          <p>
            Each agent has one job. Together, they make the work feel
            inevitable.
          </p>
        </div>
        <div className="agent-grid">
          {agents.map(([number, name, tag, description], index) => (
            <article className="agent-card" key={name}>
              <header>
                <span>{number}</span>
                <i className="status-dot" />
              </header>
              <MiniVisual index={index} />
              <div className="agent-name">
                <span>{tag}</span>
                <h3>{name}</h3>
              </div>
              <p>{description}</p>
              <a href="#pipeline">
                Explore role <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section id="pipeline" className="pipeline-section section">
        <div className="section-label">03 / THE PIPELINE</div>
        <div className="heading-row">
          <h2>
            Watch an idea
            <br />
            become <em>an asset.</em>
          </h2>
          <p>
            A persistent production line, not another isolated conversation.
          </p>
        </div>
        <Dashboard />
      </section>
      <section className="memory section">
        <div className="memory-copy">
          <div className="section-label">04 / SHARED MEMORY</div>
          <h2>
            Your agents don&apos;t
            <br />
            start <em>from zero.</em>
          </h2>
          <p>
            Every stage works from the same live operating context. The research
            knows what the draft needs. The editor knows what the research
            proved.
          </p>
          <div className="memory-chain">
            RESEARCHER ↓ WRITER ↓ EDITOR ↓ PUBLISHER
          </div>
        </div>
        <div className="code-window">
          <header>
            <div>
              <i />
              <i />
              <i />
            </div>
            <span>PIPELINE.md</span>
            <b>⌘</b>
          </header>
          <pre>
            <code>
              <em># Content Pipeline</em>
              {"\n\n"}
              <strong>## NEXT UP</strong>
              {"\n"}How solo founders are replacing content teams{"\n\n"}
              <strong>## BRIEF</strong>
              {"\n"}
              <mark>Research complete. Angle selected.</mark>
              {"\n\n"}
              <strong>## DRAFT</strong>
              {"\n"}Draft complete. 1,247 words.{"\n\n"}
              <strong>## EDITS</strong>
              {"\n"}3 improvements applied.{"\n\n"}
              <strong>## STATUS</strong>
              {"\n"}
              <mark>APPROVED</mark>
            </code>
          </pre>
          <div className="cursor" />
        </div>
      </section>
      <section className="approval section">
        <div className="approval-title">
          <div className="section-label">05 / HUMAN APPROVAL</div>
          <h2>
            The machine handles production.
            <br />
            <em>You handle judgment.</em>
          </h2>
        </div>
        <div className="gates">
          {[
            ["Research", "Approved"],
            ["Draft", "Approved"],
            ["Edit", "Approved"],
            ["Publish", "Ready"],
          ].map(([title, status], index) => (
            <div className="gate" key={title}>
              <span>0{index + 1}</span>
              <b>{title}</b>
              <p>
                <i>{index < 3 ? "✓" : "→"}</i> {status}
              </p>
            </div>
          ))}
        </div>
        <p className="approval-end">
          You don&apos;t disappear from the process.
          <br />
          You move up the stack.
        </p>
      </section>
      <section className="before-after section">
        <div className="before">
          <span>BEFORE</span>
          <h2>
            “I need to write
            <br />
            something today.”
          </h2>
          <p>Idea → prompt → rewrite → context switch → start again.</p>
        </div>
        <div className="after">
          <span>AFTER</span>
          <h2>
            “There&apos;s a researched
            <br />
            <em>draft waiting for me.</em>”
          </h2>
          <div className="after-rail">
            ● Research &nbsp; → &nbsp; Write &nbsp; → &nbsp; Edit &nbsp; →
            &nbsp; Publish
          </div>
        </div>
      </section>
      <section className="philosophy">
        <p>
          AI shouldn&apos;t replace your judgment.
          <br />
          <em>It should remove the work that surrounds it.</em>
        </p>
      </section>
      <section id="early" className="early">
        <div className="early-star">✦</div>
        <p className="kicker">
          <span />
          COMING SOON
        </p>
        <h2>
          The content machine
          <br />
          is almost <em>online.</em>
        </h2>
        <p>
          We&apos;re building the system that turns ideas into researched,
          written, reviewed, and publish-ready content — without turning you
          into a full-time prompt engineer.
        </p>
        <Waitlist />
        <small>Early users will help shape the first version.</small>
      </section>
      <section className="final-cta">
        <div>
          <p>ONE IDEA. FOUR AGENTS. YOUR JUDGMENT.</p>
          <h2>
            Your next content team
            <br />
            might be <em>four agents.</em>
          </h2>
        </div>
        <a className="button primary" href="#early">
          Join the waitlist <Arrow />
        </a>
      </section>
      <footer>
        <Wordmark />
        <span>© 2026 Aura. Coming soon.</span>
        <div>
          <a href="#how">How it works</a>
          <a href="#early">Early access</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </main>
  );
}
