import type { ComparisonCriterion, CriterionAssessment, Evidence, ToolComparisonProfile } from "../types";

const verifiedAt = "2026-08-12";
const sources: Record<string, [string, string, Evidence["sourceType"]]> = {
  chatgpt: ["ChatGPT overview and help", "https://help.openai.com/en/articles/12677804-what-is-chatgpt-faq", "official"],
  claude: ["Claude overview", "https://www.anthropic.com/claude", "official"],
  gemini: ["Gemini overview", "https://gemini.google/overview/", "official"],
  perplexity: ["How Perplexity works", "https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work", "official"],
  midjourney: ["Midjourney documentation", "https://docs.midjourney.com/", "official"],
  "adobe-firefly": ["Adobe Firefly overview", "https://www.adobe.com/products/firefly.html", "official"],
  runway: ["Runway product overview", "https://runwayml.com/product", "official"],
  cursor: ["Cursor features", "https://www.cursor.com/features", "official"],
  "github-copilot": ["GitHub Copilot features", "https://github.com/features/copilot", "official"],
  n8n: ["n8n documentation", "https://docs.n8n.io/", "official"],
  ollama: ["Ollama repository", "https://github.com/ollama/ollama", "official-github"],
  "hugging-face": ["Hugging Face Hub documentation", "https://huggingface.co/docs/hub/index", "official"],
};

type ScoreSet = Partial<Record<ComparisonCriterion, number | "na">>;
const scoreSets: Record<string, ScoreSet> = {
  chatgpt: { quality: 9.0, easeOfUse: 9.0, freeValue: 8.0, paidValue: 8.2, speed: 8.6, contextFiles: 8.8, integrations: 8.8, privacy: 6.5, collaboration: 8.0, developerFit: 9.0, sourceTransparency: 7.5, platformAvailability: 9.5 },
  claude: { quality: 9.1, easeOfUse: 8.8, freeValue: 7.5, paidValue: 8.3, speed: 8.3, contextFiles: 9.2, integrations: 7.8, privacy: 7.0, collaboration: 7.5, developerFit: 8.8, sourceTransparency: 8.0, platformAvailability: 8.5 },
  gemini: { quality: 8.7, easeOfUse: 8.6, freeValue: 8.5, paidValue: 8.2, speed: 8.6, contextFiles: 8.8, integrations: 9.3, privacy: 6.8, collaboration: 8.5, developerFit: 8.7, sourceTransparency: 7.5, platformAvailability: 9.0 },
  perplexity: { quality: 8.5, easeOfUse: 9.0, freeValue: 8.5, paidValue: 8.2, speed: 9.0, contextFiles: 7.8, integrations: 7.0, privacy: 6.8, collaboration: 7.0, developerFit: 7.5, sourceTransparency: 9.5, platformAvailability: 9.0 },
  midjourney: { quality: 9.3, easeOfUse: 7.5, freeValue: "na", paidValue: 8.2, speed: 8.0, contextFiles: "na", integrations: 6.5, privacy: 5.5, collaboration: 6.5, developerFit: 4.0, sourceTransparency: 6.5, platformAvailability: 6.5 },
  "adobe-firefly": { quality: 8.5, easeOfUse: 8.7, freeValue: 7.2, paidValue: 8.3, speed: 8.5, contextFiles: "na", integrations: 9.3, privacy: 7.0, collaboration: 8.3, developerFit: 7.0, sourceTransparency: 8.5, platformAvailability: 8.8 },
  runway: { quality: 8.8, easeOfUse: 8.2, freeValue: 6.8, paidValue: 7.8, speed: 7.5, contextFiles: "na", integrations: 7.5, privacy: 6.5, collaboration: 8.0, developerFit: 7.5, sourceTransparency: 7.2, platformAvailability: 7.5 },
  cursor: { quality: 9.0, easeOfUse: 8.6, freeValue: 7.8, paidValue: 8.5, speed: 8.7, contextFiles: 9.3, integrations: 8.5, privacy: 7.2, collaboration: 7.5, developerFit: 9.6, sourceTransparency: 7.3, platformAvailability: 8.8 },
  "github-copilot": { quality: 8.8, easeOfUse: 9.0, freeValue: 8.0, paidValue: 8.5, speed: 9.0, contextFiles: 8.6, integrations: 9.5, privacy: 7.3, collaboration: 9.0, developerFit: 9.5, sourceTransparency: 8.0, platformAvailability: 9.2 },
  n8n: { quality: 8.2, easeOfUse: 7.6, freeValue: 9.0, paidValue: 8.5, speed: 8.0, contextFiles: "na", integrations: 9.7, privacy: 9.2, collaboration: 8.0, developerFit: 9.2, sourceTransparency: 9.2, platformAvailability: 8.8 },
  ollama: { quality: 7.8, easeOfUse: 7.5, freeValue: 9.5, paidValue: "na", speed: 7.5, contextFiles: 7.0, integrations: 8.5, privacy: 9.8, collaboration: 5.5, developerFit: 9.3, sourceTransparency: 9.5, platformAvailability: 9.0 },
  "hugging-face": { quality: 8.2, easeOfUse: 6.8, freeValue: 9.2, paidValue: 8.0, speed: 7.2, contextFiles: 7.5, integrations: 9.5, privacy: 8.5, collaboration: 9.0, developerFit: 9.7, sourceTransparency: 9.5, platformAvailability: 9.0 },
};

// Subjective, editorial or performance judgments. An official overview or
// marketing page does NOT verify these; they require a reproducible test or
// claim-specific evidence, which the current data does not provide.
const SUBJECTIVE: ReadonlySet<ComparisonCriterion> = new Set([
  "quality", "easeOfUse", "speed", "freeValue", "paidValue",
  "privacy", "collaboration", "developerFit",
]);

// Open-source availability is itself a documented, verifiable fact for these tools.
const OPEN_SOURCE: ReadonlySet<string> = new Set(["ollama", "n8n", "hugging-face"]);

const subjectiveRationale = (criterion: ComparisonCriterion): { en: string; ar: string } => ({
  en: `“${criterion}” is a subjective editorial judgment. No reproducible documented test or claim-specific evidence currently supports a verified score, so it is withheld rather than guessed.`,
  ar: `«${criterion}» تقييم تحريري ذاتي. لا يوجد اختبار موثق قابل للتكرار أو دليل محدد يدعم درجة موثّقة، لذا يُحجب بدل تخمينه.`,
});

const factualRationale = (criterion: ComparisonCriterion): { en: string; ar: string } => {
  switch (criterion) {
    case "platformAvailability":
      return { en: "Platform availability reflects the operating systems and surfaces the vendor documents on its official overview.", ar: "يُستمد توفر المنصات من أنظمة التشغيل والواجهات التي يوثّقها المورّد في صفحته الرسمية." };
    case "integrations":
      return { en: "Integrations reflect the connectors and ecosystem links documented on the official source.", ar: "التكاملات تعكس الموصِّلات وروابط المنظومة الموثّقة في المصدر الرسمي." };
    case "contextFiles":
      return { en: "Context and file handling reflect the upload and context capabilities documented on the official source.", ar: "السياق والملفات تعكس قدرات الرفع والسياق الموثّقة في المصدر الرسمي." };
    case "sourceTransparency":
      return { en: "Source transparency reflects the public open-source repository and documentation referenced as evidence.", ar: "شفافية المصادر تعكس المستودع الموثّق مفتوح المصدر والمستندات المشار إليها كدليل." };
    default:
      return { en: "This factual criterion is documented on the official source.", ar: "هذا المعيار الواقعي موثّق في المصدر الرسمي." };
  }
};

function assessment(toolId: string, criterion: ComparisonCriterion, value: number | "na"): CriterionAssessment {
  if (value === "na") return { score: null, status: "not-applicable", rationale: { en: "This criterion does not materially apply to this product category.", ar: "لا ينطبق هذا المعيار بصورة جوهرية على فئة المنتج." }, evidence: [] };
  const subjective = SUBJECTIVE.has(criterion) || (criterion === "sourceTransparency" && !OPEN_SOURCE.has(toolId));
  if (subjective) return { score: null, status: "not-verified", rationale: subjectiveRationale(criterion), evidence: [] };
  const [title, url, sourceType] = sources[toolId];
  return {
    score: typeof value === "number" ? value : null,
    status: "verified",
    rationale: factualRationale(criterion),
    evidence: [{ title, url, sourceType, verifiedAt, claims: [criterion] }],
  };
}

export const profiles: Record<string, ToolComparisonProfile> = Object.fromEntries(
  Object.entries(scoreSets).map(([toolId, scores]) => [toolId, {
    toolId,
    lastVerifiedAt: verifiedAt,
    assessments: Object.fromEntries(Object.entries(scores).map(([criterion, value]) => [criterion, assessment(toolId, criterion as ComparisonCriterion, value)])),
    changelog: [{ date: verifiedAt, summary: { en: "Initial evidence-led profile published.", ar: "نشر الملف الأول المبني على الأدلة." } }],
  }]),
);

export const unverifiedAssessment: CriterionAssessment = {
  score: null,
  status: "not-verified",
  rationale: { en: "This criterion has not been editorially reviewed yet.", ar: "لم تتم مراجعة هذا المعيار تحريريًا بعد." },
  evidence: [],
};
