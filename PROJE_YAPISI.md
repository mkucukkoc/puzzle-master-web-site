# Proje Yapısı

## Dizin Ağacı

```text
puzzle_web_site-main/
├── frontend/
│   ├── public/
│   │   ├── arrows-puzzle-master-icon.png
│   │   ├── favicon.png
│   │   ├── favicon.svg
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── BrandNav.jsx
│       │   └── LanguageSwitcher.jsx
│       ├── context/
│       │   └── LanguageContext.jsx
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   ├── PrivacyPage.jsx
│       │   ├── TermsPage.jsx
│       │   ├── HelpPage.jsx
│       │   ├── AccountDeletionPage.jsx
│       │   └── DataDeletionPage.jsx
│       ├── App.js
│       ├── App.css
│       └── index.css
└── README.md
```

## Sayfalar

- `HomePage.jsx`: Arrows Puzzle Master tanıtım sayfası ve oyun önizleme alanı
- `PrivacyPage.jsx`: Oyun verileri, reklamlar, abonelikler ve destek talepleri için gizlilik politikası
- `TermsPage.jsx`: Oyun kullanım koşulları
- `HelpPage.jsx`: Oynanış, can, ipucu, reklam ve abonelik yardımı
- `AccountDeletionPage.jsx`: Hesap silme süreci
- `DataDeletionPage.jsx`: Veri silme süreci

## Marka Sistemi

- Logo kaynağı: `frontend/public/arrows-puzzle-master-icon.png`
- Ana arka plan: `#fbfaf7`
- Ana metin: `#273052`
- Aksiyon rengi: `#e5484d`
- Kart/border rengi: `#dfe3f3`

## Çalıştırma

```bash
cd puzzle_web_site-main/frontend
npm install
npm start
```

## Build

```bash
cd puzzle_web_site-main/frontend
npm run build
```
