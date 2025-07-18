function Add(){
    const display = document.getElementById("display");
    let enter = document.getElementById("enter");
    enter.value += `<li>${display.value}</li>`;
    
}
function cleardis(){
    let enter = document.getElementById("enter");
    enter.value = "";
}
// function getDatas(){
//     setTimeout(() =>{
//         let output="";
//         datas.forEach((data,index) =>{
//             output += `<li>${data.name}-${data.profession}</li>`
//         })
//         document.body.innerHTML=output;
//     },3000);
// }