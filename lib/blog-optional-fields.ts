export type BlogOptionalField = 'readTime' | 'faqSchema' | 'author' | 'showRelatedArticles';

const BLOG_OPTIONAL_FIELDS: BlogOptionalField[] = ['readTime', 'faqSchema', 'author', 'showRelatedArticles'];

function hasMissingColumn(error: unknown, columnName: string) {
  if (!(error instanceof Error)) {
    return false;
  }

  return error.message.includes(columnName)
    || error.message.includes(`column \`${columnName}\` does not exist`)
    || error.message.includes(`column: '${columnName}'`)
    || error.message.includes(`column: "${columnName}"`);
}

function hasUnknownBlogField(error: unknown, fieldName: string) {
  return error instanceof Error
    && (error.message.includes(`Unknown field \`${fieldName}\``)
      || error.message.includes(`Unknown argument \`${fieldName}\``));
}

export function getMissingBlogOptionalFields(error: unknown): BlogOptionalField[] {
  return BLOG_OPTIONAL_FIELDS.filter((field) => (
    hasMissingColumn(error, `Blog.${field}`)
    || hasMissingColumn(error, field)
    || hasUnknownBlogField(error, field)
  ));
}

export function isMissingBlogOptionalColumn(error: unknown) {
  return getMissingBlogOptionalFields(error).length > 0;
}

export function omitBlogOptionalFields<T extends Record<string, unknown>>(
  value: T,
  fields: BlogOptionalField[],
): Omit<T, BlogOptionalField> & Partial<Pick<T, BlogOptionalField>> {
  const clone = { ...value } as Record<string, unknown>;

  for (const field of fields) {
    delete clone[field];
  }

  return clone as Omit<T, BlogOptionalField> & Partial<Pick<T, BlogOptionalField>>;
}

export function withMissingBlogOptionalFields<T extends Record<string, unknown>>(
  value: T,
  fields: BlogOptionalField[],
) {
  const next = { ...value } as T & Partial<Record<BlogOptionalField, null>>;

  for (const field of fields) {
    next[field] = null;
  }

  return next;
}
