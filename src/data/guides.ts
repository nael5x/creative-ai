import type { Evidence, Localized } from "../types";

export type GuideRef = { kind: "tool" | "component" | "domain"; id: string };

export type GuideSection = {
  heading: Localized;
  body: Localized;
  refs?: GuideRef[];
};

export type Guide = {
  id: string;
  domainId: string;
  title: Localized;
  summary: Localized;
  sections: GuideSection[];
  relatedToolIds: string[];
  relatedComponentIds: string[];
  sources: Evidence[];
  updatedAt: string;
};

const L = (en: string, ar: string): Localized => ({ en, ar });

export const guides: Guide[] = [
  {
    id: "research-stack",
    domainId: "research",
    title: L("Build a research stack with grounded sources", "ابنِ ستاك بحث بمصادر موثّقة"),
    summary: L(
      "A workflow for gathering, grounding and organizing research using connected AI tools — assembled from our comparison data, not generic advice.",
      "مسار للجمع والتوثيق وتنظيم البحث باستخدام أدوات ذكاء مترابطة — مبني من بيانات المقارنة لدينا، لا نصائح عامة."
    ),
    sections: [
      {
        heading: L("1. Start from a source-grounded assistant", "1. ابدأ بمساعد موثّق المصادر"),
        body: L(
          "Use a research-oriented assistant for first-pass synthesis, then verify with primary sources. Connect your files and references so answers stay tied to your material rather than the open web.",
          "استخدم مساعدًا موجّهًا للبحث للمسودة الأولى، ثم تحقّق من المصادر الأولية. اربط ملفاتك ومراجعك كي تبقى الإجابات مرتبطة بمادتك لا بالويب المفتوح."
        ),
        refs: [
          { kind: "tool", id: "perplexity" },
          { kind: "tool", id: "notebooklm" },
          { kind: "component", id: "chatgpt-gpts" },
        ],
      },
      {
        heading: L("2. Extend with your own tools via connectors", "2. وسّع بأدواتك عبر الموصِّلات"),
        body: L(
          "Model Context Protocol (MCP) servers let an assistant reach your local files, databases and apps. Custom instructions and reusable skills keep the workflow consistent across sessions.",
          "تتيح خوادم بروتوكول سياق النموذج (MCP) للمساعد الوصول إلى ملفاتك وقواعد بياناتك وتطبيقاتك. وتحافظ التعليمات المخصّصة والمهارات القابلة لإعادة الاستخدام على اتساق المسار عبر الجلسات."
        ),
        refs: [
          { kind: "component", id: "mcp" },
          { kind: "component", id: "claude-skills" },
        ],
      },
      {
        heading: L("3. Keep a comparison before committing", "3. احتفظ بمقارنة قبل الالتزام"),
        body: L(
          "Research needs differ: one tool leads on source transparency, another on file context. Compare the candidates for your workflow before standardizing your team on one.",
          "تختلف احتياجات البحث: أداة تتفوق في شفافية المصادر وأخرى في سياق الملفات. قارن المرشّحين لمسارك قبل توحيد فريقك على واحدة."
        ),
        refs: [
          { kind: "tool", id: "chatgpt" },
          { kind: "tool", id: "claude" },
        ],
      },
    ],
    relatedToolIds: ["chatgpt", "claude", "perplexity", "notebooklm"],
    relatedComponentIds: ["mcp", "chatgpt-gpts", "claude-skills"],
    sources: [
      { url: "https://modelcontextprotocol.io/", title: "Model Context Protocol (official)", sourceType: "official", claims: [], verifiedAt: "2026-08-14" },
      { url: "https://notebooklm.google/", title: "NotebookLM (official)", sourceType: "official", claims: [], verifiedAt: "2026-08-14" },
    ],
    updatedAt: "2026-08-14",
  },
  {
    id: "coding-agent-stack",
    domainId: "coding",
    title: L("Assemble a coding-agent stack", "ركّب ستاك وكلاء البرمجة"),
    summary: L(
      "How to combine an AI coding editor with reusable skills, extensions and model APIs so the assistant fits your repository and tooling.",
      "كيف تجمع محرّر برمجة بالذكاء مع مهارات وقوالب وواجهات نموذج بحيث يناسب المساعد مستودعك وأدواتك."
    ),
    sections: [
      {
        heading: L("1. Pick an editor that fits your workflow", "1. اختر محرّرًا يناسب سير عملك"),
        body: L(
          "Coding editors differ in how they handle context, diffs and agent loops. Compare the leading options for your stack before committing.",
          "تختلف محرّرات البرمجة في معالجة السياق والفروقات وحلقات الوكيل. قارن الخيارات الرائدة لمسارك قبل الالتزام."
        ),
        refs: [
          { kind: "tool", id: "cursor" },
          { kind: "tool", id: "github-copilot" },
          { kind: "tool", id: "windsurf" },
        ],
      },
      {
        heading: L("2. Package reusable behavior", "2. غلّف السلوك القابل لإعادة الاستخدام"),
        body: L(
          "Editor skills and extensions turn repeated tasks into shareable instructions. They keep the agent consistent across the team without re-prompting every time.",
          "تحوّل مهارات المحرّر والإضافات المهام المتكررة إلى تعليمات قابلة للمشاركة. وتُبقي الوكيل متّسقًا عبر الفريق دون إعادة الطلب في كل مرة."
        ),
        refs: [
          { kind: "component", id: "cursor-skills" },
          { kind: "component", id: "copilot-extensions" },
          { kind: "component", id: "claude-skills" },
        ],
      },
      {
        heading: L("3. Wire model APIs for custom agents", "3. اربط واجهات النموذج لوكلاء مخصّصين"),
        body: L(
          "When you build your own agent, official model APIs give you control over models, rate limits and cost. MCP servers connect the agent to your codebase and services.",
          "عند بناء وكيلك الخاص، تمنحك واجهات النموذج الرسمية تحكّمًا في النماذج وحدود الاستخدام والتكلفة. وتربط خوادم MCP الوكيل بمستودعك وخدماتك."
        ),
        refs: [
          { kind: "component", id: "openai-api" },
          { kind: "component", id: "anthropic-api" },
          { kind: "component", id: "mcp" },
        ],
      },
    ],
    relatedToolIds: ["cursor", "github-copilot", "claude", "windsurf"],
    relatedComponentIds: ["cursor-skills", "copilot-extensions", "claude-skills", "mcp", "openai-api", "anthropic-api"],
    sources: [
      { url: "https://platform.openai.com/docs/api-reference", title: "OpenAI API reference (official)", sourceType: "official", claims: [], verifiedAt: "2026-08-14" },
      { url: "https://docs.anthropic.com/en/api", title: "Anthropic API docs (official)", sourceType: "official", claims: [], verifiedAt: "2026-08-14" },
    ],
    updatedAt: "2026-08-14",
  },
  {
    id: "local-first-ai",
    domainId: "local",
    title: L("Run a local-first AI setup", "شغّل إعدادًا محليًا أولًا"),
    summary: L(
      "Keep data on your machine while still using capable models: local runtimes, open models and self-hosted UIs.",
      "أبقِ البيانات على جهازك مع الاستمرار باستخدام نماذج قادرة: بيئات تشغيل محلية ونماذج مفتوحة وواجهات ذاتية الاستضافة."
    ),
    sections: [
      {
        heading: L("1. Choose a local runtime", "1. اختر بيئة تشغيل محلية"),
        body: L(
          "A local runtime downloads and serves open-weight models on your hardware. Pick one with the model formats and hardware support you need.",
          "تنزّل بيئة التشغيل المحلية النماذج مفتوحة الأوزان وتقدّمها على عتادك. اختر ما يدعم صيغ النماذج وعتادك."
        ),
        refs: [
          { kind: "tool", id: "ollama" },
          { kind: "tool", id: "lm-studio" },
        ],
      },
      {
        heading: L("2. Add a self-hosted interface", "2. أضف واجهة ذاتية الاستضافة"),
        body: L(
          "A local UI gives you chat, documents and image workflows without sending data to a cloud provider. Pair it with image workflows for a complete local pipeline.",
          "توفّر الواجهة المحلية المحادثة والمستندات وسير عمل الصور دون إرسال بيانات لمزوّد سحابي. اقترنها بسير عمل الصور لخط كامل محلي."
        ),
        refs: [
          { kind: "tool", id: "open-webui" },
          { kind: "tool", id: "comfyui" },
          { kind: "component", id: "comfyui-workflows" },
        ],
      },
      {
        heading: L("3. Reach open models and your apps", "3. صل إلى النماذج المفتوحة وتطبيقاتك"),
        body: L(
          "Inference endpoints and community spaces expose open models behind a stable interface, while MCP connects your local assistant to the apps you already use.",
          "تكشف نقاط الاستنتاج والمساحات المجتمعية النماذج المفتوحة خلف واجهة ثابتة، بينما يربط MCP مساعدك المحلي بتطبيقاتك الحالية."
        ),
        refs: [
          { kind: "component", id: "ollama-api" },
          { kind: "component", id: "hf-inference" },
          { kind: "component", id: "hugging-face-spaces" },
          { kind: "component", id: "mcp" },
        ],
      },
    ],
    relatedToolIds: ["ollama", "lm-studio", "open-webui", "comfyui", "hugging-face"],
    relatedComponentIds: ["ollama-api", "hf-inference", "hugging-face-spaces", "mcp"],
    sources: [
      { url: "https://ollama.com/", title: "Ollama (official)", sourceType: "official", claims: [], verifiedAt: "2026-08-14" },
      { url: "https://huggingface.co/", title: "Hugging Face (official)", sourceType: "official", claims: [], verifiedAt: "2026-08-14" },
    ],
    updatedAt: "2026-08-14",
  },
];

export const guideMap = new Map(guides.map((g) => [g.id, g]));

export function guidesForDomain(domainId: string): Guide[] {
  return guides.filter((g) => g.domainId === domainId);
}
