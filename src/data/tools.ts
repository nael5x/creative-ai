import type { Localized, Tool } from "../types";

const L = (en: string, ar: string): Localized => ({ en, ar });
const verified = "2026-08-12";

type Seed = [string, string, string, string, string, string, string];
const seeds: Seed[] = [
  ["chatgpt", "ChatGPT", "شات جي بي تي", "General assistant", "مساعد عام", "Free / Paid", "https://chatgpt.com/"],
  ["claude", "Claude", "كلود", "General assistant", "مساعد عام", "Free / Paid", "https://claude.ai/"],
  ["gemini", "Gemini", "جيميني", "General assistant", "مساعد عام", "Free / Paid", "https://gemini.google.com/"],
  ["perplexity", "Perplexity", "بيربليكسيتي", "Research", "البحث", "Free / Paid", "https://www.perplexity.ai/"],
  ["notebooklm", "NotebookLM", "نوتبوك إل إم", "Learn from files", "التعلم من الملفات", "Free / Paid", "https://notebooklm.google/"],
  ["midjourney", "Midjourney", "ميدجورني", "Images", "الصور", "Paid", "https://www.midjourney.com/"],
  ["adobe-firefly", "Adobe Firefly", "أدوبي فايرفلاي", "Images & design", "الصور والتصميم", "Free / Paid", "https://firefly.adobe.com/"],
  ["canva-ai", "Canva AI", "كانفا AI", "Design", "التصميم", "Free / Paid", "https://www.canva.com/ai-image-generator/"],
  ["runway", "Runway", "رانواي", "Video", "الفيديو", "Free / Paid", "https://runwayml.com/"],
  ["pika", "Pika", "بيكا", "Video", "الفيديو", "Free / Paid", "https://pika.art/"],
  ["luma-dream-machine", "Luma Dream Machine", "لوما دريم ماشين", "Video", "الفيديو", "Free / Paid", "https://lumalabs.ai/dream-machine"],
  ["elevenlabs", "ElevenLabs", "إليفن لابس", "Voice & audio", "الصوت", "Free / Paid", "https://elevenlabs.io/"],
  ["suno", "Suno", "سونو", "Music", "الموسيقى", "Free / Paid", "https://suno.com/"],
  ["cursor", "Cursor", "كيرسر", "Coding", "البرمجة", "Free / Paid", "https://www.cursor.com/"],
  ["github-copilot", "GitHub Copilot", "غيت هب كوبيلوت", "Coding", "البرمجة", "Free / Paid", "https://github.com/features/copilot"],
  ["windsurf", "Windsurf", "ويندسيرف", "Coding", "البرمجة", "Free / Paid", "https://windsurf.com/"],
  ["v0", "v0", "v0", "Web UI", "واجهات الويب", "Free / Paid", "https://v0.dev/"],
  ["lovable", "Lovable", "لوفابل", "Web apps", "تطبيقات الويب", "Free / Paid", "https://lovable.dev/"],
  ["replit", "Replit", "ريبلت", "Build & deploy", "البناء والنشر", "Free / Paid", "https://replit.com/"],
  ["n8n", "n8n", "n8n", "Automation", "الأتمتة", "Open source / Paid", "https://n8n.io/"],
  ["make", "Make", "ميك", "Automation", "الأتمتة", "Free / Paid", "https://www.make.com/"],
  ["zapier", "Zapier", "زابير", "Automation", "الأتمتة", "Free / Paid", "https://zapier.com/"],
  ["ollama", "Ollama", "أولاما", "Local models", "نماذج محلية", "Open source", "https://ollama.com/"],
  ["lm-studio", "LM Studio", "إل إم ستوديو", "Local models", "نماذج محلية", "Free", "https://lmstudio.ai/"],
  ["open-webui", "Open WebUI", "أوبن ويب يو آي", "Local AI UI", "واجهة ذكاء محلية", "Open source", "https://openwebui.com/"],
  ["comfyui", "ComfyUI", "كومفي يو آي", "Image workflows", "سير عمل الصور", "Open source", "https://github.com/Comfy-Org/ComfyUI"],
  ["hugging-face", "Hugging Face", "هاغينغ فيس", "Models & datasets", "النماذج والبيانات", "Free / Paid", "https://huggingface.co/"],
  ["langchain", "LangChain", "لانغ تشين", "AI development", "تطوير الذكاء الاصطناعي", "Open source", "https://www.langchain.com/"],
  ["llamaindex", "LlamaIndex", "لاما إندكس", "AI development", "تطوير الذكاء الاصطناعي", "Open source", "https://www.llamaindex.ai/"],
  ["flowise", "Flowise", "فلوايز", "Visual AI builder", "بناء ذكاء مرئي", "Open source", "https://flowiseai.com/"],
  ["figma-ai", "Figma AI", "فيغما AI", "Product design", "تصميم المنتجات", "Free / Paid", "https://www.figma.com/"],
  ["gamma", "Gamma", "غاما", "Presentations", "العروض", "Free / Paid", "https://gamma.app/"],
  ["notion-ai", "Notion AI", "نوشن AI", "Knowledge work", "إدارة المعرفة", "Free / Paid", "https://www.notion.so/product/ai"],
  ["grammarly", "Grammarly", "غرامرلي", "Writing", "الكتابة", "Free / Paid", "https://www.grammarly.com/"],
];

const copy: Record<string, [Localized, Localized[], Localized[], Localized[]]> = {
  chatgpt: [L("A broad assistant for writing, analysis, files, images and coding.", "مساعد شامل للكتابة والتحليل والملفات والصور والبرمجة."), [L("Mixed everyday workflows", "مهام يومية متنوعة"), L("Working across files and formats", "العمل عبر الملفات والصيغ")], [L("Capabilities and limits vary by plan and model.", "تختلف القدرات والحدود حسب الخطة والنموذج.")], [L("Web, iOS, Android", "الويب وiOS وAndroid")]],
  claude: [L("An assistant focused on careful writing, analysis and coding workflows.", "مساعد يركز على الكتابة الدقيقة والتحليل وسير عمل البرمجة."), [L("Long documents", "المستندات الطويلة"), L("Careful writing and coding", "الكتابة الدقيقة والبرمجة")], [L("Usage limits vary by plan.", "تختلف حدود الاستخدام حسب الخطة.")], [L("Web, iOS, Android, desktop", "الويب وiOS وAndroid وسطح المكتب")]],
  gemini: [L("Google's multimodal assistant across consumer and Workspace experiences.", "مساعد Google متعدد الوسائط عبر الخدمات الشخصية وWorkspace."), [L("Google-connected workflows", "المهام المرتبطة بخدمات Google"), L("Multimodal tasks", "المهام متعددة الوسائط")], [L("Availability can vary by account and region.", "قد يختلف التوفر حسب الحساب والمنطقة.")], [L("Web, iOS, Android", "الويب وiOS وAndroid")]],
  perplexity: [L("An answer engine that searches the web and cites its sources.", "محرك إجابات يبحث في الويب ويذكر مصادره."), [L("Fast sourced research", "البحث السريع بالمصادر"), L("Following citations", "تتبع الاستشهادات")], [L("A citation still needs to be checked for claim support.", "يجب التأكد من أن الاستشهاد يدعم الادعاء فعلًا.")], [L("Web, iOS, Android, desktop", "الويب وiOS وAndroid وسطح المكتب")]],
  midjourney: [L("A generative image service for visual ideation and production.", "خدمة لتوليد الصور للأفكار والإنتاج البصري."), [L("Stylized image exploration", "استكشاف الصور ذات الأسلوب"), L("Creative iteration", "التكرار الإبداعي")], [L("Paid access and workflow may not suit every user.", "الدفع وسير العمل قد لا يناسبان كل مستخدم.")], [L("Web", "الويب")]],
  "adobe-firefly": [L("Generative creative tools integrated with Adobe workflows.", "أدوات إبداعية توليدية متكاملة مع بيئة Adobe."), [L("Adobe creative workflows", "سير عمل Adobe الإبداعي"), L("Commercial creative production", "الإنتاج الإبداعي التجاري")], [L("Credits and features vary by plan.", "تختلف الأرصدة والميزات حسب الخطة.")], [L("Web, Adobe apps", "الويب وتطبيقات Adobe")]],
  runway: [L("Generative video and editing tools for creative production.", "أدوات لتوليد الفيديو وتحريره للإنتاج الإبداعي."), [L("Short generative video", "الفيديو التوليدي القصير"), L("Creative video iteration", "التكرار الإبداعي للفيديو")], [L("Generation costs and limits depend on the plan.", "تعتمد التكلفة والحدود على الخطة.")], [L("Web, iOS", "الويب وiOS")]],
  cursor: [L("An AI code editor designed around repository-aware assistance.", "محرر كود بالذكاء الاصطناعي مصمم لفهم المستودع."), [L("Repository-wide coding", "البرمجة عبر المستودع"), L("AI-assisted editing", "التحرير بمساعدة الذكاء الاصطناعي")], [L("Requires adopting a dedicated editor workflow.", "يتطلب اعتماد سير عمل داخل محرر مخصص.")], [L("macOS, Windows, Linux", "macOS وWindows وLinux")]],
  "github-copilot": [L("AI coding assistance across editors, the terminal and GitHub.", "مساعدة برمجية بالذكاء الاصطناعي عبر المحررات والطرفية وGitHub."), [L("Existing GitHub workflows", "سير عمل GitHub الحالي"), L("Editor-integrated assistance", "المساعدة داخل المحرر")], [L("Features vary across plans and surfaces.", "تختلف الميزات حسب الخطة والواجهة.")], [L("Editors, GitHub, terminal", "المحررات وGitHub والطرفية")]],
  n8n: [L("Workflow automation with AI integrations and a self-hosted option.", "أتمتة سير العمل مع تكاملات AI وخيار استضافة ذاتية."), [L("Flexible app and API automation", "أتمتة مرنة للتطبيقات وAPIs"), L("Self-hosted workflows", "سير العمل ذاتي الاستضافة")], [L("Advanced workflows require technical setup.", "تحتاج التدفقات المتقدمة إلى إعداد تقني.")], [L("Cloud, self-hosted", "السحابة والاستضافة الذاتية")]],
  ollama: [L("A local runtime and model manager for supported open models.", "بيئة تشغيل محلية ومدير للنماذج المفتوحة المدعومة."), [L("Local model experimentation", "تجربة النماذج محليًا"), L("Private developer workflows", "سير عمل خاص للمطورين")], [L("Quality and speed depend on the chosen model and hardware.", "تعتمد الجودة والسرعة على النموذج والعتاد.")], [L("macOS, Windows, Linux", "macOS وWindows وLinux")]],
  "hugging-face": [L("A hub and tooling ecosystem for models, datasets and AI demos.", "مركز ومنظومة أدوات للنماذج والبيانات وعروض الذكاء الاصطناعي."), [L("Finding open models", "العثور على نماذج مفتوحة"), L("Publishing ML projects", "نشر مشاريع تعلم الآلة")], [L("It is an ecosystem, not one universal assistant.", "هي منظومة وليست مساعدًا واحدًا شاملًا.")], [L("Web, API, developer libraries", "الويب وAPI ومكتبات المطورين")]],
};

const generic = (en: string, ar: string): [Localized, Localized[], Localized[], Localized[]] => [
  L(`A ${en.toLowerCase()} tool from the Creative AI catalog.`, `أداة ضمن فئة ${ar} في دليل Creative AI.`),
  [L(en, ar)],
  [L("Detailed comparison evidence has not been reviewed yet.", "لم تُراجع أدلة المقارنة التفصيلية بعد.")],
  [L("See official source", "راجع المصدر الرسمي")],
];

export const tools: Tool[] = seeds.map(([id, en, ar, categoryEn, categoryAr, pricing, officialUrl]) => {
  const [description, bestFor, limitations, platforms] = copy[id] ?? generic(categoryEn, categoryAr);
  return {
    id, slug: id, name: L(en, ar), category: L(categoryEn, categoryAr), description, bestFor, limitations,
    pricing: L(pricing, pricing.replace("Free", "مجاني").replace("Paid", "مدفوع").replace("Open source", "مفتوح المصدر")),
    platforms, officialUrl, searchTerms: [en, ar, categoryEn, categoryAr], lastVerifiedAt: verified,
  };
});

export const toolMap = new Map(tools.map((tool) => [tool.id, tool]));
