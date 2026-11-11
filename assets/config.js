export const CONFIG = Object.freeze({
  appName: 'CraftsmanMap',
  appVersion: '2026.11.11-craftsmanmap-global-en-v1.1',
  countryName: 'Worldwide',
  overtureRelease: '2026-10-21.0',
  // Public launch requires a controlled same-origin range-capable PMTiles endpoint.
  // Leave blank for LOCAL DEVELOPMENT ONLY; published Overture tiles are not production-guaranteed.
  productionPlacesUrl: '',
  // Fallback releases must not be mixed into a single query.
  overtureFallbackReleases: ['2026-09-23.1'],
  overturePlacesCdnUrl: 'https://tiles.overturemaps.org/2026-10-21.0/places.pmtiles',
  overturePlacesUrl: 'https://overturemaps-extras-us-west-2.s3.us-west-2.amazonaws.com/tiles/2026-10-21.0/places.pmtiles',
  baseStyleUrl: 'https://tiles.openfreemap.org/styles/liberty',
  // Photon public demo: for local testing only. Production requires own/licensed geocoder.
  addressSearchUrl: 'https://photon.komoot.io/api',
  minimumConfidence: 0.55,
  initialView: { center: [8.0, 26.0], zoom: 1.8 },
  radiusSearchZoom: 14,
  radiusSearchMaxTiles: 2600, // Zoom 14 required for Places data; large/high-latitude searches may hit this limit.
  radiusSearchConcurrency: 12,
  radiusSearchWorkerMax: 6,
  radiusSearchHedgeDelayMs: 600,
  radiusSearchPrefetchTiles: 6,
  radiusSearchTargetMs: 5000,
  radiusSearchHardMaxMs: 30000,
  radiusSearchCacheTiles: 1800,
  // Demo operator. Hosting and privacy disclosures must reflect the deployed environment.
  operator: {
    name: 'Robert Nord',
    contactEmail: 'robert_nord@outlook.com'
  },
  reportIssueUrl: 'https://github.com/OvertureMaps/data/issues/new/choose',
  overturePlacesDocsUrl: 'https://docs.overturemaps.org/guides/places/',
  dataAttributionUrl: 'https://docs.overturemaps.org/attribution/'
});
