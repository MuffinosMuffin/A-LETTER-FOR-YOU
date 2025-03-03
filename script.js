function revealMessage() {
    document.getElementById("letter").classList.remove("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("birthdayMusic");
    const playButton = document.getElementById("playMusic");
    const letter = document.getElementById("letter");

    playButton.addEventListener("click", function () {
        music.play().catch(error => console.log("Autoplay blocked:", error));
        letter.classList.remove("hidden"); // Show the letter after clicking
    });
});
