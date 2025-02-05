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
        } 
    else {
        yesButton.style.position = "absolute";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "5rem";
        yesButton.innerHTML = "You have no choice! ❤️";
        noButton.style.display = "none";
    }
}

function loveMessage() {
    document.body.innerHTML = "<h1>Yipppyyyy! I love you! ❤️</h1>";
}

        