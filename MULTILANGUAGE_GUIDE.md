# Multi-Language Implementation Guide

## Overview
This project now supports multiple languages (English, Spanish, French, and German) with a clean, scalable architecture.

## Structure

### 1. Translation Files
All translations are stored in JSON files organized by language:

```
/locales
  /en
    /home.json          # English translations for home page
  /es
    /home.json          # Spanish translations for home page
  /fr
    /home.json          # French translations for home page
  /de
    /home.json          # German translations for home page
```

### 2. Language Context
- **Location**: `/contexts/LanguageContext.tsx`
- **Purpose**: Manages language state and provides translation function across the app
- **Features**:
  - Stores selected language in localStorage
  - Provides `t()` function for translations
  - Supports nested keys (e.g., `hero.title`)

### 3. Language Switcher
- **Location**: `/components/LanguageSwitcher.tsx`
- **Features**:
  - Dropdown with country flags
  - Persists selection
  - Clean UI matching site design

## How to Use Translations

### In Components

```tsx
"use client";
import { useLanguage } from '@/contexts/LanguageContext';

export default function MyComponent() {
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

### Translation Key Format

The `t()` function uses dot notation to access nested values:

```tsx
// For this JSON structure:
{
  "hero": {
    "title": "Automate",
    "description": "Build complex automations..."
  }
}

// Use:
t('hero.title')        // Returns: "Automate"
t('hero.description')  // Returns: "Build complex automations..."
```

## Currently Translated Sections on Home Page

✅ **Hero Section**
- Title and highlighted text
- Description
- Call-to-action button

✅ **CTA Section** (Bottom of page)
- Badge text
- Title
- Description
- Button texts
- Footer text

## Adding New Translations

### Step 1: Add to JSON Files

Add your new translations to each language file:

**English** (`/locales/en/home.json`):
```json
{
  "newSection": {
    "title": "New Section Title",
    "description": "Description here"
  }
}
```

**Spanish** (`/locales/es/home.json`):
```json
{
  "newSection": {
    "title": "Nuevo Título de Sección",
    "description": "Descripción aquí"
  }
}
```

Repeat for French and German.

### Step 2: Use in Component

```tsx
const { t } = useLanguage();

<h2>{t('newSection.title')}</h2>
<p>{t('newSection.description')}</p>
```

## Adding a New Language

### Step 1: Create Translation File
```bash
mkdir -p locales/it
touch locales/it/home.json
```

### Step 2: Add Translations
Copy structure from `locales/en/home.json` and translate all values.

### Step 3: Update Language Context
In `/contexts/LanguageContext.tsx`:

```tsx
type Language = 'en' | 'es' | 'fr' | 'de' | 'it'; // Add 'it'

const translations: Record<Language, Record<string, any>> = {
  en: require('../locales/en/home.json'),
  es: require('../locales/es/home.json'),
  fr: require('../locales/fr/home.json'),
  de: require('../locales/de/home.json'),
  it: require('../locales/it/home.json'), // Add this
};
```

### Step 4: Update Navbar
In `/components/Navbar.tsx`:

```tsx
const languages = [
  { "code": "en", "name": "English", "country": "us" },
  { "code": "es", "name": "Español", "country": "es" },
  { "code": "fr", "name": "Français", "country": "fr" },
  { "code": "de", "name": "Deutsch", "country": "de" },
  { "code": "it", "name": "Italiano", "country": "it" } // Add this
]
```

## Next Steps: Translating Other Pages

### For Each Page:

1. **Create translation files** for each language:
   ```
   /locales/en/blog.json
   /locales/es/blog.json
   /locales/fr/blog.json
   /locales/de/blog.json
   ```

2. **Update LanguageContext** to load the new files:
   ```tsx
   const translations: Record<Language, Record<string, any>> = {
     en: {
       ...require('../locales/en/home.json'),
       ...require('../locales/en/blog.json'),
     },
     // Repeat for other languages
   };
   ```

3. **Use in page components** with `t()` function

## Example: Full Translation Structure

```json
{
  "hero": {
    "title": "Automate",
    "titleHighlight": "without limits",
    "description": "Build complex automations...",
    "button": "See what we do"
  },
  "features": {
    "title": "Our Features",
    "items": {
      "automation": "Automation",
      "integration": "Integration",
      "analytics": "Analytics"
    }
  }
}
```

Usage:
```tsx
{t('hero.title')}
{t('hero.titleHighlight')}
{t('features.items.automation')}
```

## Best Practices

1. **Keep keys descriptive**: Use clear, hierarchical keys
2. **Maintain consistency**: Use same structure across all languages
3. **Test each language**: Switch languages and verify all text displays correctly
4. **Avoid hardcoded text**: Always use translation keys
5. **Handle missing translations**: The `t()` function returns the key if translation is missing

## Current Implementation Status

✅ Language Context Provider
✅ Language Switcher in Navbar
✅ Hero Section Translated
✅ CTA Section Translated
✅ 4 Languages Supported (EN, ES, FR, DE)
✅ LocalStorage Persistence
✅ Dynamic Language Switching

## Future Enhancements

- [ ] Translate all home page sections
- [ ] Translate navigation menu items
- [ ] Add translations for Blog page
- [ ] Add translations for Tutorials page
- [ ] Add translations for Community page
- [ ] Add more languages (Italian, Portuguese, etc.)
- [ ] Date/time localization
- [ ] Number formatting per locale
