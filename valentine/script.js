let noMessages = [
    "For real?", "Wrong choice!", "Still here?", "Think again...", 
    "Last chance!", "You're making a mistake!", "Just say yes!", 
    "Give up yet?"
];
let growthCount = 0;

function growYes() {
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");
    let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);

    if (growthCount < noMessages.length) {
        noButton.innerText = noMessages[growthCount];
        growthCount++;
        yesButton.style.fontSize = (currentSize * 1.5) + "px";
        yesButton.style.padding = (parseInt(yesButton.style.padding || "10") * 1.5) + "px";
        
        noButton.classList.add("shake");
        setTimeout(() => {
            noButton.classList.remove("shake");
        }, 300);
        
    } else {
        yesButton.style.position = "fixed";  
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "5rem";
        yesButton.style.display = "flex";
        yesButton.style.justifyContent = "center";
        yesButton.style.alignItems = "center";
        yesButton.innerHTML = "You have no choice! ❤️";
        noButton.style.display = "none";
    }
}

function loveMessage() {
    let body = document.body;

    document.querySelector("h1").remove();
    document.querySelector(".buttons").remove();

    let message = document.createElement("h1");
    message.innerHTML = "Yipppyyyy! I love you! ❤️";
    message.classList.add("animated-text");
    body.appendChild(message);

    let loveImage = document.createElement("img");
    loveImage.src = "love.gif"; 
    loveImage.alt = "Love";
    loveImage.classList.add("love-gif");
    body.appendChild(loveImage);

    createHeartParticles();
}

function createHeartParticles() {
    const heartContainer = document.getElementById("hearts-container");

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.animationDuration = (Math.random() * 2 + 1) + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}


function toggleMusic() {
    let music = document.getElementById("background-music"); 
    if (music.paused) {
        music.play();
        document.getElementById("toggle-music").innerText = "🔇 Pause Music";
    } else {
        music.pause();
        document.getElementById("toggle-music").innerText = "🔊 Play Music";
    }
}


document.addEventListener("click", () => {
    let music = document.getElementById("background-music");
    music.muted = false; 
    if (music.paused) {
        music.play();
    }
}, { once: true });
