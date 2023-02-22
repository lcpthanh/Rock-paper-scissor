const startGame = () => {
    // console.log("click");
    document.getElementById("game").style.display = "none";
    document.getElementById("playGame").style.display = "flex";
    document.getElementById("startBtn").style.opacity = "0%";
    document.getElementById("backBtn").style.opacity = "100%";
    document.querySelector("html").style.backgroundColor = "white";
    document.getElementById("removeBG").style.background = "none";
}

const backGame = () => {
    // console.log("click");
    document.getElementById("game").style.display = "flex";
    document.getElementById("playGame").style.display = "none";
    document.getElementById("startBtn").style.opacity = "100%";
    document.getElementById("backBtn").style.opacity = "0%";
    document.querySelector("html").style.backgroundColor = "#E9C93F";
}