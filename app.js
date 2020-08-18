
    // Create Dino Constructor
    function Dino(species, image, fact) {
      this.species = species;
      this.image = image;
      this.fact = fact;
    }

    // Create Dino Objects
    function createDinos() {
      return fetch("./dino.json")
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          return data.Dinos.map(function (i) {
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
      dinos.splice(4, 0, human);
      console.log(dinos);
      const grid = document.getElementById("grid");
      for(let i = 0; i < dinos.length + 1; i++) {
        // Create the containing grid item div
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        if(i === 4) {
          // Create the h3 human name text and add to the gridItems
          const title = document.createElement("h3");
          const titleNode = document.createTextNode(human.name);
          title.appendChild(titleNode);
          gridItem.appendChild(title);

          // Create the image and add to the gridItems
          const image = document.createElement("IMG");
          image.setAttribute("src", "./images/human.png");
          image.setAttribute("alt", `Image of a human`);
          gridItem.appendChild(image);

        } else {
          // Create the h3 species text and add to the gridItems
          const title = document.createElement("h3");
          const titleNode = document.createTextNode(dinos[i].species);
          title.appendChild(titleNode);
          gridItem.appendChild(title);

          // Create the image and add to the gridItems
          const image = document.createElement("IMG");
          image.setAttribute("src", dinos[i].image);
          image.setAttribute("alt", `Image of a ${dinos[i].species}`);
          gridItem.appendChild(image);

          // Create the fact text and add to the gridItems
          const paragraph = document.createElement("p");
          const paragraphNode = document.createTextNode(dinos[i].fact);
          paragraph.appendChild(paragraphNode);
          gridItem.appendChild(paragraph);
        }

        // Append to the main grid
        grid.appendChild(gridItem);
      }
    }




        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
    document.getElementById("btn").addEventListener("click", function(){
      formData();
      createDinos().then(result => {
        createGrid(result);
      });
    });


