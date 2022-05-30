const container = document.querySelector('#container');
/* container.style.gridTemplateColumns = '${}'
    container.style.gridTemplateRows = '${}'
*/
/* const square = document.createElement('div');
square.setAttribute('class', 'square'); */

function buildGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let squares = prompt("How many squares per side?");
    if(squares > 100) {
        squares = 100;
    }
    container.style.gridTemplate = `repeat(${squares}, 1fr) / repeat(${squares}, 1fr)`
    for(i = squares * squares; i > 0; i--){
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseenter', function(event){
            event.target.classList.add('hover');
            });
        container.appendChild(square);
    }
}
const button = document.querySelector('button');
button.addEventListener('click', buildGrid);