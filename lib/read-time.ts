export function normalizeReadTimeValue(value: unknown): string {
  if (value === undefined || value === null || value === '') {
    return '9 min read';
  }

  if (typeof value === 'number') {
    return Number.isFinite(value) && value > 0
      ? `${Math.trunc(value)} min read`
      : '9 min read';
  }

  if (typeof value !== 'string') {
    return '9 min read';
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return '9 min read';
  }

  const numericMatch = trimmed.match(/^(\d+)$/);
  if (numericMatch) {
    return `${numericMatch[1]} min read`;
  }

  const minuteMatch = trimmed.match(/^(\d+)\s*min(?:ute)?s?(?:\s*read)?$/i);
  if (minuteMatch) {
    return `${minuteMatch[1]} min read`;
  }

  return trimmed;
}

export function toReadTimeInput(value: unknown): string {
  const normalized = normalizeReadTimeValue(value);
  const numericMatch = normalized.match(/^(\d+)/);
  return numericMatch ? numericMatch[1] : '9';
}

export function formatReadTimeDisplay(value: unknown): string {
  return normalizeReadTimeValue(value);
}
