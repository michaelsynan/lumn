---
name: add-location
description: 'Add or update LUMN retail locations on the Find LUMN store locator. Use when given a Google Maps place, business name, address, or website and asked to add a store, retailer, or location.'
argument-hint: 'Google Maps link, business name, and optional website'
---

# Add a LUMN location

1. Inspect `app/pages/find-lumn.vue` and its `StoreLocation` interface and `locations` array. Check for an existing entry with the same address; businesses with the same name can have distinct locations.
2. Verify the company name, full street address, and precise coordinates from the supplied Google Maps place or another reliable source. Google Maps place URLs may contain the place coordinates as `!3d<latitude>!4d<longitude>`; do not confuse these with the map viewport center. If precise coordinates cannot be verified, ask the user rather than guessing.
3. Find and verify the business's official website for that location when available. Omit `website` if it cannot be verified; do not invent one. If the Google Maps URL or business information is insufficient to identify the location, ask the user for the missing details.
4. Add an object to `locations` with a unique descriptive kebab-case `id`, the verified `name` and `address`, and `coordinates` in Mapbox order `[longitude, latitude]`. Add `website` only when verified. Preserve existing locations and their featured status unless explicitly asked to change them.
5. The locator automatically creates the map marker, location card, and Google Maps directions link from the name and address; add no separate hard-coded map link. Verify the coordinates, unique ID, website, and generated directions destination point to the intended location.
6. Run `pnpm run lint` and `pnpm run typecheck` when dependencies are available. Report the added location and any validation or verification limitations.