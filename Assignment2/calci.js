// let Add = function(x,y)
// {
//     return x+y;
// }

// let Sub = function(x,y)
// {
//     return x-y;
// }

// let Multi = function(x,y)
// {
//     return x*y;
// }

// let Div = function(x,y)
// {
//     return x/y;
// }
const display = document.getElementById("display");

function see(input){
    display.value += input; 
}

function cal(){
    display.value = eval(display.value);
}

function cleardis(){
    display.value = "";
}