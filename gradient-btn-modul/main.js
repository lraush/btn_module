const button = document.querySelector('.press-button');

function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     const color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
const getRandomGradient = () => {
    let colorStart = getRandomColor();
    let colorEnd = getRandomColor();
    const gradient = `linear-gradient(to right, ${colorStart}, ${colorEnd})`;
    return gradient;
}

button.addEventListener('click', () => {
    const gradient = getRandomGradient();
    button.style.backgroundImage = gradient;
});
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

