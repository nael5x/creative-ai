import type { Localized } from "../types";

export type Deal = {
  id: string;
  toolId: string;
  title: Localized;
  detail: Localized;
  url: string;
};

const L = (en: string, ar: string): Localized => ({ en, ar });

export const deals: Deal[] = [
  {
    id: "chatgpt-plus",
    toolId: "chatgpt",
    title: L("ChatGPT — official plans", "ChatGPT — الخطط الرسمية"),
    detail: L("Compare Free and Plus on the official pricing page.", "قارن المجاني والمدفوع على صفحة الأسعار الرسمية."),
    url: "https://chatgpt.com/",
  },
  {
    id: "claude-pro",
    toolId: "claude",
    title: L("Claude — official plans", "Claude — الخطط الرسمية"),
    detail: L("See Pro and team plans on the official site.", "اطّلع على خطط Pro والفرق على الموقع الرسمي."),
    url: "https://claude.ai/",
  },
  {
    id: "cursor-plans",
    toolId: "cursor",
    title: L("Cursor — official plans", "Cursor — الخطط الرسمية"),
    detail: L("Free and Pro tiers on the official site.", "الفئات المجانية والمدفوعة على الموقع الرسمي."),
    url: "https://www.cursor.com/",
  },
  {
    id: "midjourney-plans",
    toolId: "midjourney",
    title: L("Midjourney — official plans", "Midjourney — الخطط الرسمية"),
    detail: L("Subscription tiers on the official site.", "مستويات الاشتراك على الموقع الرسمي."),
    url: "https://www.midjourney.com/",
  },
];

export const dealMap = new Map(deals.map((d) => [d.id, d]));

export function dealForTool(toolId: string): Deal | undefined {
  return deals.find((d) => d.toolId === toolId);
}
