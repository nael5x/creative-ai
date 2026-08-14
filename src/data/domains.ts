import type { Domain } from "../types";

// Work domains organized around what users actually do with AI. This is the IA
// hero: the homepage leads with domains, and each domain surfaces tools,
// components and an orientation path. Start with the most-used domains.
export const domains: Domain[] = [
  {
    id: "research",
    name: { en: "Research & grounded answers", ar: "البحث والإجابات الموثّقة" },
    description: { en: "Find, verify and cite sources; synthesize from documents.", ar: "البحث عن المصادر والتحقق منها والاقتباس منها؛ التلخيص من المستندات." },
    relatedPreset: "research",
    toolIds: ["perplexity", "chatgpt", "claude", "gemini", "notebooklm"],
    orientation: { en: "Start with a tool that cites sources, then add document/context handling for your files.", ar: "ابدأ بأداة تستشهد بالمصادر، ثم أضف معالجة المستندات والسياق لملفاتك." },
  },
  {
    id: "coding",
    name: { en: "Coding & building", ar: "البرمجة والبناء" },
    description: { en: "Write, review and ship code; automate development workflows.", ar: "كتابة الكود ومراجعته وإنجازه؛ أتمتة مسارات التطوير." },
    relatedPreset: "coding",
    toolIds: ["cursor", "github-copilot", "windsurf", "v0", "lovable", "replit", "claude", "chatgpt"],
    orientation: { en: "Pick an editor/agent that integrates with your IDE, then add the skills and connectors your stack needs.", ar: "اختر محرّرًا/وكيلاً يتكامل مع بيئة التطوير، ثم أضف المهارات والكوننتورس التي يحتاجها ستاكك." },
  },
  {
    id: "writing",
    name: { en: "Writing & editing", ar: "الكتابة والتحرير" },
    description: { en: "Draft, rewrite and refine long-form text.", ar: "صياغة النصوص وإعادة كتابتها وتحسينها." },
    relatedPreset: "writing",
    toolIds: ["chatgpt", "claude", "gemini"],
    orientation: { en: "Use a general assistant with strong context handling; keep your sources handy.", ar: "استخدم مساعدًا عامًا بقدرة قوية على السياق؛ واحتفظ بمصادرك بحوزتك." },
  },
  {
    id: "image",
    name: { en: "Image creation", ar: "إنشاء الصور" },
    description: { en: "Generate and edit images and designs.", ar: "توليد الصور وتحريرها والتصميم." },
    relatedPreset: "image",
    toolIds: ["midjourney", "adobe-firefly", "canva-ai", "chatgpt", "gemini"],
    orientation: { en: "Choose a generator that fits your style, then connect it to your design tool.", ar: "اختر مولّدًا يناسب أسلوبك، ثم اربطه بأداة التصميم لديك." },
  },
  {
    id: "video",
    name: { en: "Video creation", ar: "إنشاء الفيديو" },
    description: { en: "Generate, edit and dub video.", ar: "توليد الفيديو وتحريره ودبلجته." },
    relatedPreset: "video",
    toolIds: ["runway", "pika", "luma-dream-machine", "chatgpt"],
    orientation: { en: "Start with a video model, then add audio/voice tools to finish the piece.", ar: "ابدأ بنموذج فيديو، ثم أضف أدوات الصوت/الصوت للإتمام." },
  },
  {
    id: "audio",
    name: { en: "Audio & voice", ar: "الصوت والصوت" },
    description: { en: "Generate voice, music and sound.", ar: "توليد الصوت والموسيقى والأصوات." },
    relatedPreset: "audio",
    toolIds: ["elevenlabs", "suno"],
    orientation: { en: "Pick a voice/music model, then connect it to your video or automation tool.", ar: "اختر نموذج صوت/موسيقى، ثم اربطه بأداة الفيديو أو الأتمتة." },
  },
  {
    id: "automation",
    name: { en: "Automation & workflows", ar: "الأتمتة والمسارات" },
    description: { en: "Connect apps and automate repetitive work.", ar: "ربط التطبيقات وأتمتة العمل المتكرر." },
    relatedPreset: "automation",
    toolIds: ["n8n", "make", "zapier", "ollama"],
    orientation: { en: "Choose a connector-rich automation tool; prefer self-hostable options for private data.", ar: "اختر أداة أتمتة غنية بالكوننتورس؛ فضّل الخيارات القابلة للاستضافة الذاتية للبيانات الخاصة." },
  },
  {
    id: "local",
    name: { en: "Local & private AI", ar: "الذكاء المحلي والخاص" },
    description: { en: "Run models on your own machine or infrastructure.", ar: "شغّل النماذج على جهازك أو بنيتك الخاصة." },
    relatedPreset: "local",
    toolIds: ["ollama", "hugging-face", "n8n"],
    orientation: { en: "Start with a local runtime, then add open-source models and self-hosted tools.", ar: "ابدأ ببيئة تشغيل محلية، ثم أضف نماذج مفتوحة المصدر وأدوات مستضافة ذاتيًا." },
  },
  {
    id: "development",
    name: { en: "AI development", ar: "تطوير الذكاء الاصطناعي" },
    description: { en: "Build, fine-tune and serve models and agents.", ar: "بناء النماذج والوكلاء وضبطها وتقديمها." },
    relatedPreset: "development",
    toolIds: ["hugging-face", "ollama", "replit", "v0", "lovable"],
    orientation: { en: "Use a hub/API for models, a local runtime for privacy, and a builder for the UI.", ar: "استخدم منصّة/واجهة برمجية للنماذج، وبيئة محلية للخصوصية، وبانٍ لواجهة الاستخدام." },
  },
];

export const domainMap = new Map(domains.map((d) => [d.id, d]));
