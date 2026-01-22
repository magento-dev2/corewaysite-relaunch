# IndexNow Bulk URL Submission

This script automatically submits all 71 URLs from your website to search engines (Google, Bing, Yandex) using the IndexNow API.

## 📋 What This Does

- ✅ Automatically generates an API key (no manual setup needed!)
- ✅ Creates verification files
- ✅ Submits all 71 URLs to search engines in one request
- ✅ Notifies Google, Bing, Yandex, and other search engines instantly

## 🚀 How to Run

### Step 1: Run the Script

Open PowerShell in your project directory and run:

```powershell
cd c:\Users\NIKHIL\Desktop\coreway-new
node scripts/indexnow-submit.js
```

### Step 2: What Happens

The script will:
1. **Generate an API key** automatically (or use existing one)
2. **Create verification files** in the `/public` folder:
   - `indexnow-key.txt` - Your API key
   - `[uuid].txt` - Verification file (same content as API key)
3. **Submit all 71 URLs** to IndexNow API
4. **Show success message** when complete

### Step 3: Deploy to Production

After running the script, you'll have new files in your `public` folder:
- `public/indexnow-key.txt`
- `public/[some-uuid].txt`

**Deploy these files** to your live website along with the fixed `robots.txt`

### Step 4: Verify Deployment

Visit these URLs to confirm the files are accessible:
- `https://www.corewaysolution.com/indexnow-key.txt`
- `https://www.corewaysolution.com/[your-uuid].txt`

Both should display your API key.

## 📝 Example Output

```
============================================================
IndexNow Bulk URL Submission Script
============================================================

Website: https://www.corewaysolution.com
Total Pages: 71

✓ Generated new API key: 12345678-abcd-1234-abcd-123456789abc
✓ Saved to: c:\Users\NIKHIL\Desktop\coreway-new\public\indexnow-key.txt
✓ Created verification file: 12345678-abcd-1234-abcd-123456789abc.txt

📤 Submitting URLs to IndexNow...
   Total URLs: 71

✅ SUCCESS! All URLs submitted to search engines
   Status Code: 200

🎉 IndexNow has notified:
   • Google
   • Bing
   • Yandex
   • And other participating search engines

============================================================
📋 NEXT STEPS:
============================================================

1. Deploy these files to your production server:
   • public/indexnow-key.txt
   • public/12345678-abcd-1234-abcd-123456789abc.txt

2. Verify the API key file is accessible:
   Visit: https://www.corewaysolution.com/12345678-abcd-1234-abcd-123456789abc.txt
   Should display: 12345678-abcd-1234-abcd-123456789abc

3. Wait 24-48 hours for search engines to process

4. Check Google Search Console for indexing improvements

5. For immediate priority pages, use Google Search Console
   URL Inspection tool to request indexing manually

============================================================
```

## ❓ FAQ

### Do I need to get an API key myself?
**No!** The script generates it automatically. Just run it.

### How often can I run this?
**Maximum once per day.** Don't run it too frequently or search engines may ignore your requests.

### What if I get an error?
Common issues:
- **ENOTFOUND**: Check your internet connection
- **403/422**: API key file not accessible on your website - make sure to deploy the files first
- **429**: You're submitting too frequently - wait 24 hours

### Do I need to do this again when I add new pages?
Yes, run the script again when you have new pages to index. The script will use your existing API key.

### Will this guarantee indexing?
No, but it **notifies** search engines immediately. They still decide what to index based on content quality, relevance, and other factors.

## 🔧 Troubleshooting

If the API returns an error after you deploy:
1. Make sure both `.txt` files are accessible via browser
2. Ensure the files contain only the API key (no extra spaces/newlines)
3. Wait a few hours and try again - the API key needs to be verified first

## 📊 Monitoring Results

After 24-48 hours, check:
1. **Google Search Console** → Coverage → Check how many pages are indexed
2. Run: `site:corewaysolution.com` in Google to see total indexed pages
3. For specific pages: `site:corewaysolution.com/solution/ai-consulting`
