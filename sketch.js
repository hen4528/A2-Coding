function setup() {
  createCanvas(1200, 800);
  textFont("Arial");
}

function draw() {
  background("white");
  // Instructions box (kept inside 400x400 canvas)
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
  text("You are up for a promotion… if you can accurately collect all required items within 3 minutes ⏱️", 400, 240, 700);

  // Objective section
  textSize(16);
  textStyle(BOLD);
  text("🎯 Objective", 400, 280, 700);
  textSize(14);
  textStyle(NORMAL);
  text("Collect the exact number of items displayed in the top center of the screen.", 400, 305, 700);

  // Controls section
  textSize(16);
  textStyle(BOLD);
  text("🎮 Controls", 400, 350, 700);
  textSize(14);
  textStyle(NORMAL);
  text("Move: Use the arrow keys ⬆️⬇️⬅️➡️\nSelect an item: Click with your mouse 🖱️", 400, 375, 700);

  // Hints section
  textSize(16);
  textStyle(BOLD);
  text("💡 Hints", 400, 430, 700);
  textSize(14);
  textStyle(NORMAL);
  text("You have two hints per level 🔎\nUsing a hint will highlight the item you need, but be careful! Each hint reduces your remaining time.", 400, 455, 700);
}
