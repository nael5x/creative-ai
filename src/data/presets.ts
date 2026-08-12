import type { ComparisonCriterion, Localized, UseCasePreset } from "../types";

export const criterionLabels: Record<ComparisonCriterion, Localized> = {
  quality: { en: "Output quality", ar: "جودة المخرجات" },
  easeOfUse: { en: "Ease of use", ar: "سهولة الاستخدام" },
  freeValue: { en: "Free access & value", ar: "قيمة الاستخدام المجاني" },
  paidValue: { en: "Paid plan value", ar: "قيمة الخطة المدفوعة" },
  speed: { en: "Speed", ar: "السرعة" },
  contextFiles: { en: "Context & files", ar: "السياق والملفات" },
  integrations: { en: "Integrations", ar: "التكاملات" },
  privacy: { en: "Privacy & local control", ar: "الخصوصية والتحكم المحلي" },
  collaboration: { en: "Team collaboration", ar: "تعاون الفريق" },
  developerFit: { en: "Developer fit", ar: "ملاءمة المطورين" },
  sourceTransparency: { en: "Source transparency", ar: "شفافية المصادر" },
  platformAvailability: { en: "Platform availability", ar: "توفر المنصات" },
};

const L = (en: string, ar: string): Localized => ({ en, ar });
export const presets: UseCasePreset[] = [
  { id: "general", label: L("General use", "استخدام عام"), explanation: L("Balanced priorities for everyday work.", "أولويات متوازنة للعمل اليومي."), weights: { quality: 20, easeOfUse: 15, freeValue: 10, paidValue: 10, speed: 10, contextFiles: 10, integrations: 8, privacy: 7, collaboration: 5, platformAvailability: 5 } },
  { id: "writing", label: L("Writing", "الكتابة"), explanation: L("Prioritizes output quality, context and ease.", "يركز على جودة النص والسياق والسهولة."), weights: { quality: 35, contextFiles: 20, easeOfUse: 15, speed: 10, freeValue: 10, collaboration: 5, platformAvailability: 5 } },
  { id: "research", label: L("Research", "البحث"), explanation: L("Prioritizes grounded output, sources and files.", "يركز على النتائج الموثقة والمصادر والملفات."), weights: { quality: 25, sourceTransparency: 25, contextFiles: 20, speed: 10, integrations: 10, freeValue: 10 } },
  { id: "coding", label: L("Coding", "البرمجة"), explanation: L("Prioritizes code quality, context and developer workflows.", "يركز على جودة الكود والسياق وسير عمل المطور."), weights: { quality: 30, developerFit: 25, contextFiles: 20, integrations: 10, speed: 10, privacy: 5 } },
  { id: "image", label: L("Image creation", "إنشاء الصور"), explanation: L("Prioritizes visual output and creative workflow value.", "يركز على جودة الصور وقيمة سير العمل الإبداعي."), weights: { quality: 40, easeOfUse: 15, paidValue: 15, speed: 10, integrations: 10, freeValue: 10 } },
  { id: "video", label: L("Video creation", "إنشاء الفيديو"), explanation: L("Prioritizes motion output, speed and workflow fit.", "يركز على جودة الفيديو والسرعة وسير العمل."), weights: { quality: 40, speed: 20, easeOfUse: 15, paidValue: 15, integrations: 10 } },
  { id: "audio", label: L("Audio & voice", "الصوت والصوتيات"), explanation: L("Prioritizes audio quality, control and value.", "يركز على جودة الصوت والتحكم والقيمة."), weights: { quality: 45, easeOfUse: 15, paidValue: 15, speed: 10, integrations: 10, freeValue: 5 } },
  { id: "automation", label: L("Automation", "الأتمتة"), explanation: L("Prioritizes integrations, control and developer fit.", "يركز على التكاملات والتحكم وملاءمة المطورين."), weights: { integrations: 35, developerFit: 20, easeOfUse: 15, privacy: 10, paidValue: 10, collaboration: 10 } },
  { id: "local", label: L("Local & private AI", "الذكاء المحلي والخاص"), explanation: L("Prioritizes local control, openness and developer fit.", "يركز على التحكم المحلي والانفتاح وملاءمة المطورين."), weights: { privacy: 40, developerFit: 20, quality: 15, integrations: 10, freeValue: 10, easeOfUse: 5 } },
  { id: "development", label: L("AI development", "تطوير الذكاء الاصطناعي"), explanation: L("Prioritizes APIs, ecosystem, privacy and team fit.", "يركز على APIs والمنظومة والخصوصية والعمل الجماعي."), weights: { developerFit: 35, integrations: 25, privacy: 15, collaboration: 10, quality: 10, sourceTransparency: 5 } },
];
