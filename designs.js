// Def DOM variables
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

// Def function
function makeGrid() {
    
// Get height and width values
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWeight').value;
    
// Fresh grid
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
    
// Create grid row
    for (let i = 1; i <= height; i++) {
        let gridRow = document.createElement('tr');
        pixelCanvas.appendChild(gridRow);
      
// Create grid coloum
for (let j = 1; j <= width; j++) {
    let gridCell = document.createElement('td');
    gridRow.appendChild(gridCell);

// Color cell on click event
    gridCell.addEventListener('click', function() {
        const color = document.querySelector('#colorPicker').value;
        this.style.backgroundColor = color;
      })
     }
  }
}

// Grid shows on page load
makeGrid();

// Change default so grid displays on submit click
sizePicker.addEventListener('submit', function(evt) {
    evt.preventDefault();
    makeGrid();
});

// Double click to remove color
pixelCanvas.addEventListener('dblclick', evt => {
    evt.target.style.backgroundColor = null;
});