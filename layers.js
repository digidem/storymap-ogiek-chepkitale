// Story layers from layers.geojson. `id` matches config.js so chapter opacity
// toggles stay put. `names` draws those features. `exclude` draws every land
// polygon except the listed names. `current_extent` is not a land polygon; it
// is only the dashed line on ix-extent. Points are included only when named.
//
// Fill layers that include more than one polygon are dissolved so a 0.5 opacity
// does not stack where they overlap.
var storyLayers = {
  url: "./layers.geojson",
  layers: [
    {
      id: "i-elgon-ancestral-lands",
      type: "fill",
      names: ["customary"],
      paint: fill("#f78d4b", "hsla(0, 0%, 0%, 0)"),
    },
    {
      id: "ii-elgon-ancestral-lands",
      type: "fill",
      exclude: ["white_highlands", "customary"],
      paint: fill("#f78d4b", "hsla(0, 0%, 0%, 0)"),
    },
    {
      id: "ii-elgon-white-highlands",
      type: "fill",
      names: ["white_highlands"],
      paint: fill("#989090"),
    },
    {
      id: "iii-elgon-forest-reserves",
      type: "fill",
      exclude: ["white_highlands", "customary"],
      paint: fill("#d5e12d"),
    },
    {
      id: "iv-elgon-forest-reserves",
      type: "fill",
      exclude: ["white_highlands", "customary", "chepkitale"],
      paint: fill("hsl(64, 75%, 53%)"),
    },
    {
      id: "iv-elgon-chepkitale",
      type: "fill",
      names: ["chepkitale"],
      paint: fill("#f78d4b"),
    },
    {
      id: "v-elgon-national-park",
      type: "fill",
      names: ["national_park"],
      paint: fill("#56b72a"),
    },
    {
      id: "v-elgon-forest-reserves",
      type: "fill",
      exclude: ["white_highlands", "customary", "chepkitale", "national_park"],
      paint: fill("#d5e12d"),
    },
    {
      id: "vi-elgon-chepyuk",
      type: "fill",
      names: ["chepyuk"],
      paint: fill("#989090"),
    },
    {
      id: "vi-elgon-forest-reserves",
      type: "fill",
      exclude: [
        "white_highlands",
        "customary",
        "chepkitale",
        "national_park",
        "chepyuk",
      ],
      paint: fill("hsl(64, 75%, 53%)"),
    },
    {
      id: "vii-elgon-game-reserve",
      type: "fill",
      names: ["chepkitale"],
      paint: fill("#fb4b4b"),
    },
    {
      id: "viii-shamba",
      type: "fill",
      names: ["shamba"],
      paint: fill("hsl(0, 100%, 50%)"),
    },
    {
      id: "ix-extent",
      type: "line",
      names: ["current_extent"],
      paint: line("#000"),
    },
    {
      id: "elgon-ancestral-lands-outline",
      type: "line",
      names: ["customary"],
      paint: line("#f57729"),
    },
    {
      id: "mount-elgon",
      type: "symbol",
      names: ["mount_elgon"],
      layout: {
        "text-field": "Chepkitale\n(Mount Elgon)",
        "text-font": ["Noto Sans Bold"],
        "text-size": 15,
        "text-anchor": "bottom",
        "text-justify": "center",
        "text-max-width": 12,
        "text-offset": [0, -0.15],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "icon-image": "elgon-peak",
        "icon-size": 0.9,
        "icon-anchor": "top",
        "icon-offset": [0, 5],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
      },
      paint: {
        "text-color": "#5c4033",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.6,
        "text-halo-blur": 0.2,
        "text-opacity": 0,
        "icon-opacity": 0,
      },
    },
  ],

  toMapLayers(data) {
    const polygons = polygonNames(data);
    const drawOrder = { fill: 0, line: 1, circle: 2, symbol: 3 };

    return this.layers
      .map((layer) => {
        const names = new Set(featureNames(layer, polygons));
        const selected = data.features.filter((feature) =>
          names.has(feature.properties.name),
        );
        return {
          id: layer.id,
          type: layer.type,
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: layer.type === "fill" ? dissolve(selected) : selected,
            },
          },
          paint: layer.paint,
          ...(layer.layout ? { layout: layer.layout } : {}),
          drawOrder: drawOrder[layer.type],
        };
      })
      .sort((a, b) => a.drawOrder - b.drawOrder)
      .map(({ drawOrder, ...layer }) => layer);
  },
};

// Each feature is drawn on its own, so overlapping polygons in one layer
// stack their opacity. Dissolve a fill layer into a single shape first.
function dissolve(features) {
  if (features.length < 2) return features;
  const coordinates = polygonClipping.union(
    ...features.map((feature) =>
      feature.geometry.type === "Polygon"
        ? [feature.geometry.coordinates]
        : feature.geometry.coordinates,
    ),
  );
  return [
    {
      type: "Feature",
      properties: {},
      geometry: { type: "MultiPolygon", coordinates },
    },
  ];
}

function polygonNames(data) {
  return [
    ...new Set(
      data.features
        .filter(
          (feature) =>
            feature.geometry?.type?.includes("Polygon") &&
            feature.properties.name !== "current_extent",
        )
        .map((feature) => feature.properties.name),
    ),
  ];
}

function featureNames(layer, polygons) {
  if (layer.names) return layer.names;
  const excluded = new Set(layer.exclude);
  return polygons.filter((name) => !excluded.has(name));
}

function fill(color, outline) {
  const paint = { "fill-color": color, "fill-opacity": 0 };
  if (outline) paint["fill-outline-color"] = outline;
  return paint;
}

function line(color) {
  return {
    "line-color": color,
    "line-width": 3,
    "line-dasharray": [2, 1],
    "line-opacity": 0,
  };
}
