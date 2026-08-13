import type { CapabilityState, ComparisonCriterion, CriterionAssessment, Evidence, ToolComparisonProfile } from "../types";

const verifiedAt = "2026-08-13";

// Criteria that are subjective/editorial judgments. An official overview or
// marketing page does NOT verify these; they require a reproducible test or
// claim-specific evidence, which the current data does not provide.
const SUBJECTIVE: ReadonlySet<ComparisonCriterion> = new Set([
  "quality", "easeOfUse", "speed", "collaboration", "developerFit",
]);

// Tools whose transparency is documented by a verifiable fact: an open-source
// repository, or a product that documents showing source citations.
const TRANSPARENT: ReadonlySet<string> = new Set(["ollama", "n8n", "hugging-face", "perplexity"]);

// Criteria that do not materially apply to a product category.
const NOT_APPLICABLE: Record<string, ComparisonCriterion[]> = {
  midjourney: ["freeValue", "contextFiles"],
  "adobe-firefly": ["contextFiles"],
  runway: ["contextFiles"],
  n8n: ["contextFiles"],
  ollama: ["paidValue"],
};

const PLATFORM_RAT = {
  en: "Platform availability is a verified fact: the operating systems and surfaces the vendor documents on its official overview.",
  ar: "توفر المنصات حقيقة موثّقة: أنظمة التشغيل والواجهات التي يوثّقها المورّد في صفحته الرسمية.",
};
const INTEG_RAT = {
  en: "Integrations are a verified fact: the connectors and ecosystem links documented on the official source. This confirms capability, not a quality score.",
  ar: "التكاملات حقيقة موثّقة: الموصِّلات وروابط المنظومة الموثّقة في المصدر الرسمي. هذا يؤكد القدرة لا درجة جودة.",
};
const CONTEXT_RAT = {
  en: "Context and file handling are a verified fact: the upload and context capabilities documented on the official source. This confirms capability, not a quality score.",
  ar: "السياق والملفات حقيقة موثّقة: قدرات الرفع والسياق الموثّقة في المصدر الرسمي. هذا يؤكد القدرة لا درجة جودة.",
};
const FREE_RAT = {
  en: "A free tier is a verified fact, documented on the official pricing page. Its existence is evidenced; it does not imply a subjective value score.",
  ar: "الفئة المجانية حقيقة موثّقة في الصفحة الرسمية للأسعار. وجودها مؤكد بالدليل؛ ولا يعني درجة قيمة ذاتية.",
};
const PAID_RAT = {
  en: "Published pricing is a verified fact, documented on the official page. Its availability is evidenced; it does not imply a subjective value score.",
  ar: "الأسعار المنشورة حقيقة موثّقة في الصفحة الرسمية. توفّرها مؤكد بالدليل؛ ولا يعني درجة قيمة ذاتية.",
};
const OSS_RAT = {
  en: "Source transparency is a verified fact: the public open-source repository and documentation referenced as evidence.",
  ar: "شفافية المصادر حقيقة موثّقة: المستودع الموثّق مفتوح المصدر والمستندات المشار إليها كدليل.",
};
const CITE_RAT = {
  en: "Source transparency is a verified fact: the product documents showing source citations, per its official help center.",
  ar: "شفافية المصادر حقيقة موثّقة: المنتج يوثّق إظهار الاستشهادات المصدرية، حسب مركز المساعدة الرسمي.",
};
const LOCAL_RAT = {
  en: "Privacy is a verified fact: the documented local or self-hosted execution means workloads run on the user's own infrastructure, not a third-party cloud.",
  ar: "الخصوصية حقيقة موثّقة: التنفيذ المحلي أو المستضاف ذاتيًا الموثّق يعني تشغيل الأحمال على بنية المستخدم نفسه لا سحابة طرف ثالث.",
};

type FactEvidence = { evidence: Evidence; rationale: { en: string; ar: string }; state?: CapabilityState };

const ev = (url: string, title: string, sourceType: Evidence["sourceType"]): Evidence => ({
  url, title, sourceType, verifiedAt, claims: [],
});

// Claim-specific, primary-source evidence for factual criteria only.
// These are VERIFIED FACTS (capability exists), not numeric suitability scores.
// No arbitrary 0–10 number is stored; a score is added only when a declared,
// reproducible rubric maps the evidence to a number (none are declared yet).
const facts: Record<string, Partial<Record<ComparisonCriterion, FactEvidence>>> = {
  chatgpt: {
    platformAvailability: { evidence: ev("https://help.openai.com/en/articles/12677804-what-is-chatgpt-faq", "ChatGPT FAQ", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://openai.com/chatgpt/features/", "ChatGPT features", "official"), rationale: INTEG_RAT, state: "supported" },
    contextFiles: { evidence: ev("https://platform.openai.com/docs/models", "OpenAI models", "official"), rationale: CONTEXT_RAT, state: "supported" },
    freeValue: { evidence: ev("https://openai.com/chatgpt/pricing/", "ChatGPT pricing", "official"), rationale: FREE_RAT, state: "supported" },
    paidValue: { evidence: ev("https://openai.com/chatgpt/pricing/", "ChatGPT pricing", "official"), rationale: PAID_RAT, state: "supported" },
  },
  claude: {
    platformAvailability: { evidence: ev("https://www.anthropic.com/claude", "Claude overview", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://www.anthropic.com/claude", "Claude overview", "official"), rationale: INTEG_RAT, state: "supported" },
    contextFiles: { evidence: ev("https://docs.anthropic.com/en/docs/about-claude/models/overview", "Claude models", "official"), rationale: CONTEXT_RAT, state: "supported" },
    freeValue: { evidence: ev("https://www.anthropic.com/pricing", "Claude pricing", "official"), rationale: FREE_RAT, state: "supported" },
    paidValue: { evidence: ev("https://www.anthropic.com/pricing", "Claude pricing", "official"), rationale: PAID_RAT, state: "supported" },
  },
  gemini: {
    platformAvailability: { evidence: ev("https://gemini.google/overview/", "Gemini overview", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://gemini.google/overview/", "Gemini overview", "official"), rationale: INTEG_RAT, state: "supported" },
    contextFiles: { evidence: ev("https://ai.google.dev/gemini-api/docs/models", "Gemini models", "official"), rationale: CONTEXT_RAT, state: "supported" },
    freeValue: { evidence: ev("https://ai.google.dev/pricing", "Gemini API pricing", "official"), rationale: FREE_RAT, state: "supported" },
    paidValue: { evidence: ev("https://ai.google.dev/pricing", "Gemini API pricing", "official"), rationale: PAID_RAT, state: "supported" },
  },
  perplexity: {
    platformAvailability: { evidence: ev("https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work", "How Perplexity works", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work", "How Perplexity works", "official"), rationale: INTEG_RAT, state: "supported" },
    contextFiles: { evidence: ev("https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work", "How Perplexity works", "official"), rationale: CONTEXT_RAT, state: "supported" },
    freeValue: { evidence: ev("https://www.perplexity.ai/pricing", "Perplexity pricing", "official"), rationale: FREE_RAT, state: "supported" },
    paidValue: { evidence: ev("https://www.perplexity.ai/pricing", "Perplexity pricing", "official"), rationale: PAID_RAT, state: "supported" },
    sourceTransparency: { evidence: ev("https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work", "How Perplexity works", "official"), rationale: CITE_RAT, state: "supported" },
  },
  cursor: {
    platformAvailability: { evidence: ev("https://www.cursor.com/features", "Cursor features", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://www.cursor.com/features", "Cursor features", "official"), rationale: INTEG_RAT, state: "supported" },
    contextFiles: { evidence: ev("https://www.cursor.com/features", "Cursor features", "official"), rationale: CONTEXT_RAT, state: "supported" },
    freeValue: { evidence: ev("https://www.cursor.com/pricing", "Cursor pricing", "official"), rationale: FREE_RAT, state: "supported" },
    paidValue: { evidence: ev("https://www.cursor.com/pricing", "Cursor pricing", "official"), rationale: PAID_RAT, state: "supported" },
  },
  "github-copilot": {
    platformAvailability: { evidence: ev("https://github.com/features/copilot", "GitHub Copilot features", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://github.com/features/copilot", "GitHub Copilot features", "official"), rationale: INTEG_RAT, state: "supported" },
    contextFiles: { evidence: ev("https://github.com/features/copilot", "GitHub Copilot features", "official"), rationale: CONTEXT_RAT, state: "supported" },
    freeValue: { evidence: ev("https://github.com/features/copilot/plans", "GitHub Copilot plans", "official"), rationale: FREE_RAT, state: "supported" },
    paidValue: { evidence: ev("https://github.com/features/copilot/plans", "GitHub Copilot plans", "official"), rationale: PAID_RAT, state: "supported" },
  },
  ollama: {
    platformAvailability: { evidence: ev("https://github.com/ollama/ollama", "Ollama repository", "official-github"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://github.com/ollama/ollama", "Ollama repository", "official-github"), rationale: INTEG_RAT, state: "supported" },
    contextFiles: { evidence: ev("https://github.com/ollama/ollama", "Ollama repository", "official-github"), rationale: CONTEXT_RAT, state: "supported" },
    freeValue: { evidence: ev("https://ollama.com/", "Ollama", "official"), rationale: FREE_RAT, state: "supported" },
    privacy: { evidence: ev("https://github.com/ollama/ollama", "Ollama repository", "official-github"), rationale: LOCAL_RAT, state: "supported" },
    sourceTransparency: { evidence: ev("https://github.com/ollama/ollama", "Ollama repository", "official-github"), rationale: OSS_RAT, state: "supported" },
  },
  "hugging-face": {
    platformAvailability: { evidence: ev("https://huggingface.co/docs/hub/index", "Hugging Face Hub documentation", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://huggingface.co/docs", "Hugging Face documentation", "official"), rationale: INTEG_RAT, state: "supported" },
    contextFiles: { evidence: ev("https://huggingface.co/docs", "Hugging Face documentation", "official"), rationale: CONTEXT_RAT, state: "supported" },
    freeValue: { evidence: ev("https://huggingface.co/pricing", "Hugging Face pricing", "official"), rationale: FREE_RAT, state: "supported" },
    paidValue: { evidence: ev("https://huggingface.co/pricing", "Hugging Face pricing", "official"), rationale: PAID_RAT, state: "supported" },
    privacy: { evidence: ev("https://huggingface.co/docs", "Hugging Face documentation", "official"), rationale: LOCAL_RAT, state: "supported" },
    sourceTransparency: { evidence: ev("https://github.com/huggingface/transformers", "Transformers repository", "official-github"), rationale: OSS_RAT, state: "supported" },
  },
  midjourney: {
    platformAvailability: { evidence: ev("https://docs.midjourney.com/", "Midjourney documentation", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://docs.midjourney.com/", "Midjourney documentation", "official"), rationale: INTEG_RAT, state: "supported" },
  },
  "adobe-firefly": {
    platformAvailability: { evidence: ev("https://www.adobe.com/products/firefly.html", "Adobe Firefly overview", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://www.adobe.com/products/firefly.html", "Adobe Firefly overview", "official"), rationale: INTEG_RAT, state: "supported" },
  },
  runway: {
    platformAvailability: { evidence: ev("https://runwayml.com/product", "Runway product overview", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://runwayml.com/product", "Runway product overview", "official"), rationale: INTEG_RAT, state: "supported" },
  },
  n8n: {
    platformAvailability: { evidence: ev("https://docs.n8n.io/", "n8n documentation", "official"), rationale: PLATFORM_RAT, state: "supported" },
    integrations: { evidence: ev("https://docs.n8n.io/", "n8n documentation", "official"), rationale: INTEG_RAT, state: "supported" },
    privacy: { evidence: ev("https://docs.n8n.io/", "n8n documentation", "official"), rationale: LOCAL_RAT, state: "supported" },
    sourceTransparency: { evidence: ev("https://docs.n8n.io/", "n8n documentation", "official"), rationale: OSS_RAT, state: "supported" },
  },
};

const allCriteria: ComparisonCriterion[] = [
  "quality", "easeOfUse", "freeValue", "paidValue", "speed", "contextFiles",
  "integrations", "privacy", "collaboration", "developerFit", "sourceTransparency",
  "platformAvailability",
];

const subjectiveRationale = (criterion: ComparisonCriterion): { en: string; ar: string } => ({
  en: `“${criterion}” is a subjective editorial judgment. No reproducible documented test or claim-specific evidence currently supports a verified score, so it is withheld rather than guessed.`,
  ar: `«${criterion}» تقييم تحريري ذاتي. لا يوجد اختبار موثق قابل للتكرار أو دليل محدد يدعم درجة موثّقة، لذا يُحجب بدل تخمينه.`,
});

const factualMissingRationale = (criterion: ComparisonCriterion): { en: string; ar: string } => ({
  en: `“${criterion}” is a factual criterion, but no claim-specific primary source has been gathered for this tool yet, so it is withheld rather than assumed.`,
  ar: `«${criterion}» معيار واقعي، لكن لم يُجمع بعد مصدر أولي محدد لهذه الأداة، لذا يُحجب بدل افتراضه.`,
});

function assessment(toolId: string, criterion: ComparisonCriterion): CriterionAssessment {
  if (NOT_APPLICABLE[toolId]?.includes(criterion)) {
    return { score: null, status: "not-applicable", rationale: { en: "This criterion does not materially apply to this product category.", ar: "لا ينطبق هذا المعيار بصورة جوهرية على فئة المنتج." }, evidence: [] };
  }
  const subjective = SUBJECTIVE.has(criterion) || (criterion === "sourceTransparency" && !TRANSPARENT.has(toolId));
  if (subjective) return { score: null, status: "not-verified", rationale: subjectiveRationale(criterion), evidence: [] };
  const fact = facts[toolId]?.[criterion];
  if (!fact) return { score: null, status: "not-verified", rationale: factualMissingRationale(criterion), evidence: [] };
  // Verified factual capability. `capability` states whether the verified claim
  // confirms the capability ("supported") or confirms its absence ("not-supported").
  // Missing polarity MUST NOT default to "supported" — it fails safe to "unknown"
  // in fit.ts so an unannotated claim can never silently satisfy a requirement.
  return { score: null, status: "verified", capability: fact.state, rationale: fact.rationale, evidence: [fact.evidence] };
}

export const profiles: Record<string, ToolComparisonProfile> = Object.fromEntries(
  Object.keys(facts).map((toolId) => [toolId, {
    toolId,
    lastVerifiedAt: verifiedAt,
    assessments: Object.fromEntries(allCriteria.map((criterion) => [criterion, assessment(toolId, criterion)])),
    changelog: [{ date: verifiedAt, summary: { en: "Verified facts kept as evidence; arbitrary numeric scores removed pending a declared rubric.", ar: "بقيت الحقائق الموثّقة كأدلة؛ أُزيلت الأرقام التعسفية ريثما يُعلن منهج تقييم." } }],
  }]),
);

export const unverifiedAssessment: CriterionAssessment = {
  score: null,
  status: "not-verified",
  rationale: { en: "This criterion has not been editorially reviewed yet.", ar: "لم تتم مراجعة هذا المعيار تحريريًا بعد." },
  evidence: [],
};

