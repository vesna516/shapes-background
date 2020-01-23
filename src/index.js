import './styles.scss';

function getArc(x, y, squareSize) {
    const arcParams = [
        {
            x: x * squareSize,
            y: y * squareSize + squareSize / 2,
            r: squareSize / 2,
            start: 1.5 * Math.PI,
            finish: 0.5 * Math.PI,
        },
        {
            x: x * squareSize + squareSize,
            y: y * squareSize + squareSize / 2,
            r: squareSize / 2,
            start: 0.5 * Math.PI,
            finish: 1.5 * Math.PI,
        },
        {
            x: x * squareSize + squareSize / 2,
            y: y * squareSize,
            r: squareSize / 2,
            start: 0,
            finish: Math.PI,
        },
        {
            x: x * squareSize + squareSize / 2,
            y: y * squareSize + squareSize,
            r: squareSize / 2,
            start: Math.PI,
            finish: 0,
        },
        {
            x: x * squareSize,
            y: y * squareSize,
            r: squareSize,
            start: 0,
            finish: 0.5 * Math.PI,
        },
        {
            x: x * squareSize + squareSize,
            y: y * squareSize,
            r: squareSize,
            start: 0.5 * Math.PI,
            finish: Math.PI,
        },
        {
            x: x * squareSize,
            y: y * squareSize + squareSize,
            r: squareSize,
            start: 1.5 * Math.PI,
            finish: 0,
        },
        {
            x: x * squareSize + squareSize,
            y: y * squareSize + squareSize,
            r: squareSize,
            start: Math.PI,
            finish: 1.5 * Math.PI,
        }
    ]

    const arc = arcParams[Math.floor(Math.random() * arcParams.length)];

    cx.fillStyle = getColor();
    cx.beginPath();
    cx.arc(arc.x, arc.y, arc.r, arc.start, arc.finish);
    cx.lineTo(arc.x, arc.y);
    cx.fill();
}

function getColor() {
    const colors = ['#f7fbfc', '#d6e6f2', '#b9d7ea', '#769fcd'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function draw(cx) {
    const canvasW = document.querySelector('body').offsetWidth;
    const canvasH = document.querySelector('body').offsetHeight;

    canvas.width = canvasW;
    canvas.height = canvasH;

    const squareSize = canvasW / 20;

    for (let x = 0; x < canvasW / squareSize; x++) {
        for (let y = 0; y < canvasH / squareSize; y++) {
            cx.fillStyle = getColor();
            cx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
            getArc(x, y, squareSize);
        }
    }
}

const canvas = document.querySelector('canvas');
const cx = canvas.getContext('2d');

draw(cx);
window.addEventListener('resize', () => draw(cx));