// function Add(){
//     const display = document.getElementById("display");
//     let enter = document.getElementById("taskList");
//     enter.value += `<li>${display.value}</li>`;
    
// }
// function cleardis(){
//     let enter = document.getElementById("taskList");
//     enter.value = "";
// }



//     setTimeout(() =>{
//         let output="";
//         datas.forEach((data,index) =>{
//             output += `<li>${data.name}-${data.profession}</li>`
//         })
//         document.body.innerHTML=output;
//     },3000);
// }


function Add() {
  const display = document.getElementById("display");
  const taskList = document.getElementById("taskList");

  if (display.value.trim() !== "") {
    const li = document.createElement("li");
    const btn=document.createElement("button");
    btn.textContext="Delete";
    btn.onclick=function(){
        taskList.removeChild(li);
    };
    li.textContent = display.value;
    li.appendChild(btn);
    taskList.appendChild(li);
    display.value = "";
  }
}

function cleardis() {
  const taskList = document.getElementById("taskList");
  taskList.textContent = "";
}



