const container = document.querySelector('#container');
function buildGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let squares = prompt("How many squares per side?");
    if(squares > 100) {
        squares = 100;
    }
    function randomColor() {
    const r = 0 + Math.floor(Math.random() * (255));
    const g = 0 + Math.floor(Math.random() * (255));
    const b = 0 + Math.floor(Math.random() * (255));
    return `rgb(${r},${g},${b})`;
}
    container.style.gridTemplate = `repeat(${squares}, 1fr) / repeat(${squares}, 1fr)`
    for(i = squares * squares; i > 0; i--){
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseenter', function(event){
            // event.target.classList.add('hover');
            const color = randomColor();
            event.target.style.backgroundColor = `${color}`;
            });
        container.appendChild(square);
    }
}
const button = document.querySelector('button');
button.addEventListener('click', buildGrid);