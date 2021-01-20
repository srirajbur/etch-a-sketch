//Selectors
const container = document.createElement('div');
container.id = 'container';
const main = document.querySelector('main');
const slider = document.querySelector('#slider')
const displaySize = document.querySelector('.display-size')
console.log(slider.value)

//Events
window.addEventListener('load', createGrid(16))
slider.addEventListener('input', changeSize)

//Functions
function createGrid(num){
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`

    const area = num * num;
    for(let i = 1; i <= area; i++){
        let cell = document.createElement('div');
        cell.className = 'cell'
        cell.addEventListener('mouseover', changeColor)
        container.appendChild(cell)
    };
    main.appendChild(container);
}

function changeSize(e){
    clearGrid()
    displaySize.textContent = e.target.value;
    createGrid(e.target.value)

}   

function clearGrid(){
    const array = Array.from(container.childNodes);
    array.forEach(function(item){
        container.removeChild(item)
    })
}

//got this code from a Odin Student, really liked the color pattern.
function changeColor(e){
    const psychedelicPallete = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];
    const randomColor = Math.floor(Math.random() * psychedelicPallete.length - 1 );
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = psychedelicPallete[randomColor];
}
