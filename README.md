# SL Network Pulse

A client-side Vite dashboard for monitoring SL traffic in Google AI Studio or any browser-based React environment.

## Run

```bash
npm install
npm run dev
```

## Data boundary

The dashboard requests `https://transport.integration.sl.se/v1/sites` on load and normalizes common SL site coordinate fields. It also requests these GTFS-realtime protobuf feeds every 15 seconds:

- `VehiclePositionsSweden.pb` for live vehicle locations and speed
- `TripUpdatesSweden.pb` for delay and destination information
- `ServiceAlertsSweden.pb` for active service alerts

The feeds are decoded in the browser with `gtfs-realtime-bindings`. If the browser blocks a request, the API key has no access to a file, or the response has no usable records, the map falls back to the included Stockholm station and vehicle fixtures.

The local key is read from `VITE_TRAFIKLAB_GTFS_RT_KEY` in `.env.local`, which is ignored by Git. The supplied key currently returns `403 Key does not have access to file` from the three GTFS-RT endpoints, so a key with access to the SL files is required for live records.

The map uses Google Maps JavaScript API. Add a browser-restricted Google Maps key as `VITE_GOOGLE_MAPS_API_KEY` in `.env.local`, with Maps JavaScript API enabled. Without that key, the dashboard keeps its fallback schematic map.

No server or database is required. API keys, if needed by a future provider, should be supplied through Google AI Studio's environment rather than committed to this project.
