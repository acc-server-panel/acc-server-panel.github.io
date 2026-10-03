# 🏎️ ACC Dedicated Server AdminPanel — Official Landing Page

[![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26.svg)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-vanilla-1572B6.svg)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen.svg)](#-repository-architecture)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-222222.svg)](https://acc-server-panel.github.io/)
[![Languages](https://img.shields.io/badge/Languages-ES%20%7C%20EN-blue.svg)](#-main-features)

Static showcase website for **[ACC Dedicated Server AdminPanel](https://github.com/PytricioPUCV/ACC-Dedicated-Server-AdminPanel)**, the web administration panel and automatic track rotator for the **Assetto Corsa Competizione** dedicated server (`accServer.exe`).

Built with plain **HTML, CSS and vanilla JavaScript**: no frameworks, no build step, no dependencies and no external fonts.

🌐 **Live:** <https://acc-server-panel.github.io/>

---

## ⚡ Purpose of the Page

AdminPanel solves a specific problem (configuring an ACC server and rotating tracks without editing JSON by hand), but a GitHub repository is not the best place for a league admin to discover it.

This landing page:
1. Explains in plain language **why** setting up an ACC server by hand is fragile.
2. Shows the panel's **features** with real screenshots.
3. Walks through installation in **four steps**, with the Steam path ready to copy.
4. Answers **frequently asked questions** and leads to the executable download.
5. Is optimized for **search engines and social media** (meta tags, Open Graph, Twitter Card, JSON-LD, `sitemap.xml`).

---

## ✨ Main Features

* 🪶 **Zero dependencies:** no frameworks, no npm, no CDN, no Google Fonts.
* 🌍 **Bilingual ES / EN:** the HTML is written in Spanish (the indexed version) and English is applied from `js/main.js`. The chosen language is saved in `localStorage`.
* 📱 **Responsive:** accessible mobile menu (closes with `Esc`, an outside click, or a breakpoint change).
* 📋 **Copy button:** copies the dedicated server path using the Clipboard API, with a fallback for older browsers and `file://`.
* 🖼️ **Screenshot placeholders:** if an image is missing, a "Screenshot pending" block is shown in its place.
* 🎞️ **Reveal animations:** powered by `IntersectionObserver` and automatically disabled with `prefers-reduced-motion`.
* 🔍 **Full SEO:** `canonical`, Open Graph, Twitter Card, JSON-LD structured data, `robots.txt` and `sitemap.xml`.
* 🎨 **Centralized palette:** every color is defined as a variable in `:root` inside `css/style.css`.

---

## 🗺️ Page Sections

| Anchor | Section | Content |
| :--- | :--- | :--- |
| `#top` | **Hero** | Headline, calls to action and main panel screenshot |
| `#por-que` | **Why** | The pitfalls of configuring an ACC server by hand |
| `#funciones` | **Features** | Track rotation, live drivers and configuration editor |
| `#capturas` | **Screenshots** | Gallery with 9 panel views |
| `#empezar` | **Get Started** | Four-step installation and Steam path with a Copy button |
| `#faq` | **FAQ** | Frequently asked questions |
| `#descargar` | **Download** | Final call to download the executable |

---

## 📁 Repository Architecture

```text
Web Page/
│
├── index.html                 # Full page (static Spanish content, SEO and JSON-LD)
├── README.md                  # Project documentation
├── robots.txt                 # Search engine rules
├── sitemap.xml                # Site map
│
├── css/
│   └── style.css              # Styles and palette in :root variables
│
├── js/
│   └── main.js                # ES/EN language, mobile menu, Copy button, animations and screenshots
│
└── assets/
    ├── README.txt             # Expected names and sizes for each screenshot
    ├── favicon.svg            # Site icon (steering wheel on a dark background)
    ├── og-image.png           # Social media image (1200x630)
    └── captura-*.png          # Panel screenshots (16:9)
```

---

## 📄 License and Disclaimer

The AdminPanel license is available in the [main repository](https://github.com/PytricioPUCV/ACC-Dedicated-Server-AdminPanel).

*Assetto Corsa Competizione is a registered trademark of Kunos Simulazioni S.r.l. and Digital Bros S.p.A. This project is an independent community-developed tool and is not officially affiliated with Kunos Simulazioni.*
