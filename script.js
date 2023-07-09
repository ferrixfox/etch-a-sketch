function gridGenerator(size){
    clearGrid();
    
    const container = document.querySelector('.container');
    for (let i = size; i >= 0; i--){
        let row = document.createElement('div')
        row.style.cssText = 
            'display: flex; border: black 0.5px solid; justify-content: space-evenly; height: 100%;'
        container.appendChild(row)
        for (let j = size; j >= 0; j--){
            let square = document.createElement('div');
            square.style.cssText = 'border-color: black; border: 0.5px solid; width: 100%';
            square.classList.add('square');
            row.appendChild(square);
        }
    }
    draw();
}

function clearGrid(){
    let container = document.querySelector('.container')
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function draw (){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('black');
        });
    });
};

function erase(){
    const boxes = document.querySelectorAll('.square')
    for (box of boxes){
        box.addEventListener("mouseover", function() {
            if (this.classList.contains("black")) {
              this.classList.remove("black");
            };
        });
    };
}

gridGenerator(16);

btns = document.querySelectorAll('.size');

for (button of btns){
    button.addEventListener('click', function (){
        gridGenerator(Number(this.value));
    })
}

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', erase);