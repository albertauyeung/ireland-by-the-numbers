import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-app py-24 text-center">
      <div className="text-6xl mb-3">🍀</div>
      <h1 className="font-display text-3xl">Tá brón orainn — not found.</h1>
      <p className="mt-2 text-ink-700/80">
        That page doesn’t seem to exist.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Back home
      </Link>
    </div>
  );
}
