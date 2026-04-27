import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

export default function NotFound() {
  const { t } = useLocale();
  return (
    <div className="container-app py-24 text-center">
      <div className="text-6xl mb-3">🍀</div>
      <h1 className="font-display text-3xl">{t('notFound.title')}</h1>
      <p className="mt-2 text-ink-700/80">{t('notFound.body')}</p>
      <Link to="/" className="btn-primary mt-6">
        {t('notFound.back')}
      </Link>
    </div>
  );
}
