// English baseline lives in src/data/facts.ts. This file is kept
// for symmetry — it is intentionally empty so the lookup falls
// through to the canonical Fact objects.
import type { FactTranslation } from '../facts';

const en: Record<string, FactTranslation> = {};

export default en;
