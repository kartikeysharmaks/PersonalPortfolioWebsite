# Sanity Studio — Personal Portfolio

## Run Studio locally (edit Education & all content)

```bash
cd backend-sanity
npm install
npm start
```

Studio opens at **http://localhost:3333**

## Add Education entries

1. Start the studio (`npm start` above).
2. In the sidebar, open **Education** (pinned at the top).
3. Click **Create** and fill in:
   - Degree / Program
   - Institution
   - Period (e.g. `2018 — 2022`)
   - Description (optional)
   - Tag (optional, e.g. `FOREVER`)
   - Sort order (lower = appears first)
4. **Publish** each document.

The React site reads from the `production` dataset automatically (CDN). Refresh the portfolio after publishing.

## Deploy Studio to Sanity hosting (optional)

```bash
cd backend-sanity
npx sanity deploy
```

Follow the prompts to link or create a hosted studio URL.

## Note on schemas

The **Education** schema (`schemas/educations.js`) ships with this repo. You do not push schemas separately — starting or deploying the studio loads them. Only **content** (education documents) is created in the Studio UI.
