let currentMoleTile;
let currentPlantTile
let score = 0;
let gameOver = false;
let moleClicked = false;

window.onload = function() {
    setGame();
};   

function setGame() {
    // Set up the grid for the game board in html
    for (let i = 0; i < 9; i++) {
        // Create a div element for each cell
        let tile = document.createElement("div");
        // Add id's id="0" to "8"
        tile.id =i.toString();
        tile.addEventListener("click", selectTile);
        // Take the tags and add them to the div element
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    // Get a random number between 0 and 8
    let number = Math.floor(Math.random() * 9);
    return number.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./assets/images/monty-mole.png";

    // Get a random tile (div tag) and add the mole image tag to it
    let number = getRandomTile();
    if (currentPlantTile && number === currentPlantTile.id) {
        return;
    }
    currentMoleTile = document.getElementById(number);
    currentMoleTile.appendChild(mole);
    // Reset mole click state for the new mole appearance
    moleClicked = false
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./assets/images/piranha-plant.png";

    // Get a random tile (div tag) and add the plant image tag to it
    let number = getRandomTile();
    if (currentMoleTile && number === currentMoleTile.id) {
        return;
    }
    currentPlantTile = document.getElementById(number);
    currentPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currentMoleTile && !moleClicked) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        moleClicked = true;
    } else if (this == currentPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}