// export function add(x,y)
// {
//     return x+y;
// }
// export function sub(x,y)
// {
//     return x-y;
// }
// export function pro(x,y)
// {
//     return x*y;
// }
// export function div(x,y)
// {
//     return x/y;
// }


// function add(x,y){
//     return x+y;
// }
// export default add;



//----------------------ASYNCHRONOUS PROGRAMMING--------------------
// console.log("Program started...");

// setTimeout(() =>{
//     console.log("Fetching data from API");
// },5000);

// console.log("Closing our application");




const datas=[
    {name:"ABC", profession:"Software Developer"},
    {name:"XYZ", profession:"Software Tester"}
];
function getDatas(){
    setTimeout(() =>{
        let output="";
        datas.forEach((data,index) =>{
            output += `<li>${data.name}-${data.profession}</li>`
        })
        document.body.innerHTML=output;
    },3000);
}
function createData(newData,callback){
        setTimeout(() =>{
            datas.push(newData);
            callback();
    },5000);
}
createData({name:"Ajay", profession:"Software Admin"},getDatas);
getDatas();