
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
      name: 'na',
      height: {
        feet: 0,
        inches: 0
      },
      weight: 0,
      diet: 'na'
    };

    // Use IIFE to get human data from form
    (function formData(){
       human.name = document.getElementById("name").value;
       human.height.feet = document.getElementById("feet").value;
       human.height.inches = document.getElementById("inches").value;
       human.weight = document.getElementById("weight").value;
       human.diet = document.getElementById("diet").value;
      }
    )();

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
