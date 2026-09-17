# SL Network Pulse

A client-side Vite dashboard for monitoring SL traffic in Google AI Studio or any browser-based React environment.

## Run

```bash
npm install
npm run dev
```

## Data boundary

The dashboard requests `https://transport.integration.sl.se/v1/sites` on load and normalizes common SL site coordinate fields. If the browser blocks the request or the response has no usable coordinates, the map falls back to the included Stockholm station fixture.

The vehicle cards and rail geometry are an interaction-ready fixture until an SL vehicle-position endpoint is supplied. Replace `initialVehicles` in `src/main.tsx` with the normalized response from that endpoint; the selected-vehicle detail view, map markers, filters, search, delay state, and occupancy UI are already connected.

No server or database is required. API keys, if needed by a future provider, should be supplied through Google AI Studio's environment rather than committed to this project.
