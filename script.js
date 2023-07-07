function gridGenerator(button_id){
    let size = Number(button_id)
    
    const container = document.querySelector('.container');
    for (let i = size; i >= 0; i--){
        let row = document.createElement('div')
        row.style.cssText = 
            'height: 20px; display: flex';
        container.appendChild(row);
        for (let j = size; j >= 0; j--){
            let square = document.createElement('div');
            square.style.cssText = 'border-color: black; border-style: solid; width: 20px';
            row.appendChild(square)
        }
    }
}

// event listener to all buttons
btns = document.querySelectorAll('button');

for (button of btns){
    button.addEventListener('click', function (){
        gridGenerator(this.value);
    })
}

//on click the button function should call a function which gets  the id of the button and passes it into a gridGenerator function.

