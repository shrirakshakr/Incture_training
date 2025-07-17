//-------------------------function without parameters----------------------------------------------
// function display(){
// console.log("Hello ");
// console.log("This is JS ");
// }
// display();
// display();



//-------------------------function WITH parameters----------------------------------------------
// function Greet(name){
//     console.log("welcome : ",name);
// }
// Greet("Shriraksha");
// Greet("Sachin");



//-------------------------function with return----------------------------------------------
// function add(a,b)
// {
//     return a+b;
// }
// let c=add(5,3);
// console.log(c);



//-------------------------anonymous function----------------------------------------------
// let display=function(name)
// {
//     console.log("Welcome :",name);
// }
// display("ram");



//-------------------------anonymous function with return----------------------------------------------
// let result=function(x,y)
// {
//     return x+y;
// }
// console.log("Result : ",result(10,20));



//-------------------------arrow function----------------------------------------------
// let display=(name)=>{
//     console.log("Welcome : ",name);
// }
// display("Ajay");



// let display=name=>console.log("Welcome : ",name);
// display("Ajay");




// let result=(x,y)=>x+y;
// console.log("Result : ",result(30,20));



//-------------------------Set time----------------------------------------------
// let display=setTimeout(()=>{
//     console.log("Welcome : ")
// },10000);
// display;





//-------------------------callback function----------------------------------------------
// function Greet(name,callback)
// {
//     console.log("Hello : ",name);
//     callback();
// }

// function sayBye()
// {
//     console.log("Bye !");
// }
// Greet("Sachin",sayBye);




//-------------------------Default function----------------------------------------------
// function Greet(name="Guest")
// {
//     console.log("Welcome : ",name);
// }
// Greet("Ram");
// Greet("Aditya");
// Greet();



//----------------------------Object------------------------------------------
// let employee={
//     id:111,
//     name: "Ajay",
//     city: "Mangaluru"
// }
// console.log(employee);

//--------accesing with the help of dot notation----------
// console.log(employee.name);

//--------accesing with the help of bracket notation---------------
// console.log(employee["name"]);

//---------adding another property inside the object--------------
// employee.salary=50000;
// console.log(employee);

//--------------to access each one by one--------------------
// for(let key in employee)
// {
//     console.log("Key : ",key)
// }

// for(let key in employee)
// {
//     console.log("Key : "+key+ " Value : "+employee[key])
// }




//--------------------Destructuring of object-----------------------
let employee={
    id:111,
    name: "Ajay",
    city: "Mangaluru"
}
let{id,name,city}=employee;
console.log(id);
console.log(name);
console.log(city);