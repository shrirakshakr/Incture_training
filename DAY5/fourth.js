// import {add} from "./third.js";
// let result=add(10,20);
// console.log("Result : ",result);



// import {add,sub,pro,div} from "./third.js";

// let add_result=add(10,20);
// console.log("Result : ",add_result);

// let sub_result=sub(10,20);
// console.log("Result : ",sub_result);

// let pro_result=pro(10,20);
// console.log("Result : ",pro_result);

// let div_result=div(10,20);
// console.log("Result : ",div_result);



// import add from "./third.js";
// let result=add(10,20);
// console.log("Result : ",result);



//--------------TEMPLATE VARIABLE---------------------------
// let name="Abhishek";
// let city="Mysore";
// let profession="Trainer";
// console.log(`My Name is  :${name}. I am from City : ${city}. My Profession is : ${profession}`);


//------------------------ARRAY DESTRUCTURING---------------------------
// let num=[10,20,30,40];
// let[x,y,z,a]=num;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);



//------------------------SPREAD OPERATOR-------------------------------
// let num=[10,2,30,40];
// let sec_num=[...num, 50,60];
// console.log(num);
// console.log(sec_num);




//----------------------REST OPERATOR--------------------------------
// function displayName(...names)
// {
//     console.log(names);
// }
// displayName("Ajay","Sachin","Ravi","Ajeet");



// function sum(...numbers)
// {
//     return numbers.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4,5,6,7,8,9));



//--------------------------------CLASS---------------------------------------
// class Employee{
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         console.log(`Welcome : ${this.name}`);
//     }
// }
// let emp1=new Employee("Ravi");
// let emp2=new Employee("Ajay");
// let emp3=new Employee("Sachin");
// emp1.greet();
// emp2.greet();
// emp3.greet();




//-----------------------------MAP()--------------------------------------------
let emp = new Map();
emp.set("id","111");
emp.set("name","Ajay");
emp.set("city","Mangaluru");
console.log(emp.get("id"),emp.get("name"),emp.get("city"));



//-----------SET()--------------------------------------------
// let set = new Set();
// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);
// set.add(20);
// console.log(set);