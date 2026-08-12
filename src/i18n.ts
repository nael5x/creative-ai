import type { Language } from "./types";

export const ui = {
  en: {
    compare: "Compare", directory: "Directory", updates: "Updates", methodology: "Methodology",
    headline: "Choose the right AI for the work ahead.", subhead: "Compare capabilities, evidence and trade-offs — without a universal winner.",
    primaryTools: "Tools to compare", swap: "Swap", useCase: "Use case", copy: "Copy link", copied: "Link copied", ask: "Ask Creative AI",
    official: "Official source", verified: "Verified", suitability: "Suitability", confidence: "Evidence confidence", coverage: "Coverage",
    bestFor: "Best for", limitations: "Limitations", notVerified: "Not verified", notApplicable: "Not applicable", sources: "sources",
    crossCategory: "Cross-category comparison", crossCategoryText: "The score reflects this use case only — not universal product quality.",
    outcomeLeft: "A closer fit for this workflow", outcomeRight: "A closer fit for this workflow", tie: "A practical tie for this workflow", insufficient: "Not enough evidence for a result",
    chooseWhen: "Choose this when…", neutral: "Neither tool is universally better. Your choice depends on the task, data and constraints that matter to you.",
    how: "How we compare", howText: "Weighted, criterion-level editorial assessments with visible sources. Missing evidence never becomes a zero.",
    openMethod: "Read full methodology", recent: "Recent monitored signals", discovery: "Discovery signal — review required", noUpdates: "No monitored signals available.",
    explore: "Explore the full directory", search: "Search by name, category or goal", all: "All", compareWith: "Compare", favorite: "Favorite",
    advisorTitle: "Find a starting point", advisorText: "Pick your main goal and we’ll prepare a comparison — no account required.", continue: "Prepare comparison", close: "Close",
    goalResearch: "Research", goalCoding: "Coding", goalCreative: "Creative work", goalPrivate: "Local & private",
    report: "Report a correction", changed: "What changed?", weights: "Preset weights", published: "Published profiles", disclosure: "Independent directory. No provider paid for placement. Affiliate links must be disclosed if introduced.",
  },
  ar: {
    compare: "المقارنة", directory: "الدليل", updates: "التحديثات", methodology: "المنهجية",
    headline: "اختر الذكاء الاصطناعي المناسب للعمل القادم.", subhead: "قارن القدرات والأدلة والتنازلات — دون فائز شامل.",
    primaryTools: "الأدوات للمقارنة", swap: "تبديل", useCase: "حالة الاستخدام", copy: "نسخ الرابط", copied: "تم نسخ الرابط", ask: "اسأل Creative AI",
    official: "المصدر الرسمي", verified: "آخر تحقق", suitability: "الملاءمة", confidence: "الثقة بالأدلة", coverage: "التغطية",
    bestFor: "الأفضل لـ", limitations: "القيود", notVerified: "غير موثق", notApplicable: "لا ينطبق", sources: "مصادر",
    crossCategory: "مقارنة بين فئتين", crossCategoryText: "تعكس النتيجة حالة الاستخدام هذه فقط — وليست جودة شاملة للمنتج.",
    outcomeLeft: "أنسب قليلًا لهذا المسار", outcomeRight: "أنسب قليلًا لهذا المسار", tie: "تعادل عملي لهذا المسار", insufficient: "لا توجد أدلة كافية للنتيجة",
    chooseWhen: "اختر هذه عندما…", neutral: "لا توجد أداة أفضل دائمًا. يعتمد اختيارك على المهمة والبيانات والقيود التي تهمك.",
    how: "كيف نقارن", howText: "تقييمات تحريرية موزونة لكل معيار مع مصادر ظاهرة. الأدلة الناقصة لا تتحول إلى صفر.",
    openMethod: "اقرأ المنهجية كاملة", recent: "أحدث الإشارات المراقبة", discovery: "إشارة اكتشاف — تحتاج مراجعة", noUpdates: "لا توجد إشارات متاحة.",
    explore: "استكشف الدليل الكامل", search: "ابحث بالاسم أو الفئة أو الهدف", all: "الكل", compareWith: "قارن", favorite: "مفضلة",
    advisorTitle: "اعثر على نقطة بداية", advisorText: "اختر هدفك الرئيسي وسنجهز مقارنة — دون حساب.", continue: "جهّز المقارنة", close: "إغلاق",
    goalResearch: "البحث", goalCoding: "البرمجة", goalCreative: "العمل الإبداعي", goalPrivate: "محلي وخاص",
    report: "أبلغ عن تصحيح", changed: "ما الذي تغير؟", weights: "أوزان الحالة", published: "ملفات منشورة", disclosure: "دليل مستقل. لم يدفع أي مزود مقابل الظهور. يجب الإفصاح عن روابط الأفلييت إذا أضيفت.",
  },
} satisfies Record<Language, Record<string, string>>;

export type Copy = typeof ui.en;
