//Selectors
const container = document.createElement('div');
container.id = "container"
const main = document.querySelector('main');

//Functions
function createGrid(num){
    container.style.setProperty("--grid-rows", num)
    container.style.setProperty("--grid-cols", num)
    for(let i = 1; i <= (num * num); i++){
        const divs = document.createElement('div');
        divs.textContent = i
        container.appendChild(divs).className = "cell"
    };
    main.appendChild(container)
};
createGrid(16)


