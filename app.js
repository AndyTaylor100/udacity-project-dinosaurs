
    // Create Dino Constructor
    function Dino(species, image, fact) {
      this.species = species;
      this.image = image;
      this.fact = fact;
    }

    // Create Dino Objects
    let dinos = [];
    function createDinos() {
      return fetch("./dino.json")
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          return dinos = data.Dinos.map(function (i) {
            return new Dino(i.species, `./images/${i.species.toLowerCase()}.png`, i.fact)
          });
        })
    }

    // Create Human Object
    let human = {
      Name: 'na',
      Height: {
        Feet: 0,
        inches: 0
      },
      Weight: 0,
      Diet: 'na'
    };

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
