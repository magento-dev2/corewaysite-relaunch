export type FAQItem = {
  question: string;
  answer: string;
};

function isFAQItem(value: unknown): value is FAQItem {
  return typeof value === 'object'
    && value !== null
    && typeof (value as { question?: unknown }).question === 'string'
    && typeof (value as { answer?: unknown }).answer === 'string';
}

function fromSchemaOrgItem(value: unknown): FAQItem | null {
  if (typeof value !== 'object' || value === null) {
    return null;
  }

  const question = (value as { name?: unknown }).name;
  const acceptedAnswer = (value as { acceptedAnswer?: unknown }).acceptedAnswer;
  const answer = typeof acceptedAnswer === 'object' && acceptedAnswer !== null
    ? (acceptedAnswer as { text?: unknown }).text
    : undefined;

  if (typeof question !== 'string' || typeof answer !== 'string') {
    return null;
  }

  return {
    question,
    answer,
  };
}

function extractFAQItems(value: unknown): FAQItem[] {
  if (Array.isArray(value)) {
    const directItems = value.filter(isFAQItem);
    if (directItems.length > 0) {
      return directItems;
    }

    return value
      .map(fromSchemaOrgItem)
      .filter((item): item is FAQItem => item !== null);
  }

  if (typeof value === 'object' && value !== null) {
    const mainEntity = (value as { mainEntity?: unknown }).mainEntity;
    if (Array.isArray(mainEntity)) {
      return extractFAQItems(mainEntity);
    }
  }

  return [];
}

export function parseFAQItems(value: unknown): FAQItem[] {
  if (value === undefined || value === null || value === '') {
    return [];
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      return [];
    }

    try {
      return parseFAQItems(JSON.parse(trimmed));
    } catch {
      return [];
    }
  }

  return extractFAQItems(value);
}

export function serializeFAQItems(items: FAQItem[]): string {
  const validItems = items
    .map((item) => ({
      question: item.question.trim(),
      answer: item.answer.trim(),
    }))
    .filter((item) => item.question && item.answer);

  return validItems.length > 0 ? JSON.stringify(validItems) : '';
}

export function normalizeFAQSchema(value: unknown): string | null {
  const items = parseFAQItems(value);
  return items.length > 0 ? JSON.stringify(items) : null;
}
