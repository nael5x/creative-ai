import { useState } from "react";
import type { Copy } from "../i18n";
import { addCorrection } from "../data/editorial";

export function CorrectionForm({ copy, entityType, entityId, entityName, onClose }: { copy: Copy; entityType: "tool" | "component"; entityId: string; entityName: string; onClose: () => void }) {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  function submit() {
    if (!message.trim()) return;
    addCorrection({ entityType, entityId, message: message.trim() });
    setSent(true);
    setTimeout(onClose, 1200);
  }
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.currentTarget === e.target) onClose(); }}>
      <section className="advisor correction-form" role="dialog" aria-modal="true" aria-labelledby="correction-title">
        <button className="modal-close" onClick={onClose} aria-label={copy.close}>×</button>
        <h2 id="correction-title">{copy.correctionTitle}</h2>
        <p>{entityName}</p>
        {sent ? <p className="correction-sent">{copy.correctionSent}</p> : <>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={copy.correctionPlaceholder} />
          <div className="actions"><button className="secondary" onClick={onClose}>{copy.close}</button><button className="primary" onClick={submit} disabled={!message.trim()}>{copy.send ?? "Send"}</button></div>
        </>}
      </section>
    </div>
  );
}
