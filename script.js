const row = document.createElement('row')
const square = document.createElement('div');

// event listener to all buttons
btns = document.querySelectorAll('button');
console.log(btns);

for (button of btns){
    button.addEventListener('click', function (){
        alert(button.id)
    })
}


