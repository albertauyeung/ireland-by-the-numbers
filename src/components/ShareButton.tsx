import { useState } from 'react';
import { toPng } from 'html-to-image';
import { useLocale } from '../i18n/LocaleContext';

type Props = {
  targetRef: React.RefObject<HTMLElement | null>;
  filename?: string;
  label?: string;
};

export default function ShareButton({
  targetRef,
  filename = 'realachas.png',
  label,
}: Props) {
  const { t } = useLocale();
  const [busy, setBusy] = useState(false);
  const onClick = async () => {
    if (!targetRef.current) return;
    try {
      setBusy(true);
      const dataUrl = await toPng(targetRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#FDFBF6',
      });
      const a = document.createElement('a');
      a.download = filename;
      a.href = dataUrl;
      a.click();
    } catch (err) {
      console.error(err);
      alert('Could not generate image. See console.');
    } finally {
      setBusy(false);
    }
  };
  return (
    <button onClick={onClick} disabled={busy} className="btn-ghost">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {busy ? t('share.rendering') : (label ?? t('share.save'))}
    </button>
  );
}
