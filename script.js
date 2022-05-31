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
    const r = 0 + Math.floor(Math.random() * (256));
    const g = 0 + Math.floor(Math.random() * (256));
    const b = 0 + Math.floor(Math.random() * (256));
    return `rgb(${r},${g},${b},1)`;
    }
   /* function randomColor() {                          //adding darken color into function using hsla
        s = 0 + Math.floor(Math.random() * 101)
        return `hsl(${h} ${s}% 100%)`;
    } */
    container.style.gridTemplate = `repeat(${squares}, 1fr) / repeat(${squares}, 1fr)`
    for(i = squares * squares; i > 0; i--){
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseenter', function(event){
            const color = randomColor();
            event.target.style.backgroundColor = `${color}`;
            });
        container.appendChild(square);
    }
}
const button = document.querySelector('button');
button.addEventListener('click', buildGrid);