# Storymap: Ogiek of Chepkitale, Mount Elgon

A scroll-driven storytelling map documenting the dispossession of the ancestral lands of the Ogiek of Mount Elgon, Kenya.

Built with [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) and [Scrollama](https://github.com/russellsamora/scrollama).

## Setup

The Mapbox access token lives in `config.js`. Replace it with your own if needed.

Serve the project with any static file server, e.g.:

```
npx serve .
```

## Config

- `config.js` – chapters, map layers, access token, and styling
- `sources.js` – external vector sources and custom layers
- `index.html` – layout and scrollama logic
