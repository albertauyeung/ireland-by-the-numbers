import { useLocale } from '../i18n/LocaleContext';

export function Loading({ label }: { label?: string }) {
  const { t } = useLocale();
  return (
    <div className="card p-6 flex items-center gap-3 text-ink-700/80">
      <div className="h-2 w-2 rounded-full bg-emerald_ie-700 animate-pulse" />
      <div className="h-2 w-2 rounded-full bg-emerald_ie-700 animate-pulse [animation-delay:120ms]" />
      <div className="h-2 w-2 rounded-full bg-emerald_ie-700 animate-pulse [animation-delay:240ms]" />
      <span className="text-sm">{label ?? t('loading.default')}</span>
    </div>
  );
}

export function ErrorBox({ error }: { error: unknown }) {
  const { t } = useLocale();
  const message =
    error instanceof Error ? error.message : t('loading.errorFallback');
  return (
    <div className="card p-6 border-red-200 bg-red-50 text-sm text-red-900">
      <div className="font-medium mb-1">{t('loading.errorTitle')}</div>
      <div className="text-red-900/80">{message}</div>
    </div>
  );
}
