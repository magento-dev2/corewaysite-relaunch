# Quick Image Optimization Guide

## Replace <img> tags with Next.js <Image> component

### Priority 1: Hero Image (LCP Optimization)

**File**: `components/home/Hero.tsx`

**Current** (line 195-198):
```typescript
<img
  src={heroItem.image}
  alt={heroItem.title}
  className="w-full max-w-4xl rounded-lg shadow-lg" />
```

**Replace with**:
```typescript
<Image
  src={heroItem.image}
  alt={heroItem.title}
  width={1024}
  height={768}
  priority  // Critical for LCP
  quality={90}
  className="w-full max-w-4xl rounded-lg shadow-lg"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1024px"
/>
```

**Don't forget to add import**:
```typescript
import Image from 'next/image';
```

---

## Other Images to Optimize

### 1. TrustedBy.tsx
Find all `<img` tags and replace with `<Image>`
- Add width/height based on actual image dimensions
- Use `loading="lazy"` for images below the fold
- Add `sizes` prop for responsive loading

### 2. Testimonials.tsx
- Profile images should use `width={80}` `height={80}`
- Add `quality={85}` for portrait images

### 3. ServicesGSAP.tsx
- Service icons should have consistent sizes
- Use `loading="lazy"` since below fold

### 4. Integrations.tsx
- Logo images should maintain aspect ratio
- Add `quality={90}` for logo clarity

### 5. CTO.tsx
- Portrait image needs proper sizing
- Add `priority={true}` if above fold

---

## Common Patterns

### Pattern 1: Logo/Icon
```typescript
<Image
  src="/path/to/logo.png"
  alt="Logo name"
  width={120}
  height={40}
  quality={90}
/>
```

### Pattern 2: Profile/Avatar
```typescript
<Image
  src="/path/to/avatar.jpg"
  alt="Person name"
  width={80}
  height={80}
  className="rounded-full"
  quality={85}
/>
```

### Pattern 3: Below-fold Image
```typescript
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={600}
  height={400}
  loading="lazy"
  quality={85}
  sizes="(max-width: 768px) 100vw, 600px"
/>
```

### Pattern 4: Hero/LCP Image
```typescript
<Image
  src="/path/to/hero.jpg"
  alt="Description"
  width={1024}
  height={768}
  priority
  quality={90}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1024px"
/>
```

---

## Testing After Changes

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Check for errors**:
   - Look for missing width/height warnings
   - Verify all images load correctly

3. **Test performance**:
   ```bash
   npm start
   # Then run Lighthouse audit
   ```

4. **Verify WebP conversion**:
   - Open DevTools Network tab
   - Filter by "Img"
   - Check format column for WebP/AVIF

---

## Expected Results

- ✅ LCP improves from 8.54s to <2.5s
- ✅ Image sizes reduce by 50-70%
- ✅ Automatic WebP/AVIF serving
- ✅ Responsive image loading
- ✅ Better mobile performance
