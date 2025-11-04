# DeepL Translation Widget - Setup Guide

## 🎉 Implementation Complete!

The DeepL translation feature has been successfully implemented with:

- ✅ Floating translation button on the right edge
- ✅ Slide-in translation panel
- ✅ Swedish and Finnish language support
- ✅ Glossary/Translation Memory checkbox
- ✅ Real-time page translation
- ✅ Reset to original functionality

## 🔑 Setup DeepL API Key

### Step 1: Get Your DeepL API Key

1. Go to [https://www.deepl.com/pro-api](https://www.deepl.com/pro-api)
2. Sign up for a free or paid account
3. Copy your API key from the dashboard

### Step 2: Configure the API Key

Create a `.env.local` file in the project root:

```bash
# In the project root directory
touch .env.local
```

Add your API key to the file:

```env
DEEPL_API_KEY=your_actual_api_key_here
```

**Important:** Replace `your_actual_api_key_here` with your real DeepL API key!

### Step 3: Restart the Development Server

```bash
# Kill the current server
# Then restart:
npm run dev
```

## 🚀 Usage

1. **Open the Translation Panel:**

   - Click the floating button with the arrow (←) on the right edge of the page

2. **Select Language:**

   - Choose "Swedish (Svenska)" or "Finnish (Suomi)" from the dropdown

3. **Enable Glossary (Optional):**

   - Check the "Use Glossary/Translation Memory" box for more formal translations

4. **Translate:**

   - Click "Translate Page" button
   - All visible text will be translated

5. **Reset:**
   - Click "Reset to Original" to restore the original English text

## 📝 How It Works

### Client-Side

- **TranslationButton.tsx**: Floating button component
- **TranslationPanel.tsx**: Slide-in panel with controls
- **TranslationContext.tsx**: State management for translations
- **translateDOM.ts**: DOM manipulation utilities

### Server-Side

- **app/api/translate/route.ts**: Secure API route that calls DeepL
- Keeps your API key safe (never exposed to the browser)

### Translation Process

1. Collects all text nodes from the DOM
2. Sends them to the server API endpoint
3. Server translates using DeepL API
4. Client applies translations back to the DOM
5. Original text is cached for reset functionality

## 🎨 Features

- **Smart Text Collection**: Only translates visible text content
- **Batch Translation**: Efficient API usage by translating all text at once
- **Loading States**: Shows spinner during translation
- **Error Handling**: Displays user-friendly error messages
- **Memory Management**: Caches original text for instant reset
- **No Persistence**: Translations reset on page refresh (as requested)

## 🔧 Glossary Support ✨ Auto-Detection Enabled!

The "Use Product terms Glossary" checkbox is integrated and **automatically finds your glossary by name**!

### How It Works:

1. **Create a glossary named "Product terms"** in your DeepL account

   - Go to https://www.deepl.com/pro-account/glossary
   - Click "Create glossary"
   - **Important:** Name it exactly **"Product terms"**
   - Choose your language pairs (EN → SV and/or EN → FI)
   - Add your custom terminology
   - Save the glossary

2. **That's it!** The system automatically:

   - Fetches all your glossaries when the checkbox is enabled
   - Finds the one named "Product terms" for your target language
   - Uses it for translation

3. **Check the browser console** to see which glossary is being used:
   ```
   Using glossary: Product terms (def3a26b-3e84...)
   ```

### Using a Different Glossary Name:

If you want to use a different glossary name, update line 52 in `app/api/translate/route.ts`:

```typescript
// Change "Product terms" to your glossary name:
const productTermsGlossary = glossaries.find(
  (g) => g.name === "Your Glossary Name Here" && ...
);
```

**Important Notes:**

- Swedish (SV) and Finnish (FI) do NOT support the "formality" parameter
- Only these languages support formality: DE, FR, IT, ES, NL, PL, PT-BR, PT-PT, RU
- Glossaries work perfectly with Swedish and Finnish for custom terminology
- You need separate glossaries for each language pair (EN-SV and EN-FI)

## 🐛 Troubleshooting

### "DeepL API key not configured" Error

- Make sure `.env.local` exists in the project root
- Verify the API key is correctly formatted
- Restart the dev server after adding the key

### Translation Not Working

- Check browser console for errors
- Verify your DeepL API key is valid
- Ensure you have API credits remaining (free tier: 500,000 chars/month)

### Button Not Visible

- Make sure the dev server is running
- Check that TranslationButton is rendered in the page
- Verify z-index isn't being overridden

## 📦 Dependencies

- **deepl-node**: Official DeepL Node.js client
- **Next.js 16**: Server-side API routes
- **React Context**: State management
- **Tailwind CSS v4**: Styling

## 🎯 Testing Quality

This implementation allows you to:

1. Test translation quality between original and translated content
2. Compare translations with and without glossary/formality
3. Quickly switch between Swedish and Finnish
4. Reset to original for easy comparison

Perfect for quality assurance testing of translation outputs!
