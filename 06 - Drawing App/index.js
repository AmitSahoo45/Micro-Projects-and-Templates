const canvas = document.getElementById('canvas');
const windows = document.getElementById('windows');
$(document).ready(function () {
    
})


window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');

    // context.strokeStyle = '#FF0000'
    // context.fillRect(10, 10, 20, 20)
    // context.strokeStyle = '#139487'
    // context.lineWidth = 5;
    // context.strokeRect(50, 50, 20, 20)
    // context.lineWidth = 2;
    // context.strokeStyle = '#D29D2B'
    // context.strokeRect(80, 80, 20, 20)

    // context.beginPath();
    // context.moveTo(100, 100)
    // context.lineTo(200, 100)
    // context.lineTo(200, 150)
    // context.closePath();
    // context.stroke()

    // variables
    let painting = false

    const startPosition = (e) => {
        painting = true
        draw(e)
    }

    const endPosition = () => {
        painting = false
        context.beginPath();
    }

    const draw = (e) => {
        if (!painting) return;

        context.lineWidth = 2
        context.lineCap = 'round'
        context.strokeStyle = colorid

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY)
    }
    // Eventlisteners

    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', endPosition)
    canvas.addEventListener('mousemove', draw)

})
