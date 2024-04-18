document.addEventListener("DOMContentLoaded", () => {
    const circle = document.getElementById("circle");
    const gameContainer = document.getElementById("game-container");

    let score = 0;

    function playWowSound() {
        const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/06/10/audio_afd74342e1.mp3?filename=wow-113128.mp3'); // Replace 'wow.mp3' with your sound file
        audio.play();
    }

    function getRandomPosition() {
        const { width, height } = gameContainer.getBoundingClientRect();
        const circleSize = circle.clientWidth;
        const maxX = width - circleSize;
        const maxY = height - circleSize;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        return { x: randomX, y: randomY };
    }

    function moveCircle() {
        const newPosition = getRandomPosition();
        circle.style.display = "block";
        circle.style.top = `${newPosition.y}px`;
        circle.style.left = `${newPosition.x}px`;
    }

    function handleClick() {
        playWowSound();
        score++;
        moveCircle();
    }

    circle.addEventListener("click", handleClick);

    // Start the game by showing the first circle
    moveCircle();
});
