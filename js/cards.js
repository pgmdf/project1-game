// author: github.com/pgmdf
/* only the cards array */

// TODO: switch property imgURL to imgFile to let it work with "local" images
// had to use absolute path and url to make it work with github-pages

let cardsArray = [
    // Car TODO: change image
    {
        name: "Car",
        imgFile: '../images/car.jpg',
        category: "dark side",
        cardindex: 1,
        keyname1: "velocity in km/h",
        keyvalue1: 25,
        keyname2: "energy in kcal/h",
        keyvalue2: 120,
        keyname3: "flexibility in %",
        keyvalue3: 80,
        keyname4: "load capacity in kg",
        keyvalue4: 600,
        keyname5: "fun factor in %",
        keyvalue5: 10
    },

    // SUP
    {
        name: "SUP",
        imgFile: '../images/sup.jpg',
        category: "green side",
        cardindex: 2,
        keyname1: "velocity in km/h",
        keyvalue1: 6,
        keyname2: "energy in kcal/h",
        keyvalue2: 500,
        keyname3: "flexibility in %",
        keyvalue3: 10,
        keyname4: "load capacity in kg",
        keyvalue4: 30,
        keyname5: "fun factor in %",
        keyvalue5: 99
    },

    // Walking
    {
        name: "Walking",
        imgFile: '../images/walking.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 6,
        keyname2: "energy in kcal/h",
        keyvalue2: 460,
        keyname3: "flexibility in %",
        keyvalue3: 100,
        keyname4: "load capacity in kg",
        keyvalue4: 10,
        keyname5: "fun factor in %",
        keyvalue5: 80
    },

    // Drone
    // {
    //     name: "Drone",
    //     imgFile: '../images/dummypic4.png',
    //     category: "invisible side",
    //     cardindex: 4,
    //     keyname1: "velocity in km/h",
    //     keyvalue1: 60,
    //     keyname2: "energy in kcal/h",
    //     keyvalue2: 400,
    //     keyname3: "flexibility in %",
    //     keyvalue3: 3,
    //     keyname4: "load capacity in kg",
    //     keyvalue4: 4,
    //     keyname5: "fun factor in %",
    //     keyvalue5: 12
    // },

    // Bicycle 
    {
        name: "Bicycle",
        imgFile: '../images/bicycle.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 16,
        keyname2: "energy in kcal/h",
        keyvalue2: 520,
        keyname3: "flexibility in %",
        keyvalue3: 90,
        keyname4: "load capacity in kg",
        keyvalue4: 40,
        keyname5: "fun factor in %",
        keyvalue5: 60
    },

    // // Subway
    // {
    //     name: "Subway",
    //     imgFile: '../images/dummypic6.png',
    //     category: "green side",
    //     cardindex: 3,
    //     keyname1: "velocity in km/h",
    //     keyvalue1: 20,
    //     keyname2: "energy in kcal/h",
    //     keyvalue2: 200,
    //     keyname3: "flexibility in %",
    //     keyvalue3: 3,
    //     keyname4: "load capacity in kg",
    //     keyvalue4: 4,
    //     keyname5: "fun factor in %",
    //     keyvalue5: 12
    // },

    // Footbike
    {
        name: "Footbike",
        imgFile: '../images/footbike.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 14,
        keyname2: "energy in kcal/h",
        keyvalue2: 450,
        keyname3: "flexibility in %",
        keyvalue3: 95,
        keyname4: "load capacity in kg",
        keyvalue4: 15,
        keyname5: "fun factor in %",
        keyvalue5: 99
    },

    // S-Bahn
    {
        name: "S-Bahn",
        imgFile: '../images/sbahn.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 40,
        keyname2: "energy in kcal/h",
        keyvalue2: 200,
        keyname3: "flexibility in %",
        keyvalue3: 50,
        keyname4: "load capacity in kg",
        keyvalue4: 30000,
        keyname5: "fun factor in %",
        keyvalue5: 10
    },

    // Longboard
    {
        name: "Longboard",
        imgFile: '../images/longboard.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 10,
        keyname2: "energy in kcal/h",
        keyvalue2: 380,
        keyname3: "flexibility in %",
        keyvalue3: 99,
        keyname4: "load capacity in kg",
        keyvalue4: 5,
        keyname5: "fun factor in %",
        keyvalue5: 85
    },

    // Inline skates 
    {
        name: "Inline skates",
        imgFile: '../images/inlineskates.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 12,
        keyname2: "energy in kcal/h",
        keyvalue2: 490,
        keyname3: "flexibility in %",
        keyvalue3: 80,
        keyname4: "load capacity in kg",
        keyvalue4: 5,
        keyname5: "fun factor in %",
        keyvalue5: 85
    },

    // Tram
    {
        name: "Tram",
        imgFile: '../images/tram.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 19,
        keyname2: "energy in kcal/h",
        keyvalue2: 200,
        keyname3: "flexibility in %",
        keyvalue3: 30,
        keyname4: "load capacity in kg",
        keyvalue4: 15000,
        keyname5: "fun factor in %",
        keyvalue5: 5
    },

    // Cable car
    {
        name: "Cable car",
        imgFile: '../images/cablecar.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 21,
        keyname2: "energy in kcal/h",
        keyvalue2: 150,
        keyname3: "flexibility in %",
        keyvalue3: 5,
        keyname4: "load capacity in kg",
        keyvalue4: 1125,
        keyname5: "fun factor in %",
        keyvalue5: 70
    },

    // E-Bike
    {
        name: "E-Bike",
        imgFile: '../images/ebike.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal/h",
        keyvalue2: 340,
        keyname3: "flexibility in %",
        keyvalue3: 80,
        keyname4: "load capacity in kg",
        keyvalue4: 25,
        keyname5: "fun factor in %",
        keyvalue5: 55
    },

    // E-Scooter
    {
        name: "E-Scooter",
        imgFile: '../images/escooter.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 15,
        keyname2: "energy in kcal/h",
        keyvalue2: 340,
        keyname3: "flexibility in %",
        keyvalue3: 80,
        keyname4: "load capacity in kg",
        keyvalue4: 25,
        keyname5: "fun factor in %",
        keyvalue5: 55
    },

    // E-Moped
    {
        name: "E-Moped",
        imgFile: '../images/emoped.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 20,
        keyname2: "energy in kcal/h",
        keyvalue2: 140,
        keyname3: "flexibility in %",
        keyvalue3: 40,
        keyname4: "load capacity in kg",
        keyvalue4: 50,
        keyname5: "fun factor in %",
        keyvalue5: 70
    },

    // Bus
    {
        name: "Bus",
        imgFile: '../images/bus.jpg',
        category: "green side",
        cardindex: 3,
        keyname1: "velocity in km/h",
        keyvalue1: 24,
        keyname2: "energy in kcal/h",
        keyvalue2: 200,
        keyname3: "flexibility in %",
        keyvalue3: 65,
        keyname4: "load capacity in kg",
        keyvalue4: 5250,
        keyname5: "fun factor in %",
        keyvalue5: 5
    }
    //,

    // Rickshaw
    // {
    //     name: "Rickshaw",
    //     imgFile: '../images/dummypic6.png',
    //     category: "green side",
    //     cardindex: 3,
    //     keyname1: "velocity in km/h",
    //     keyvalue1: 20,
    //     keyname2: "energy in kcal/h",
    //     keyvalue2: 120,
    //     keyname3: "flexibility in %",
    //     keyvalue3: 3,
    //     keyname4: "load capacity in kg",
    //     keyvalue4: 4,
    //     keyname5: "fun factor in %",
    //     keyvalue5: 12
    // },

    // // Cargo bike
    // {
    //     name: "Cargo bike",
    //     imgFile: '../images/dummypic6.png',
    //     category: "green side",
    //     cardindex: 3,
    //     keyname1: "velocity in km/h",
    //     keyvalue1: 14,
    //     keyname2: "energy in kcal/h",
    //     keyvalue2: 600,
    //     keyname3: "flexibility in %",
    //     keyvalue3: 80,
    //     keyname4: "load capacity in kg",
    //     keyvalue4: 120,
    //     keyname5: "fun factor in %",
    //     keyvalue5: 60
    // }
]