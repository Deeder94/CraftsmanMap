# Third-party notices — CraftsmanMap (global English demo)

Application version: craftsmanmap-global-en-v1.1 (based on r17.17)

## Overture Maps Places

CraftsmanMap reads the Overture Maps Places theme from Overture's published PMTiles release.

Overture Places uses multiple upstream datasets and is published under permissive licenses depending on source. Current source-specific attribution is maintained by Overture at:
https://docs.overturemaps.org/attribution/

Relevant notices for the configured 2026-10-21.0 release include:

- Meta, Microsoft, PinMeTo, Krick, RenderSEO, DAC and BrightQuery data: CDLA Permissive 2.0 as documented by Overture.
- AllThePlaces: CC0 1.0 as documented by Overture.
- Foursquare: Apache License 2.0. Copyright 2024 Foursquare Labs, Inc. All rights reserved. Foursquare data was transformed to the Overture schema. Overture documents the change date as 2026-03-18.

A copy of Apache License 2.0 is included at `licenses/Apache-2.0.txt`.

CraftsmanMap does not modify Overture's hosted PMTiles archive; it reads selected records client-side and classifies them into service groups for display. The classification logic is adapted from the Swedish r17.17 demo, with English UI labels and worldwide navigation.

## OpenFreeMap / OpenMapTiles / OpenStreetMap

The basemap uses the OpenFreeMap public instance and its Liberty style. OpenFreeMap requires attribution and states that MapLibre adds it automatically. The visible map also retains MapLibre's attribution control.

Required map-data attribution shown by the source/style includes OpenFreeMap / OpenMapTiles and OpenStreetMap contributors as applicable.

OpenFreeMap project: MIT. Map data is sourced from OpenStreetMap under its applicable data license.

## MapLibre GL JS

Version pinned by this release: 6.10.0.
License: BSD-3-Clause.
Project: https://maplibre.org/maplibre-gl-js/

The browser currently fetches the pinned browser build and stylesheet from jsDelivr. If you vendor these files locally later, preserve the upstream license and copyright notices.

## PMTiles JavaScript

Version pinned by this release: 4.5.0.
License: BSD-3-Clause.
Project: https://github.com/protomaps/PMTiles

The browser currently fetches the pinned browser build from jsDelivr. If you vendor it locally later, preserve the upstream license and copyright notices.

## @mapbox/vector-tile

Version pinned by this release: 3.0.0.
License: BSD-3-Clause.
Project: https://github.com/mapbox/vector-tile-js

Used client-side to decode Overture's MVT vector tiles returned from the PMTiles archive. The browser fetches the pinned ESM build from jsDelivr.

## pbf

Version pinned by this release: 5.1.2.
License: BSD-3-Clause.
Project: https://github.com/mapbox/pbf

Used by `@mapbox/vector-tile` to decode Protocol Buffer data. The browser fetches the pinned ESM build from jsDelivr.

## CraftsmanMap application code

Based on the original Swedish Hantverkarkartan project. The operator retains rights to the application code. No additional open-source licence is granted by this notice. Third-party licences continue to apply to the relevant libraries and source datasets.

## Photon address search

Photon is an open-source geocoder based on OpenStreetMap. The public Photon server is a demonstration service subject to rate limiting and availability restrictions. See https://github.com/komoot/photon.
