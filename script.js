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
    const squares = 16 * 16;
    container.style.gridTemplate = 'repeat(16, 1fr) / repeat(16, 1fr)'
    for(i = squares; i > 0; i--){
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