# Storymap: Ogiek of Chepkitale, Mount Elgon

A scroll-driven storytelling map documenting the dispossession of the ancestral lands of the Ogiek of Mount Elgon, Kenya.

Built with [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) and [Scrollama](https://github.com/russellsamora/scrollama).

## Setup

The Mapbox access token lives in `config.js`. Replace it with your own if needed.

Open the map through a local server. Loading `index.html` as a file will not show the map or the video.

```bash
$ python -m http.server 8080

# Or you can use

$ npx serve .
```

Then open http://localhost:8080. Stop the server with Ctrl+C.

## Editing the story

Change the writing in `story.md`. Keep the chapters in the same order as `config.js`.

- The first heading is the map title. The line under it is the subtitle.
- The image under the subtitle is the logo.
- Each chapter is a heading, then the photo, then the caption, then the text.
- The text under the line of dashes at the end is the footer.
- Write a link as `[Awana Digital](https://awana.digital/)`.
- A YouTube link on its own line becomes a video.

Photos go in `images/`. Point at them from `story.md`, for example `![](images/elgon-road.jpg)`.

## Config

- `story.md` – title, subtitle, logo, footer, and each chapter's title, photo, caption, and text.
- `config.js` – access token, and for each chapter the map position and which layers turn on.
- `layers.js` – how features in `layers.geojson` are drawn, and their colors. Layer ids here match `config.js`. Optional extra vector layers live here too, and stay off unless `useCustomLayers` is true in `config.js`.
- `layers.geojson` – the feature shapes used in the story map.
- `index.html` – page layout and scroll behavior.
