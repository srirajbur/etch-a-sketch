//Selectors
const container = document.querySelector('#container');
const main = document.querySelector('main');
const cell = document.querySelector('.cell');


//Functions
function createGrid(num){
    container.style.setProperty("--grid-nums", num)
    for(let i = 1; i <= (num * num); i++){
        const div = document.createElement('div');
        div.onmouseover = function(){
            div.style.backgroundColor = 'red'
        }
        container.appendChild(div).className = 'cell'
    };
    main.appendChild(container)
};
createGrid(100)