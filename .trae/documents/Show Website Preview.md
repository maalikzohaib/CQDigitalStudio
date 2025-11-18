## Overview

* The project runs an Express server with Vite + React frontend in middleware mode.

* Dev and production preview are served from the Express app on `http://localhost:5000`.

## Steps to Preview (Development)

1. Navigate to the project root: `f:\Clients\1 Github\Dad\CQDigitalStudio`.
2. Install dependencies if not already installed: `npm install`.
3. Start the dev server: `npm run dev`.
4. Wait for the server to log that it’s listening (Express defaults to port `5000`).
5. Open `http://localhost:5000/` and verify the app loads.

## Steps to Preview (Production Build)

1. Build the app: `npm run build`.
2. Start the production server: `npm run start`.
3. Open `http://localhost:5000/` and verify the app loads.

## Notes

* Port selection: `server/index.ts` sets `const port = parseInt(process.env.PORT || '5000', 10);` (server/index.ts:63).

* Vite `server.port` is configured to `8000` but in dev it’s mounted via Express middleware (vite.config.ts:35–41; server/vite.ts:22–68).

* Frontend entry lives at `client/index.html`; production assets are served from `dist/public` (vite.config.ts:30–34; server/vite.ts:70–85).

## Verification

* Confirm terminal shows the server listening (server/index.ts:64–69) and the page renders at `http://localhost:5000/`.

* If the port is in use, set `PORT` to an available port (e.g., `set PORT=5050`) before running the server.

## After Confirmation

* I will run the appropriate commands, detect the preview URL, and present a clickable preview link for you to open.

