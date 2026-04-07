export type FAQItem = {
  question: string;
  answer: string;
};

function normalizeText(value: unknown): string | null {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed || null;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (typeof value === 'object' && value !== null) {
    const textLikeValue = (value as {
      text?: unknown;
      value?: unknown;
      answer?: unknown;
      name?: unknown;
      question?: unknown;
    }).text
      ?? (value as { value?: unknown }).value
      ?? (value as { answer?: unknown }).answer
      ?? (value as { name?: unknown }).name
      ?? (value as { question?: unknown }).question;

    if (textLikeValue !== undefined) {
      return normalizeText(textLikeValue);
    }
  }

  return null;
}

function isFAQItem(value: unknown): value is FAQItem {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return normalizeText((value as { question?: unknown }).question) !== null
    && normalizeText((value as { answer?: unknown }).answer) !== null;
}

function fromSchemaOrgItem(value: unknown): FAQItem | null {
  if (typeof value !== 'object' || value === null) {
    return null;
  }

  const question = normalizeText(
    (value as { question?: unknown; name?: unknown; title?: unknown }).question
      ?? (value as { name?: unknown }).name
      ?? (value as { title?: unknown }).title,
  );
  const answer = normalizeText(
    (value as { answer?: unknown; acceptedAnswer?: unknown }).answer
      ?? (value as { acceptedAnswer?: unknown }).acceptedAnswer,
  );

  if (!question || !answer) {
    return null;
  }

  return {
    question,
    answer,
  };
}

function extractFAQItems(value: unknown): FAQItem[] {
  if (Array.isArray(value)) {
    const directItems = value
      .filter(isFAQItem)
      .map((item) => ({
        question: normalizeText(item.question) ?? '',
        answer: normalizeText(item.answer) ?? '',
      }))
      .filter((item) => item.question && item.answer);

    if (directItems.length > 0) {
      return directItems;
    }

    return value
      .map(fromSchemaOrgItem)
      .filter((item): item is FAQItem => item !== null);
  }

  if (typeof value === 'object' && value !== null) {
    const container = value as {
      mainEntity?: unknown;
      faqs?: unknown;
      faq?: unknown;
      faqSchema?: unknown;
      questions?: unknown;
      items?: unknown;
      data?: unknown;
    };

    const nestedCollections = [
      container.mainEntity,
      container.faqs,
      container.faq,
      container.faqSchema,
      container.questions,
      container.items,
      container.data,
    ];

    for (const nestedValue of nestedCollections) {
      const items = extractFAQItems(nestedValue);
      if (items.length > 0) {
        return items;
      }
    }

    return fromSchemaOrgItem(value) ? [fromSchemaOrgItem(value)!] : [];
  }

  return [];
}

export function parseFAQItems(value: unknown): FAQItem[] {
  if (value === undefined || value === null || value === '') {
    return [];
  }

  if (typeof value === 'string') {
    let currentValue: unknown = value.trim();
    if (!currentValue) {
      return [];
    }

    for (let depth = 0; depth < 3 && typeof currentValue === 'string'; depth += 1) {
      const trimmed = currentValue.trim();
      if (!trimmed) {
        return [];
      }

      try {
        currentValue = JSON.parse(trimmed);
      } catch {
        break;
      }
    }

    if (typeof currentValue === 'string') {
      return [];
    }

    return extractFAQItems(currentValue);
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
