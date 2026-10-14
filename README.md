# Storymap: Ogiek of Chepkitale, Mount Elgon

A scroll-driven storytelling map documenting the dispossession of the ancestral lands of the Ogiek of Mount Elgon, Kenya.

Built with [MapLibre GL JS](https://maplibre.org/) and [Scrollama](https://github.com/russellsamora/scrollama). The basemap is [OpenFreeMap Liberty](https://openfreemap.org/), a free vector style. Hillshade from [Mapterhorn](https://mapterhorn.com/attribution) is drawn over the land so the mountain relief shows through the story polygons. It sits under the water, roads, and labels. This is separate from `use3dTerrain` in `config.js`, which is off and would raise the map into 3D.

## Setup

Open `index.html` in a browser. The page does not need a local server.

## Editing the story

Change the writing in `story-text.js`, between the backticks. Keep the chapters in the same order as `config.js`.

- The first heading is the map title. The line under it is the subtitle.
- The image under the subtitle is the logo.
- Each chapter is a heading, then the photo, then the caption, then the text.
- The text under the line of dashes at the end is the footer.
- Write a link as `[Awana Digital](https://awana.digital/)`.
- A YouTube link on its own line becomes a link.

Photos go in `images/`. Point at them from `story-text.js`, for example `![](images/elgon-road.jpg)`.

## Config

- `story-text.js` – title, subtitle, logo, footer, and each chapter's title, photo, caption, and text.
- `config.js` – basemap style, and for each chapter the map position and which layers turn on.
- `layers.js` – how features in `layers-data.js` are drawn, and their colors. Layer ids here match `config.js`.
- `layers-data.js` – the feature shapes used in the story map.
- `index.html` – page layout, scroll behavior, and the hillshade layer.
