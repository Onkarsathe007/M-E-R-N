let userSeq = [];
let gameSeq = [];

let btns = ["red", "green", "blue", "yellow"];
let level = 0;
let isStarted = false;

let p = document.querySelector("p");

// Start the game on keypress
document.addEventListener("keypress", function () {
    if (!isStarted) {
        isStarted = true;
        resetGame();
        p.innerText = "Game Started!";
        levelUp();
    }
});

// Function to flash a button
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500); // Reduced time for smoother game
}

// Function to level up
function levelUp() {
    level++;
    userSeq = []; // Reset user sequence for new level
    p.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 4);
    let randColor = btns[randIndex];
    let randButton = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log("Game Sequence:", gameSeq);

    // Flash the random button
    setTimeout(() => {
        btnFlash(randButton);
    }, 500);
}

// Function to check user input
function checkAns(currentIndex) {
    if (userSeq[currentIndex] !== gameSeq[currentIndex]) {
        // Game over logic
        p.innerText = "Game Over! Press any key to restart.";
        console.log("Game Over!");
        isStarted = false;
        return;
    }

    // If user completes the sequence correctly
    if (userSeq.length === gameSeq.length) {
        setTimeout(levelUp, 1000); // Progress to the next level after a short delay
    }
}

// Handle button press
function btnPress() {
    if (!isStarted) return;

    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    console.log("User Sequence:", userSeq);

    checkAns(userSeq.length - 1);
}

// Attach event listeners to buttons
let allBtns = document.querySelectorAll(".div-container div");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Function to reset the game
function resetGame() {
    userSeq = [];
    gameSeq = [];
    level = 0;
}
