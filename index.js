//Selectors
const container = document.querySelector('#container');
const main = document.querySelector('main');
const cell = document.querySelector('.cell');
const resetButton = document.querySelector('#change-size');

//EventListeners
resetButton.addEventListener('click', alterSize)
window.onload = createGrid(16)

//Functions
function createGrid(num){
    container.style.setProperty("--grid-nums", num)
    for(let i = 1; i <= (num * num); i++){
        const div = document.createElement('div');
        div.onmouseover = function(){
            div.style.backgroundColor = changeColor()
        }
        container.appendChild(div).className = 'cell'
    };
    main.appendChild(container)
};

function clearGrid(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach(function(child){
        container.removeChild(child)
    })
}

function alterSize(){
    let newSize = prompt("Enter new size");
    if(newSize !== null){
        newSize = parseInt(newSize)
        if(newSize < 1 || newSize > 64 || Number.isNaN(newSize)){
            alert("Enter a number from 1-64 range")
            alterSize();
        }
        clearGrid()
        createGrid(newSize)
    }
    // createGrid(newSize)
}

function changeColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${g})`
}
console.log(changeColor())