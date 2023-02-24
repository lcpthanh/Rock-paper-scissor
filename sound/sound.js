let winningsound = new Audio("Sound_files/TB7L64W-winning.mp3");
let losingsound = new Audio("Sound_files/ACYR47F-8bit-lose.mp3");
let tiesound = new Audio("Sound_files/V89QYW3-tie-game-horns.mp3");
let sound = document.getElementById("sound");
let volumeControl = document.getElementById("volume-control");

sound.addEventListener("canplaythrough", function() {
    sound.volume = volumeControl.value;
});

volumeControl.addEventListener("input", function() {
    sound.volume = volumeControl.value;
});
