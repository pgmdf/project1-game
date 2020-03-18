// author: github.com/pgmdf
/* only the cards array */

// TODO: switch property imgURL to imgFile to let it work with "local" images
// had to use absolute path and url to make it work with github-pages

let cardsArray = [
    // Car
    {
        name: "Car",
        imgFile: '../images/dummypic1.png',
        category: "dark side",
        cardindex: 1,
        keyname1: "velocity in km/h",
        keyvalue1: 48,
        keyname2: "energy in kcal",
        keyvalue2: 20,
        keyname3: "flexibility in %",
        keyvalue3: 5,
        keyname4: "load capacity in kg",
        keyvalue4: 3,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // SUP
    {
        name: "SUP",
        imgFile: '../images/dummypic2.png',
        category: "green side",
        cardindex: 2,
        keyname1: "velocity in km/h",
        keyvalue1: 8,
        keyname2: "energy in kcal",
        keyvalue2: 500,
        keyname3: "flexibility in %",
        keyvalue3: 4,
        keyname4: "load capacity in kg",
        keyvalue4: 3,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Walking
    {
        name: "Walking",
        imgFile: '../images/dummypic3.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 6,
        keyname2: "energy in kcal",
        keyvalue2: 400,
        keyname3: "flexibility in %",
        keyvalue3: 4,
        keyname4: "load capacity in kg",
        keyvalue4: 3,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Drone
    {
        name: "Drone",
        imgFile: '../images/dummypic4.png',
        category: "invisible side",
        cardindex: 4,
        keyname1: "velocity in km/h",
        keyvalue1: 60,
        keyname2: "energy in kcal",
        keyvalue2: 1000,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Bicycle
    {
        name: "Bicycle",
        imgFile: '../images/dummypic5.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 18,
        keyname2: "energy in kcal",
        keyvalue2: 600,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Subway
    {
        name: "Subway",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Footbike
    {
        name: "Footbike",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // S-Bahn
    {
        name: "S-Bahn",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Longboard
    {
        name: "Longboard",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Inline skates
    {
        name: "Inline skates",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Tram
    {
        name: "Tram",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Cable car
    {
        name: "Cable car",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // E-Bike
    {
        name: "E-Bike",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // E-Scooter
    {
        name: "E-Scooter",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // E-Moped
    {
        name: "E-Moped",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Bus
    {
        name: "Bus",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Rickshaw
    {
        name: "Rickshaw",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    },

    // Cargo bike
    {
        name: "Cargo bike",
        imgFile: '../images/dummypic6.png',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal",
        keyvalue2: 0,
        keyname3: "flexibility in %",
        keyvalue3: 3,
        keyname4: "load capacity in kg",
        keyvalue4: 4,
        keyname5: "fun factor in %",
        keyvalue5: 12
    }
]