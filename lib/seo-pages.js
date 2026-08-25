export const seoPages = {
  "agentic-ai": {
    title: "What Is Agentic AI?",
    description: "Learn how agentic AI differs from a single-response chatbot and why specialized agents are useful for repeatable content operations.",
    eyebrow: "AGENTIC AI / EXPLAINER",
    h1: "Agentic AI turns a request into a process.",
    intro: "Agentic AI describes systems that can work through a goal in stages: gathering context, making a plan, taking defined actions, checking the result, and handing control back to a person. The point is not to remove judgment. It is to make recurring knowledge work more deliberate and less manual.",
    sections: [
      ["More than a generated response", "A conventional AI interaction starts with a prompt and ends with an answer. An agentic workflow can preserve a brief, divide work between specialists, and pass useful context from one stage to the next. That makes it a better model for work that has dependencies, review points, and a clear final output."],
      ["Why it matters for content", "Content production rarely begins with a blank page and ends with a draft. It involves research, a point of view, structure, editing, and a publishing decision. AURA applies agentic AI to that sequence so each step has a job, a shared context, and a human approval point."],
      ["A practical boundary", "Agentic AI is not an excuse to publish without oversight. A useful system makes its work inspectable, allows people to adjust the brief, and keeps final editorial judgment with the person responsible for the content."],
    ],
    related: ["ai-agents", "ai-workflow-automation", "ai-content-automation"],
  },
  "ai-agents": {
    title: "What Are AI Agents?",
    description: "Understand AI agents, specialized roles, and how multi-agent systems can support a reviewable content workflow.",
    eyebrow: "AI AGENTS / EXPLAINER",
    h1: "AI agents are defined by the work they are responsible for.",
    intro: "An AI agent is a software component given a bounded role, context, and a way to produce or act on information. The useful distinction is not whether it can chat; it is whether it can move a well-defined part of a workflow forward in a way a person can review.",
    sections: [
      ["Specialists beat vague handoffs", "A single general-purpose assistant can be useful, but it often asks one prompt to carry research, drafting, critique, and formatting at once. Specialized AI agents keep those responsibilities separate. The researcher looks for evidence, the writer builds a draft, the editor tests clarity, and the publisher prepares the approved work."],
      ["How agents differ from chatbots", "A chatbot is mainly an interface for a conversation. An AI agent can use a persistent brief, return structured work to another stage, and wait for a review decision. It may use a conversational interface, but the value comes from the workflow around the conversation."],
      ["The role of orchestration", "Multi-agent systems need an agreed context and clear handoffs. In AURA, PIPELINE.md represents that shared operational memory: what is next, what has been learned, what changed, and what still requires approval."],
    ],
    related: ["agentic-ai", "ai-workflow-automation", "ai-content-automation"],
  },
  "ai-workflow-automation": {
    title: "AI Workflow Automation That Keeps Humans in Control",
    description: "See how AI workflow automation can organize research, drafting, review, and approvals without treating content as a black box.",
    eyebrow: "AI WORKFLOW AUTOMATION",
    h1: "Automation is useful when the workflow stays visible.",
    intro: "AI workflow automation connects repeatable steps so work does not have to be restarted from scratch. For editorial work, that means carrying a brief forward, routing the right task to the right specialist, and making the next decision obvious rather than automating every decision away.",
    sections: [
      ["A workflow has states, not just prompts", "A real workflow can show that research is complete, a draft is ready, edits need review, or publishing is waiting on an approval. Those states reduce context switching and make it easier to see where work is blocked."],
      ["Automation with approval gates", "The highest-value content decisions still need taste and accountability. AURA is designed around approval gates for research, draft, edit, and publish. Automation prepares the work; the editor-in-chief decides what moves forward."],
      ["Designed for recurring production", "A repeatable workflow helps a team build a content operation around its own voice and standards. It is not a promise of one-click quality. It is a way to make the surrounding production work more consistent and reviewable."],
    ],
    related: ["agentic-ai", "ai-agents", "ai-content-automation"],
  },
  "ai-content-automation": {
    title: "AI Content Automation for Content Operations",
    description: "Explore a practical approach to AI content automation: specialized agents for research, writing, editing, and publishing preparation.",
    eyebrow: "AI CONTENT AUTOMATION",
    h1: "Content automation should create space for better judgment.",
    intro: "AI content automation is most useful when it supports the whole production cycle, not just generation. AURA connects research, writing, editing, and publishing preparation into one content operation while leaving the final call with the human responsible for the work.",
    sections: [
      ["Research before drafting", "Useful content starts with a credible angle, supporting information, and a question worth answering. A research stage gives the writer something stronger to work from than an empty prompt."],
      ["A draft is not the final output", "Writing automation can create momentum, but it should not hide weak logic or flatten a brand voice. An editorial stage can surface repetition, unclear sections, and opportunities to make the reader learn something specific."],
      ["Publishing is a separate job", "A publish-ready asset needs the right format and a final check. Treating publishing preparation as its own step helps keep distribution needs from distorting research or drafting too early."],
    ],
    related: ["agentic-ai", "ai-agents", "ai-workflow-automation"],
  },
};
