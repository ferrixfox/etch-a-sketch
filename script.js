function gridGenerator(button_id){
    let size = Number(button_id)
    
    const container = document.querySelector('.container');
    for (let i = size; i >= 0; i--){
        let row = document.createElement('div')
        row.style.cssText = 
            'display: flex; border: black 0.5px solid; justify-content: space-evenly; height: 100%;'
        container.appendChild(row)
        for (let j = size; j >= 0; j--){
            let square = document.createElement('div');
            square.style.cssText = 'border-color: black; border: 0.5px solid;'
            row.appendChild(square)
        }
    }
}

function resetGrid(){
    //create function that will reset the grid-size to 16x16
    //need to call this function onclick and on load of the page
}


btns = document.querySelectorAll('button');

for (button of btns){
    button.addEventListener('click', function (){
        gridGenerator(this.value);
    })
}


