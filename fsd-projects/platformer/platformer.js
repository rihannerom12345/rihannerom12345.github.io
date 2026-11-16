$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 400, 100, 20, "red")
  createPlatform(400, 500, 100, 20, "yellow")
  createPlatform(700, 427, 100, 20, "green")
  createPlatform(900, 300, 100, 20, "blue")
  createPlatform(1300, 500, 100, 70, "purple")
createPlatform(150, 630, 100, 20,"orange")

    // TODO 3 - Create Collectables
createCollectable("steve", 50, 700)
createCollectable("diamond", 925, 200)
createCollectable("max", 600, 700)
createCollectable("database", 1350, 450)
    
    // TODO 4 - Create Cannons
createCannon("top", 600, 900)
createCannon("bottom", 1100, 800)
createCannon("right", 400, 1000)

   


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
