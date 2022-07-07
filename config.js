var config = {
    style: 'mapbox://styles/dd-mapeo/cl58rt3tr002b15qpvor4vm1o',
    accessToken: 'pk.eyJ1IjoiZGQtbWFwZW8iLCJhIjoiY2tuaGtxN2hjMjg5YTJ1b29kb3k4a3hwMCJ9.Q4cR8vp-Z6pP9PTUswy7Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/  
    inset: false,
    legend: true, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: false,
    chapterReturn: false,
    title: 'Dispossession of the Ancestral Lands of the Ogiek of Mount Elgon in Kenya',
    logo: 'images/CIPDP-logo.png',
    subtitle: 'Chepkitale Indigenous Peoples\' Development Project',
    byline: '',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Story map by <a href="https://digital-democracy.org" target="_blank">Digital Democracy</a>.',
    chapters: [
        {
            id: 'ch1',
            alignment: 'left',
            hidden: false,
            title: 'The Ogiek of Mount Elgon, Kenya',
            image: 'images/elgon-road.jpg',
            caption: 'Photo credit: Rudo Kemper',
            description: 'The Ogiek of Mount Elgon are an Indigenous group native to Western Kenya. The Ogiek people of Chepkitale have lived across the vast swathe of moorland and forests of Mount Elgon since before colonial occupation and the subsequent creation of the modern Kenyan state, and are believed to be the first people to live in the region. They can trace their use of caves on Mount Elgon to at least the 12th century.',
            location: {
                center: [35, 0.27041],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mount-elgon',
                    opacity: 1
                },
                {
                    layer: 'i-elgon-ancestral-lands',
                    opacity: 0
                },
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 0
                },    
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch2',
            alignment: 'left',
            hidden: false,
            title: 'Ancestral Lands of the Ogiek of Chepkitale (Mount Elgon)',
            image: 'images/elgon.jpg',
            caption: 'Photo credit: Rudo Kemper',
            description: 'Since the beginning of the twentieth century, huge areas of Ogiek ancestral lands have been lost to “conservation areas” and agriculture zones imposed by the colonial government. The Ogiek ancestral lands once spread from the summit of the mountain to the current-day city of Kitale on the east.',
            legend: '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Occupied Ogiek lands</span><br>',
            location: {
                center: [34.58435, 1.00483],
                zoom: 10,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mount-elgon',
                    opacity: 0
                },
                {
                    layer: 'i-elgon-ancestral-lands',
                    opacity: 0.5
                },
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 1
                },    
                {
                    layer: 'ii-elgon-ancestral-lands',
                    opacity: 0
                },
                {
                    layer: 'ii-elgon-white-highlands',
                    opacity: 0
                }, 
            ],
            onChapterExit: []
        },
        {
            id: 'ch3',
            alignment: 'left',
            hidden: false,
            title: 'Evictions from the "white highlands" (1895-1932)',
            image: 'images/white.png',
            caption: 'Source: White highlands (Meier zu Selhausen, Frederick, & de Haas, 2016)',
            description: 'Evictions of Ogiek on the eastern side of their territory started in the 1920s under the British colonial government. They were evicted and pushed higher up the mountain to make way for the White Highlands’“White Highlands”, settlements of Europeans attracted by good soils and the cool climate.',
            legend: '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Occupied Ogiek lands</span><br><span id="block" style="background-color: #989090; border: 1px solid #c5c5c5; opacity: 0.5;"></span><span id="text">White Highlands</span><br>',
            location: {
                center: [34.58435, 1.00483],
                zoom: 10,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mount-elgon',
                    opacity: 0
                },
                {
                    layer: 'i-elgon-ancestral-lands',
                    opacity: 0
                },
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 1
                },                
                {
                    layer: 'ii-elgon-ancestral-lands',
                    opacity: 0.5
                },
                {
                    layer: 'ii-elgon-white-highlands',
                    opacity: 0.5
                },
                {
                    layer: 'iii-elgon-forest-reserves',
                    opacity: 0
                },                    
            ],
            onChapterExit: []
        },
        {
            id: 'ch4',
            alignment: 'left',
            hidden: false,
            title: 'Gazettement of all the remaining lands as Crown Forest Reserve (1932)',
            image: 'images/gazette.jpg',
            caption: '',
            description: 'From colonial times communities in East Africa have faced exclusionary measures guided by modern conservationist thought. Along these lines, in the 1930s, Mount Elgon was gazetted as Crown Forest Reserve, and the Ogiek were denied the legal right to occupy and manage their lands. After independence, the management and  the forest reserves were transferred to the Kenya Forestry Service (KFS), who controls the forest reserves at Mount Elgon to this day.',
            legend: '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">Crown Forest Reserve</span><br>',
            location: {
                center: [34.58435, 1.00483],
                zoom: 10,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ii-elgon-ancestral-lands',
                    opacity: 0
                },
                {
                    layer: 'ii-elgon-white-highlands',
                    opacity: 0
                },
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 1
                },    
                {
                    layer: 'iii-elgon-forest-reserves',
                    opacity: 0.5
                },         
                {
                    layer: 'iv-elgon-forest-reserves',
                    opacity: 0
                },  
                {
                    layer: 'iv-elgon-chepkitale',
                    opacity: 0
                },                           
            ],
            onChapterExit: []
        },
        {
            id: 'ch5',
            alignment: 'left',
            hidden: false,
            title: 'The degazettement of Chepkitale (1938)',
            image: 'images/sunrise.jpg',
            caption: 'Photo credit: Rudo Kemper',
            description: 'The British forcibly evicted the Ogiek from living in the forests below the moorland, and then left them mostly undisturbed once they had been pushed above the treeline. The British saw the moorland as useless land and categorised it as an untitled ‘Tribal reserve’ in 1938 (becoming a ‘Trust land’ in 1942).',
            legend: '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Chepkitale \'Tribal Reserve\'</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">Crown Forest Reserve</span><br>',
            location: {
                center: [34.58435, 1.00483],
                zoom: 10,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'iii-elgon-forest-reserves',
                    opacity: 0
                },  
                {
                    layer: 'iii-elgon-forest-reserves',
                    opacity: 0
                },  
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 1
                },          
                {
                    layer: 'iv-elgon-forest-reserves',
                    opacity: 0.5
                },  
                {
                    layer: 'iv-elgon-chepkitale',
                    opacity: 0.5
                },    
                {
                    layer: 'v-elgon-forest-reserves',
                    opacity: 0
                },  
                {
                    layer: 'v-elgon-national-park',
                    opacity: 0
                },                        
            ],
            onChapterExit: []
        },
        {
            id: 'ch6',
            alignment: 'left',
            hidden: false,
            title: 'The gazettement of Mt. Elgon National Park (1968)',
            image: 'images/tourists.jpg',
            caption: 'Photo credit: <a href="https://wilddiscoveriessafaris.com/mount-elgon-national-park/" target="_blank">Wild Discoveries Safaris</a>',
            description: 'Following independence, in 1968 the creation of Mount Elgon National Park evicted the Ogiek from a swathe of forest to moorland running up the side of the mountain which restricted the movement of Ogiek around the mountain as well as vertical movement down to the lower forests.',
            legend: '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Chepkitale \'Tribal Reserve\'</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
            location: {
                center: [34.58435, 1.00483],
                zoom: 10,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [     
                {
                    layer: 'iv-elgon-forest-reserves',
                    opacity: 0
                },  
                {
                    layer: 'iv-elgon-chepkitale',
                    opacity: 0
                },   
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 1
                },       
                {
                    layer: 'v-elgon-forest-reserves',
                    opacity: 0.5
                },  
                {
                    layer: 'iv-elgon-chepkitale',
                    opacity: 0.5
                },   
                {
                    layer: 'v-elgon-national-park',
                    opacity: 0.5
                },      
                {
                    layer: 'vi-elgon-chepyuk',
                    opacity: 0
                },   
                {
                    layer: 'vi-elgon-forest-reserves',
                    opacity: 0
                },                    
            ],
            onChapterExit: []
        },
        {
            id: 'ch7',
            alignment: 'left',
            hidden: false,
            title: 'The degazettement of Chepyuk (1971)',
            image: 'images/chepyuk.jpg',
            caption: 'Imagery credit: Bing Satellite',
            description: 'Negotiations to relocate the Ogiek started in 1965 between their leadership and the government. The majority of the Ogiek agreed to move down the slope in 1971. To create space, a 3,686 hectare section of the forest reserve was degazetted and designated in the Emia and Chepyuk locations for their relocation. The relocation process was, however, poorly implemented by the authorities. There was inadequate monitoring of the legitimacy of the land claims, resulting in an inflow of  people claiming rights and grabbing land. The degazetted area was largely occupied by other people, mainly by the Soy subgroup (the Sabaot). The demarcation of the excised area has also been blurred, resulting in large areas of forest lands cleared in addition to the initial degazettement. Since then all forests within the resettlement area and an additional 4,500 hectares of surrounding forests have been cleared.<br><br>From the point of view of the Ogiek of Mount Elgon, “agreeing to move down the slope in 1971” is vividly remembered as their being forcibly moved to Chepyuk by the authorities who threatened them at gunpoint and burnt their homes.',
            legend: '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #f78d4b; opacity: 0.5;"></span><span id="text">Chepkitale \'Tribal Reserve\'</span><br><span id="block" style="background-color: #989090; opacity: 0.5;"></span><span id="text">Chepyuk Degazetted Area</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
            location: {
                center: [34.58435, 1.00483],
                zoom: 10,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [       
                {
                    layer: 'v-elgon-forest-reserves',
                    opacity: 0
                },   
                {
                    layer: 'iv-elgon-chepkitale',
                    opacity: 0.5
                },   
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 1
                },    
                {
                    layer: 'v-elgon-national-park',
                    opacity: 0.5
                },    
                {
                    layer: 'vi-elgon-chepyuk',
                    opacity: 0.5
                },                  
                {
                    layer: 'vi-elgon-forest-reserves',
                    opacity: 0.5
                },  
                {
                    layer: 'vii-elgon-game-reserve',
                    opacity: 0
                },      
                
            ],
            onChapterExit: []
        },
        {
            id: 'ch8',
            alignment: 'left',
            hidden: false,
            title: 'The gazettement of Chepkitale as a Game Reserve (2000)',
            image: 'images/burning.jpg',
            caption: 'Photo credit: <a href="https://allafrica.com/view/group/main/main/id/00078293.html" target="_blank">AllAfrica.com</a>',
            description: 'Chepkitale itself was held as Trust land by Mount Elgon County Council until in 2000, their presence at Chepkitale was made illegal in when it was gazetted by Kenya Wildlife Service (KWS) as a wildlife area - Chepkitale National Reserve - on advice from the IUCN. The Ogiek returned to Chepkitale, despite evictions.',
            legend: '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block" style="background-color: #fb4b4b; opacity: 0.5;"></span><span id="text">Chepkitale Game Reserve</span><br><span id="block" style="background-color: #989090; opacity: 0.5;"></span><span id="text">Chepyuk Degazetted Area</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
            location: {
                center: [34.58435, 1.00483],
                zoom: 10,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [     
                {
                    layer: 'iv-elgon-chepkitale',
                    opacity: 0
                },   
                {
                    layer: 'v-elgon-national-park',
                    opacity: 0.5
                },    
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 1
                },    
                {
                    layer: 'vii-extent',
                    opacity: 0
                }, 
                {
                    layer: 'vi-elgon-chepyuk',
                    opacity: 0.5
                },                  
                {
                    layer: 'vi-elgon-forest-reserves',
                    opacity: 0.5
                },  
                {
                    layer: 'vii-elgon-game-reserve',
                    opacity: 0.5
                },                     
            ],
            onChapterExit: []
        },
        {
            id: 'ch9',
            alignment: 'left',
            hidden: false,
            title: 'Our current efforts',
            image: 'images/mapping.jpg',
            caption: 'Photo credit: Rudo Kemper',
            description: 'To counter this loss of territory, the Ogiek are taking action to advocate for their land rights and protect their ancestral forests. The Chepkitale Indigenous Peoples Development Project (CIPDP) was founded by the community with the mission of undertaking a rights-based approach to forest conservation. A crucial role of the organization is to legitimize traditional Ogiek practices and territory through the creation of official community documents and community mapping. Such strategies have allowed them to claim sovereignty in a language understood by governmental authorities.<br><br><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube-nocookie.com/embed/aqUjRnXp8Rw?controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen; picture-in-picture"></iframe></div><br><br>Currently, CIPDP, with support from the Forest Peoples Programme (FPP) and Digital Democracy (Dd), are empowering the Ogiek community to conduct comprehensive mapping of their ancestral lands, as well as...<br><br>Learn more about CIPDP at <a href="https://chepkitale.org" target="_blank">https://chepkitale.org</a>',
            legend: '<span id="block"><hr style="border: 0; border-bottom: 3px dashed #f57729;"></span><span id="text">Extent of Ogiek ancestral lands</span><br><span id="block"><hr style="border: 0; border-bottom: 3px dashed #000;"></span><span id="text">Approximate area of Ogiek management</span><br><span id="block" style="background-color: #fb4b4b; opacity: 0.5;"></span><span id="text">Chepkitale Game Reserve</span><br><span id="block" style="background-color: #989090; opacity: 0.5;"></span><span id="text">Chepyuk Degazetted Area</span><br><span id="block" style="background-color: #56b72a; opacity: 0.5;"></span><span id="text">Mount Elgon National Park</span><br><span id="block" style="background-color: #d5e12d; opacity: 0.5;"></span><span id="text">KFS Forest Reserve</span><br>',
            location: {
                center: [34.58435, 1.00483],
                zoom: 10,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [     
                {
                    layer: 'iv-elgon-chepkitale',
                    opacity: 0
                },   
                {
                    layer: 'v-elgon-national-park',
                    opacity: 0.5
                },    
                {
                    layer: 'elgon-ancestral-lands-outline',
                    opacity: 1
                },    
                {
                    layer: 'vii-extent',
                    opacity: 1
                },                    
                {
                    layer: 'vi-elgon-chepyuk',
                    opacity: 0.5
                },                  
                {
                    layer: 'vi-elgon-forest-reserves',
                    opacity: 0.5
                },  
                {
                    layer: 'vii-elgon-game-reserve',
                    opacity: 0.5
                },                         
            ],
            onChapterExit: []
        },
    ]
};
