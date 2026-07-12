export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Accent color per writeup category, matching the pixel-art palette.
export const CATEGORY_COLOR: Record<string, string> = {
  web: 'text-blue',
  pwn: 'text-red',
  crypto: 'text-green',
  forensics: 'text-gold',
  rev: 'text-red-dark',
  misc: 'text-ink',
}
