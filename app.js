
    // Create Dino Constructor
    function Dino(species, image, weight, height, fact) {
      this.species = species;
      this.image = image;
      this.weight = weight;
      this.height = height;
      this.fact = fact;

      this.randomFact = function () {
        const facts = [`Weight: ${this.weight} Ibs`, `Height: ${this.height} Inches`, this.fact];
        return facts[Math.floor(Math.random() * facts.length)];
      };
    }

    // Create Dino Objects
    function createDinos() {
      return fetch("./dino.json")
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          return data.Dinos.map(function (i) {
            return new Dino(
              i.species,
              `./images/${i.species.toLowerCase()}.png`,
              i.weight,
              i.height,
              i.fact)
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
    function formData() {
       human.name = document.getElementById("name").value;
       human.height.feet = document.getElementById("feet").value;
       human.height.inches = document.getElementById("inches").value;
       human.weight = document.getElementById("weight").value;
       human.diet = document.getElementById("diet").value;
      }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    function createGrid (dinos) {
      // Add in the human tile
      dinos.splice(4, 0, human);

      // Store the grid
      const grid = document.getElementById("grid");

      // Create individual tiles
      for(let i = 0; i < dinos.length + 1; i++) {
        // Set up the dino and human variables
        let tileTitle;
        let tileImage;
        let tileImageAlt;
        let tileParagraph;
        if(i === 4) {
          tileTitle = human.name;
          tileImage = './images/human.png';
          tileImageAlt = 'Image of a human being';
          tileParagraph = '';
        } else {
          tileTitle = dinos[i].species;
          tileImage = dinos[i].image;
          tileImageAlt = `Image of a ${dinos[i].species}`;
          tileParagraph = i === 8 ? dinos[i].fact :dinos[i].randomFact();
        }

        // Create the containing grid item div
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Create the h3 human name text and add to the gridItems
        const title = document.createElement("h3");
        const titleNode = document.createTextNode(tileTitle);
        title.appendChild(titleNode);
        gridItem.appendChild(title);

        // Create the image and add to the gridItems
        const image = document.createElement("IMG");
        image.setAttribute("src", tileImage);
        image.setAttribute("alt", tileImageAlt);
        gridItem.appendChild(image);

        // Create the fact text and add to the gridItems
        const paragraph = document.createElement("p");
        const paragraphNode = document.createTextNode(tileParagraph);
        paragraph.appendChild(paragraphNode);
        gridItem.appendChild(paragraph);

        // Add tiles to DOM
        grid.appendChild(gridItem);
      }
    }

    // Remove form from screen
    function removeForm() {
      const form = document.getElementById('dino-compare');
      form.classList.add('animate__fadeOut', 'animate__faster');
      setTimeout(() => {form.classList.add('display-none')}, 500);
    }


// On button click, prepare and display infographic
    document.getElementById("btn").addEventListener("click", function(){
      removeForm();
      formData();
      createDinos().then(result => {
        createGrid(result);
      });
    });


