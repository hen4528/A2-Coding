let player;
let gameState = "title"; // "title", "instructions", or "playing"

function setup() {
  createCanvas(1200, 800);
  textFont("Arial");
  player = new Player(100, 100, 3);
}

function draw() {
  background("white");

  if (gameState === "title") {
    drawTitleScreen();
  } else if (gameState === "instructions") {
    drawInstructions();
  } else if (gameState === "playing") {
    player.move();
    player.draw();
  }
}

function drawTitleScreen() {
  // Title
  fill("black");
  noStroke();
  textSize(32);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("Welcome, Personal Shopper 🛍️", 600, 300);
  text("to Elite Employee 🌟", 600, 350);

  // Subtitle
  textSize(16);
  textStyle(NORMAL);
  text(
    "You are up for a promotion… if you can accurately collect all required items within 3 minutes ⏱️",
    600,
    420,
    500,
  );

  // Start button
  drawButton(500, 550, 200, 50, "START GAME");
}

function drawInstructions() {
  // Instructions box
  fill("lightgray");
  noStroke();
  rect(400, 180, 700, 350);

  // Title
  fill("black");
  noStroke();
  textSize(24);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Welcome, Personal Shopper 🛍️ to Elite Employee 🌟", 400, 200, 700);

  // Subtitle
  textSize(14);
  textStyle(NORMAL);
  text(
    "You are up for a promotion… if you can accurately collect all required items within 3 minutes ⏱️",
    400,
    240,
    700,
  );

  // Objective section
  textSize(16);
  textStyle(BOLD);
  text("🎯 Objective", 400, 280, 700);
  textSize(14);
  textStyle(NORMAL);
  text(
    "Collect the exact number of items displayed in the top center of the screen.",
    400,
    305,
    700,
  );

  // Controls section
  textSize(16);
  textStyle(BOLD);
  text("🎮 Controls", 400, 350, 700);
  textSize(14);
  textStyle(NORMAL);
  text(
    "Move: Use the arrow keys ⬆️⬇️⬅️➡️\nSelect an item: Click with your mouse 🖱️",
    400,
    375,
    700,
  );

  // Hints section
  textSize(16);
  textStyle(BOLD);
  text("💡 Hints", 400, 430, 700);
  textSize(14);
  textStyle(NORMAL);
  text(
    "You have two hints per level 🔎\nUsing a hint will highlight the item you need, but be careful! Each hint reduces your remaining time.",
    400,
    455,
    700,
  );

  // Start button
  drawButton(500, 600, 200, 50, "BEGIN GAME");
}

function drawButton(x, y, w, h, label) {
  fill("darkblue");
  stroke("black");
  strokeWeight(2);
  rect(x, y, w, h);

  fill("white");
  noStroke();
  textSize(16);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(label, x + w / 2, y + h / 2);
}

function mousePressed() {
  if (gameState === "title") {
    // Check if START GAME button clicked
    if (mouseX > 500 && mouseX < 700 && mouseY > 550 && mouseY < 600) {
      gameState = "instructions";
    }
  } else if (gameState === "instructions") {
    // Check if BEGIN GAME button clicked
    if (mouseX > 500 && mouseX < 700 && mouseY > 600 && mouseY < 650) {
      gameState = "playing";
    }
  }
}
