var config = {
  style: "mapbox://styles/dd-mapeo/cl58rt3tr002b15qpvor4vm1o",
  accessToken:
    "pk.eyJ1IjoiZGQtbWFwZW8iLCJhIjoiY21weWcwdzRwMDZkbjJ0bjM4cmNhdjd6eCJ9.vdt_KcNoIKZdX2zYJMel7A",
  showMarkers: false,
  markerColor: "#3FB1CE",
  projection: "equirectangular",
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  legend: true, // if legend is set to true, inset will be disabled.
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  useCustomLayers: false, // set true to load storyLayers.external from layers.js
  bookmarks: false,
  chapterReturn: false,
  byline: "",
  mobileview:
    '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
  chapters: [
    {
      id: "ch1",
      alignment: "left",
      hidden: false,
      location: {
        center: [35, 0.27041],
        zoom: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "mount-elgon",
          opacity: 1,
        },
        {
          layer: "i-elgon-ancestral-lands",
          opacity: 0,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch2",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Occupied Ogiek lands</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "mount-elgon",
          opacity: 0,
        },
        {
          layer: "i-elgon-ancestral-lands",
          opacity: 0.5,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "ii-elgon-ancestral-lands",
          opacity: 0,
        },
        {
          layer: "ii-elgon-white-highlands",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch3",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Occupied Ogiek lands</span><br><span id="block" style="background-color: #989090; border: 1px solid #c5c5c5; opacity: 0.5;"></span><span id="text">White Highlands</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "mount-elgon",
          opacity: 0,
        },
        {
          layer: "i-elgon-ancestral-lands",
          opacity: 0,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "ii-elgon-ancestral-lands",
          opacity: 0.5,
        },
        {
          layer: "ii-elgon-white-highlands",
          opacity: 0.5,
        },
        {
          layer: "iii-elgon-forest-reserves",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch4",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">Crown Forest Reserve</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "ii-elgon-ancestral-lands",
          opacity: 0,
        },
        {
          layer: "ii-elgon-white-highlands",
          opacity: 0,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "iii-elgon-forest-reserves",
          opacity: 0.5,
        },
        {
          layer: "iv-elgon-forest-reserves",
          opacity: 0,
        },
        {
          layer: "iv-elgon-chepkitale",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch5",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Chepkitale \'Tribal Reserve\'</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">Crown Forest Reserve</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "iii-elgon-forest-reserves",
          opacity: 0,
        },
        {
          layer: "iii-elgon-forest-reserves",
          opacity: 0,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "iv-elgon-forest-reserves",
          opacity: 0.5,
        },
        {
          layer: "iv-elgon-chepkitale",
          opacity: 0.5,
        },
        {
          layer: "v-elgon-forest-reserves",
          opacity: 0,
        },
        {
          layer: "v-elgon-national-park",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch6",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Chepkitale \'Tribal Reserve\'</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "iv-elgon-forest-reserves",
          opacity: 0,
        },
        {
          layer: "iv-elgon-chepkitale",
          opacity: 0,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "v-elgon-forest-reserves",
          opacity: 0.5,
        },
        {
          layer: "iv-elgon-chepkitale",
          opacity: 0.5,
        },
        {
          layer: "v-elgon-national-park",
          opacity: 0.5,
        },
        {
          layer: "vi-elgon-chepyuk",
          opacity: 0,
        },
        {
          layer: "vi-elgon-forest-reserves",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch7",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Chepkitale \'Tribal Reserve\'</span><br><span id="block" style="background-color: #989090; opacity: 0.5;"></span><span id="text">Chepyuk Degazetted Area</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "v-elgon-forest-reserves",
          opacity: 0,
        },
        {
          layer: "iv-elgon-chepkitale",
          opacity: 0.5,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "v-elgon-national-park",
          opacity: 0.5,
        },
        {
          layer: "vi-elgon-chepyuk",
          opacity: 0.5,
        },
        {
          layer: "vi-elgon-forest-reserves",
          opacity: 0.5,
        },
        {
          layer: "vii-elgon-game-reserve",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch8",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #fb4b4b; opacity: 0.5;"></span><span id="text">Chepkitale Game Reserve</span><br><span id="block" style="background-color: #989090; opacity: 0.5;"></span><span id="text">Chepyuk Degazetted Area</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "iv-elgon-chepkitale",
          opacity: 0,
        },
        {
          layer: "v-elgon-national-park",
          opacity: 0.5,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "vi-elgon-chepyuk",
          opacity: 0.5,
        },
        {
          layer: "vi-elgon-forest-reserves",
          opacity: 0.5,
        },
        {
          layer: "vii-elgon-game-reserve",
          opacity: 0.5,
        },
        {
          layer: "viii-shamba",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch9",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #ff0000; opacity: 0.5;"></span><span id="text">Forests destroyed by PELIS</span><br><span id="block" style="background-color: #fb4b4b; opacity: 0.5;"></span><span id="text">Chepkitale Game Reserve</span><br><span id="block" style="background-color: #989090; opacity: 0.5;"></span><span id="text">Chepyuk Degazetted Area</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "iv-elgon-chepkitale",
          opacity: 0,
        },
        {
          layer: "v-elgon-national-park",
          opacity: 0.5,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "vi-elgon-chepyuk",
          opacity: 0.5,
        },
        {
          layer: "vi-elgon-forest-reserves",
          opacity: 0.5,
        },
        {
          layer: "vii-elgon-game-reserve",
          opacity: 0.5,
        },
        {
          layer: "viii-shamba",
          opacity: 0.5,
        },
        {
          layer: "ix-extent",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch10",
      alignment: "left",
      hidden: false,
      legend:
        '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block"><hr style="border: 0; border-bottom: 3px dashed #000;"></span><span id="text">Approximate area of Ogiek management</span><br><span id="block" style="background-color: #ff0000; opacity: 0.5;"></span><span id="text">Forests destroyed by PELIS</span><br><span id="block" style="background-color: #fb4b4b; opacity: 0.5;"></span><span id="text">Chepkitale Game Reserve</span><br><span id="block" style="background-color: #989090; opacity: 0.5;"></span><span id="text">Chepyuk Degazetted Area</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
      location: {
        center: [34.58435, 1.00483],
        zoom: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "iv-elgon-chepkitale",
          opacity: 0,
        },
        {
          layer: "v-elgon-national-park",
          opacity: 0.5,
        },
        {
          layer: "elgon-ancestral-lands-outline",
          opacity: 1,
        },
        {
          layer: "vi-elgon-chepyuk",
          opacity: 0.5,
        },
        {
          layer: "vi-elgon-forest-reserves",
          opacity: 0.5,
        },
        {
          layer: "vii-elgon-game-reserve",
          opacity: 0.5,
        },
        {
          layer: "viii-shamba",
          opacity: 0.5,
        },
        {
          layer: "ix-extent",
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
  ],
};
