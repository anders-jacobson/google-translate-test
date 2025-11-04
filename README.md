# Getinge Servo-u Mechanical Ventilator - Next.js Recreation

This is a Next.js recreation of the Getinge Servo-u Mechanical Ventilator product page, built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Responsive design matching the original Getinge page
- ✅ Navigation header with dropdown menus
- ✅ Hero section with product information
- ✅ Interactive tab navigation (Overview, Features, Benefits, Documents, Education & Training)
- ✅ Image galleries
- ✅ Feature cards and product sections
- ✅ Related products section
- ✅ Footer with site links
- ✅ Tailwind CSS for styling
- ✅ TypeScript for type safety

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/app
  /components
    - Header.tsx          # Navigation header
    - Footer.tsx          # Footer component
    - TabSection.tsx      # Tabbed content section
    - RelatedProducts.tsx # Related products grid
  - page.tsx             # Main page
  - layout.tsx           # Root layout
  - globals.css          # Global styles
```

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Color Scheme

- Primary Blue: `#18274a` (Getinge brand color)
- White: `#ffffff`
- Gray shades for backgrounds and text

## Original Page

This recreation is based on the Getinge Servo-u Mechanical Ventilator page:
[https://www.getinge.com/int/products/servo-u-mechanical-ventilator/](https://www.getinge.com/int/products/servo-u-mechanical-ventilator/)

## Notes

- Images are loaded from the original Getinge CDN
- Some interactive features from the original may be simplified
- Video player placeholder is included (not functional)
- All content and trademarks belong to Getinge
