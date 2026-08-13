import type { CapabilityAssessment, CapabilityId, ComparisonCriterion, Evidence, Localized } from "../types";
import { facts, verifiedAt } from "./profiles";

// Explicit capability taxonomy, independent from ComparisonCriterion (scoring facts).
export const capabilityLabels: Record<CapabilityId, Localized> = {
  webAccess: { en: "Web availability", ar: "التوفر عبر الويب" },
  thirdPartyIntegrations: { en: "Third-party integrations", ar: "تكاملات أطراف خارجية" },
  fileContext: { en: "File / context handling", ar: "معالجة الملفات والسياق" },
  freeTier: { en: "Free tier", ar: "فئة مجانية" },
  paidPlan: { en: "Paid plan", ar: "خطة مدفوعة" },
  localExecution: { en: "Local execution", ar: "تنفيذ محلي" },
  selfHosting: { en: "Self-hosting", ar: "استضافة ذاتية" },
  openSource: { en: "Open-source transparency", ar: "شفافية المصادر المفتوحة" },
  sourceCitations: { en: "Source citations", ar: "الاستشهادات المصدرية" },
  ideIntegration: { en: "IDE integration", ar: "تكامل مع بيئة التطوير" },
  apiAvailability: { en: "Public API availability", ar: "توفّر واجهة برمجية عامة" },
};

// Evidence reuse ONLY. This helper returns the underlying Evidence metadata
// (URL, title, source type, verification date) from an existing scoring fact.
// It NEVER decides which CapabilityId becomes supported — capability support is
// authored explicitly in the `capabilities` record below.
function reuseEvidence(toolId: string, criterion: ComparisonCriterion): Evidence | undefined {
  return facts[toolId]?.[criterion]?.evidence;
}

// Author a single capability assessment. The decision that THIS capability is
// supported is made explicitly at the call site, not by any generic rule.
function authored(toolId: string, criterion: ComparisonCriterion, rationale: Localized): CapabilityAssessment {
  return { state: "supported", evidence: reuseEvidence(toolId, criterion), rationale, verifiedAt };
}

// Capability support is FIRST-CLASS, explicitly authored data: each tool maps to
// the exact CapabilityIds its existing primary-source evidence directly proves.
// A capability is absent (=> UNKNOWN) unless it is explicitly listed here. A future
// change to any ComparisonCriterion in profiles.ts does NOT automatically alter
// these records.
export const capabilities: Record<string, Partial<Record<CapabilityId, CapabilityAssessment>>> = {
  chatgpt: {
    webAccess: authored("chatgpt", "platformAvailability", { en: "OpenAI documents ChatGPT as available through its web application.", ar: "توثّق OpenAI توفر ChatGPT عبر تطبيق الويب." }),
    thirdPartyIntegrations: authored("chatgpt", "integrations", { en: "OpenAI documents ChatGPT's connectors and integrations with other apps and services.", ar: "توثّق OpenAI روابط وتكاملات ChatGPT مع تطبيقات وخدمات أخرى." }),
    fileContext: authored("chatgpt", "contextFiles", { en: "OpenAI documents ChatGPT's file upload and document/context handling.", ar: "توثّق OpenAI رفع الملفات ومعالجة السياق والوثائق في ChatGPT." }),
    freeTier: authored("chatgpt", "freeValue", { en: "OpenAI's pricing page documents a free tier for ChatGPT.", ar: "توثّق صفحة أسعار OpenAI فئة مجانية لـ ChatGPT." }),
    paidPlan: authored("chatgpt", "paidValue", { en: "OpenAI's pricing page documents paid ChatGPT plans.", ar: "توثّق صفحة أسعار OpenAI خططًا مدفوعة لـ ChatGPT." }),
  },
  claude: {
    webAccess: authored("claude", "platformAvailability", { en: "Anthropic documents Claude as available through its web application.", ar: "توثّق Anthropic توفر Claude عبر تطبيق الويب." }),
    thirdPartyIntegrations: authored("claude", "integrations", { en: "Anthropic documents Claude's connectors and integrations with other apps and services.", ar: "توثّق Anthropic روابط وتكاملات Claude مع تطبيقات وخدمات أخرى." }),
    fileContext: authored("claude", "contextFiles", { en: "Anthropic documents Claude's file upload and document/context handling.", ar: "توثّق Anthropic رفع الملفات ومعالجة السياق والوثائق في Claude." }),
    freeTier: authored("claude", "freeValue", { en: "Anthropic's pricing page documents a free tier for Claude.", ar: "توثّق صفحة أسعار Anthropic فئة مجانية لـ Claude." }),
    paidPlan: authored("claude", "paidValue", { en: "Anthropic's pricing page documents paid Claude plans.", ar: "توثّق صفحة أسعار Anthropic خططًا مدفوعة لـ Claude." }),
  },
  gemini: {
    webAccess: authored("gemini", "platformAvailability", { en: "Google documents Gemini as available through its web application.", ar: "توثّق Google توفر Gemini عبر تطبيق الويب." }),
    thirdPartyIntegrations: authored("gemini", "integrations", { en: "Google documents Gemini's connectors and integrations with other apps and services.", ar: "توثّق Google روابط وتكاملات Gemini مع تطبيقات وخدمات أخرى." }),
    fileContext: authored("gemini", "contextFiles", { en: "Google documents Gemini's file upload and document/context handling.", ar: "توثّق Google رفع الملفات ومعالجة السياق والوثائق في Gemini." }),
    freeTier: authored("gemini", "freeValue", { en: "Google's pricing page documents a free tier for Gemini.", ar: "توثّق صفحة أسعار Google فئة مجانية لـ Gemini." }),
    paidPlan: authored("gemini", "paidValue", { en: "Google's pricing page documents paid Gemini plans.", ar: "توثّق صفحة أسعار Google خططًا مدفوعة لـ Gemini." }),
  },
  perplexity: {
    webAccess: authored("perplexity", "platformAvailability", { en: "Perplexity documents its assistant as available through its web application.", ar: "توثّق Perplexity توفر مساعدها عبر تطبيق الويب." }),
    thirdPartyIntegrations: authored("perplexity", "integrations", { en: "Perplexity documents its connectors and integrations with other apps and services.", ar: "توثّق Perplexity روابط وتكاملاتها مع تطبيقات وخدمات أخرى." }),
    fileContext: authored("perplexity", "contextFiles", { en: "Perplexity documents file upload and document/context handling.", ar: "توثّق Perplexity رفع الملفات ومعالجة السياق والوثائق." }),
    freeTier: authored("perplexity", "freeValue", { en: "Perplexity's pricing page documents a free tier.", ar: "توثّق صفحة أسعار Perplexity فئة مجانية." }),
    paidPlan: authored("perplexity", "paidValue", { en: "Perplexity's pricing page documents paid plans.", ar: "توثّق صفحة أسعار Perplexity خططًا مدفوعة." }),
    sourceCitations: authored("perplexity", "sourceTransparency", { en: "Perplexity's help center documents that it shows source citations.", ar: "يوثّق مركز مساعدة Perplexity إظهارها للاستشهادات المصدرية." }),
  },
  cursor: {
    thirdPartyIntegrations: authored("cursor", "integrations", { en: "Cursor documents its integrations with editors, tools and services.", ar: "توثّق Cursor تكاملاتها مع محررات وأدوات وخدمات." }),
    fileContext: authored("cursor", "contextFiles", { en: "Cursor documents file and context handling in its editor.", ar: "توثّق Cursor معالجة الملفات والسياق في محرّرها." }),
    freeTier: authored("cursor", "freeValue", { en: "Cursor's pricing page documents a free tier.", ar: "توثّق صفحة أسعار Cursor فئة مجانية." }),
    paidPlan: authored("cursor", "paidValue", { en: "Cursor's pricing page documents paid plans.", ar: "توثّق صفحة أسعار Cursor خططًا مدفوعة." }),
  },
  "github-copilot": {
    webAccess: authored("github-copilot", "platformAvailability", { en: "GitHub documents Copilot as usable through GitHub.com in the browser.", ar: "توثّق GitHub توفر Copilot عبر GitHub.com في المتصفح." }),
    thirdPartyIntegrations: authored("github-copilot", "integrations", { en: "GitHub documents Copilot's integrations with editors, GitHub and other services.", ar: "توثّق GitHub تكاملات Copilot مع المحرّرات وGitHub وخدمات أخرى." }),
    fileContext: authored("github-copilot", "contextFiles", { en: "GitHub documents Copilot's file and context handling.", ar: "توثّق GitHub معالجة Copilot للملفات والسياق." }),
    freeTier: authored("github-copilot", "freeValue", { en: "GitHub's plans page documents a free tier for Copilot.", ar: "توثّق صفحة خطط GitHub فئة مجانية لـ Copilot." }),
    paidPlan: authored("github-copilot", "paidValue", { en: "GitHub's plans page documents paid Copilot plans.", ar: "توثّق صفحة خطط GitHub خططًا مدفوعة لـ Copilot." }),
  },
  ollama: {
    thirdPartyIntegrations: authored("ollama", "integrations", { en: "Ollama's repository documents integrations with other tools and services via its API.", ar: "يوثّق مستودع Ollama تكاملاته مع أدوات وخدمات أخرى عبر واجهته البرمجية." }),
    fileContext: authored("ollama", "contextFiles", { en: "Ollama's repository documents loading model and document context/files.", ar: "يوثّق مستودع Ollama تحميل سياق الوثائق والملفات والنماذج." }),
    freeTier: authored("ollama", "freeValue", { en: "Ollama's site documents the tool as free to run.", ar: "يوثّق موقع Ollama إمكانية تشغيل الأداة مجانًا." }),
    localExecution: authored("ollama", "privacy", { en: "Ollama's official repository documents running models locally on the user's machine.", ar: "يوثّق المستودع الرسمي لـ Ollama تشغيل النماذج محليًا على جهاز المستخدم." }),
    selfHosting: authored("ollama", "privacy", { en: "Ollama's repository provides the implementation to self-host the model server on your own infrastructure.", ar: "يوفّر مستودع Ollama التنفيذ لاستضافة خادم النماذج ذاتيًا على بنيتك الخاصة." }),
    openSource: authored("ollama", "sourceTransparency", { en: "Ollama's official GitHub repository is published as open source.", ar: "يُنشر المستودع الرسمي لـ Ollama على GitHub كمصادر مفتوحة." }),
  },
  "hugging-face": {
    webAccess: authored("hugging-face", "platformAvailability", { en: "Hugging Face documents the Hub as available through its web application.", ar: "توثّق Hugging Face توفر Hub عبر تطبيق الويب." }),
    thirdPartyIntegrations: authored("hugging-face", "integrations", { en: "Hugging Face documents integrations of its models and datasets with other tools and services.", ar: "توثّق Hugging Face تكامل نماذجها ومجموعات البيانات مع أدوات وخدمات أخرى." }),
    fileContext: authored("hugging-face", "contextFiles", { en: "Hugging Face documentation documents file and document/context handling.", ar: "توثّق وثائق Hugging Face معالجة الملفات والسياق والوثائق." }),
    freeTier: authored("hugging-face", "freeValue", { en: "Hugging Face's pricing page documents a free tier.", ar: "توثّق صفحة أسعار Hugging Face فئة مجانية." }),
    paidPlan: authored("hugging-face", "paidValue", { en: "Hugging Face's pricing page documents paid plans.", ar: "توثّق صفحة أسعار Hugging Face خططًا مدفوعة." }),
    localExecution: authored("hugging-face", "privacy", { en: "Hugging Face documents running its models locally (e.g., via Transformers) on the user's environment.", ar: "توثّق Hugging Face تشغيل نماذجها محليًا (مثل Transformers) على بيئة المستخدم." }),
    selfHosting: authored("hugging-face", "privacy", { en: "Hugging Face documents self-hosting its Hub and inference endpoints on your own infrastructure.", ar: "توثّق Hugging Face استضافة Hub ونقاط الاستدلال ذاتيًا على بنيتك الخاصة." }),
    openSource: authored("hugging-face", "sourceTransparency", { en: "Hugging Face's Transformers repository is published as open source.", ar: "يُنشر مستودع Transformers الخاص بـ Hugging Face كمصادر مفتوحة." }),
  },
  n8n: {
    webAccess: authored("n8n", "platformAvailability", { en: "n8n documents a cloud web application (n8n.cloud) accessible in the browser.", ar: "توثّق n8n تطبيقًا سحابيًا (n8n.cloud) متاحًا عبر المتصفح." }),
    thirdPartyIntegrations: authored("n8n", "integrations", { en: "n8n documents its large library of integrations (nodes) with other apps and services.", ar: "توثّق n8n مكتبتها الواسعة من التكاملات (العُقد) مع تطبيقات وخدمات أخرى." }),
    localExecution: authored("n8n", "privacy", { en: "n8n's documentation documents running the instance locally on your own environment.", ar: "توثّق وثائق n8n تشغيل النسخة محليًا على بيئتك الخاصة." }),
    selfHosting: authored("n8n", "privacy", { en: "n8n's documentation documents self-hosting the instance on your own infrastructure.", ar: "توثّق وثائق n8n استضافة النسخة ذاتيًا على بنيتك الخاصة." }),
    openSource: authored("n8n", "sourceTransparency", { en: "n8n's official documentation/repository is published as open source.", ar: "تُنشر وثائق/مستودع n8n الرسمي كمصادر مفتوحة." }),
  },
  midjourney: {
    webAccess: authored("midjourney", "platformAvailability", { en: "Midjourney documents its product as available through its web app.", ar: "توثّق Midjourney توفر منتجها عبر تطبيق الويب." }),
    thirdPartyIntegrations: authored("midjourney", "integrations", { en: "Midjourney documents integration with the Discord platform.", ar: "توثّق Midjourney التكامل مع منصة Discord." }),
  },
  "adobe-firefly": {
    webAccess: authored("adobe-firefly", "platformAvailability", { en: "Adobe documents Firefly as available through its web application.", ar: "توثّق Adobe توفر Firefly عبر تطبيق الويب." }),
    thirdPartyIntegrations: authored("adobe-firefly", "integrations", { en: "Adobe documents Firefly's integrations within the Adobe ecosystem and APIs.", ar: "توثّق Adobe تكاملات Firefly داخل منظومة Adobe وواجهاتها البرمجية." }),
  },
  runway: {
    webAccess: authored("runway", "platformAvailability", { en: "Runway documents its product as available through its web application.", ar: "توثّق Runway توفر منتجها عبر تطبيق الويب." }),
    thirdPartyIntegrations: authored("runway", "integrations", { en: "Runway documents integrations with other creative tools and services.", ar: "توثّق Runway التكامل مع أدوات وخدمات إبداعية أخرى." }),
  },
};
