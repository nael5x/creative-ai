import type { ComponentStatus } from "../types";
import type { Copy } from "../i18n";

const label: Record<ComponentStatus, keyof Copy> = {
  verified: "statusVerified",
  listed: "statusListed",
  community: "statusCommunity",
};

export function StatusBadge({ status, copy }: { status: ComponentStatus; copy: Copy }) {
  return <span className={`status-badge status-${status}`}>{copy[label[status]]}</span>;
}
