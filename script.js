const container = document.querySelector('#container');
/* container.style.gridTemplateColumns = '${}'
    container.style.gridTemplateRows = '${}'
*/
const square = document.createElement('div');
square.setAttribute('class', 'square');

function buildGrid() {
    const squares = 16 * 16;
    container.style.gridTemplate = 'repeat(16, 1fr) / repeat(16, 1fr)'
    for(i = squares; i > 0; i--){
        container.appendChild(square);
    }
}

const button = document.querySelector('button');
button.addEventListener('click', buildGrid);