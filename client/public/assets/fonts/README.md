# Typography Fonts Setup

## Required Font Files

Please add the following font files to this directory:

### 1. La Luxes (Primary Headings - Luxury/Premium Look)
- `LaLuxes-Regular.woff2`
- `LaLuxes-Regular.woff`

**Source:** [Creative Market](https://creativemarket.com) or [MyFonts](https://www.myfonts.com)

### 2. Giveny (Sub-headings - Elegant Serif)
- `Giveny-Regular.woff2`
- `Giveny-Regular.woff`

**Source:** [DaFont](https://www.dafont.com) or [Font Squirrel](https://www.fontsquirrel.com)

### 3. Brandon Grotesque (Numbers/Prices - Optional but Elegant)
- `BrandonGrotesque-Regular.woff2`
- `BrandonGrotesque-Regular.woff`
- `BrandonGrotesque-Medium.woff2`
- `BrandonGrotesque-Medium.woff`

**Source:** [Adobe Fonts](https://fonts.adobe.com) or [MyFonts](https://www.myfonts.com)

### 4. Montserrat (Body Text - from Google Fonts)
Already loaded via Google Fonts CDN in `index.html`

---

## Typography Usage

| Element | Font | CSS Class |
|---------|------|-----------|
| H1, H2 | La Luxes | `.font-heading` |
| H3, H4, H5, H6 | Giveny | `.font-subheading` |
| Body Text | Montserrat Regular | `.font-body` |
| Buttons & Labels | Montserrat Semi-Bold | `.font-button` |
| Prices/Numbers | Brandon Grotesque | `.font-price` |

## Tailwind Classes

```html
<!-- Primary Heading -->
<h1 class="font-heading">Luxury Photography</h1>

<!-- Sub-heading -->
<h3 class="font-subheading">Our Services</h3>

<!-- Body Text -->
<p class="font-body">Clean, readable content...</p>

<!-- Button -->
<button class="font-button">Book Now</button>

<!-- Price -->
<span class="font-price">$2,500</span>
```

## Font Conversion

If you have TTF/OTF files, convert them to WOFF2/WOFF using:
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Transfonter](https://transfonter.org/)
