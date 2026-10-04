# FormReady BD

A bilingual, browser-only application preparation tool by Zahirul Islam.

## Features
- Compare names and dates of birth across three documents against a chosen reference.
- Separate matching, different and incomplete values.
- Custom checklist with removable items.
- Bangla / English interface.
- Optional browser storage, JSON backup import/export and printable report.
- Responsive layout, no API keys, external assets or server.

## Run
Open `index.html` in a modern browser. For consistent browser storage, serve the folder:

```sh
python -m http.server 8000
```
Open http://localhost:8000. Use print → Save as PDF to export a report.

## Upload to GitHub — সহজ পদ্ধতি
1. ZIP extract করুন। নতুন repository তৈরি করুন: `formready-bd`.
2. Add file → Upload files নির্বাচন করুন। Extracted folder-এর **ভেতরের** index.html, style.css, app.js, logic.js, README.md, LICENSE, test.cjs ও ROADMAP.md আপলোড করুন। index.html repository root-এ থাকতে হবে।
3. Commit changes করুন।
4. Settings → Pages → Deploy from a branch → main → /(root) → Save.
5. সফল deployment-এর পরে সম্ভাব্য URL: https://iamzahirul.github.io/formready-bd/ . GitHub Pages-এর প্রদর্শিত URL ব্যবহার করুন।
6. Portfolio-তে এই demo ও repository-এর link যোগ করুন।

This package has not been pushed to your GitHub account. Do not overwrite your existing portfolio repository.

## Verification
Run `node test.cjs` for comparison and date-validation checks. Before releasing, manually try mobile layout, language switch, print, optional save/reload, clear, and backup round-trip in your target browsers.

## Privacy and limits
No network requests are made by the application. Details stay in memory unless you enable browser storage or export a backup. Shared-device users can access stored data. Backup files are unencrypted; keep them private. Hosting providers may log ordinary page visits.

This tool compares manually entered information; it does not read uploaded documents, verify authenticity, determine eligibility or guarantee application acceptance. Checklist examples are not official requirements. Names are compared after Unicode normalization, trimming, collapsing spaces and case folding. Punctuation, abbreviations and scripts remain significant. Birth dates must be valid and not in the future.

## Technology
Plain HTML, CSS and JavaScript. No build step or paid services.

## License
MIT
