// Önbellek için içerik özetli varlık adları: "site.css" -> "/assets/site.<özet>.css".
// /assets/ uzun süre önbelleğe alındığından, içerik değişince adres de değişir. Yollar src/ klasörüne görelidir.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = dirname(fileURLToPath(import.meta.url));
const names = new Map();

export function hashedName(rel) {
  if (!names.has(rel)) {
    const h = createHash('sha256').update(readFileSync(join(src, rel))).digest('hex').slice(0, 10);
    names.set(rel, rel.replace(/(\.[a-z0-9]+)$/, `.${h}$1`));
  }
  return names.get(rel);
}

export const asset = (rel) => `/assets/${hashedName(rel)}`;
