function gridGenerator(button_id){
    let size = parseButtonId(button_id);
    console.log(size);
    //const row = document.createElement('row')
    //const square = document.createElement('div');
    // use the button Id to generate a grid
}

function parseButtonId(button_id){
    //needs to convert the Button ID into an integer using slice and parseInt
    let num = button_id.slice(1, );
    return Number(num);
    
}

// event listener to all buttons
btns = document.querySelectorAll('button');

for (button of btns){
    button.addEventListener('click', function (){
        let btnidentity = button.id;
        gridGenerator(btnidentity);
    })
}

//on click the button function should call a function which gets  the id of the button and passes it into a gridGenerator function.

