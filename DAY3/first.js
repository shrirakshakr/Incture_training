// if (true){
//     var x=10;
//     let x=10;
//     console.log("X : ",x);
//     x=20;
//     console.log("X : ",x);
// }
// console.log("X : ",x);

// if (true){
   
//     const x=20;
//     console.log("X : ",x);
//     x=30;
//     console.log("X : ",x);
// }

// let x=10;
// console.log(x);
// console.group(typeof(x));
// x="ABC";
// console.log(x);
// console.group(typeof(x));


// let x=true;
// let y=null;
// let z;
// let a=12343433333333333333333333333333333333333333333333333333333333333333333333333333333333n;

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(a));


// let age=19;
// (age>20)?console.log("eligible"):console.log("Not Eligible")


// let marks=50;
// if(marks>=90)
// {
//     console.log("Grade : A");
// }
// else if(marks>=80 && marks<90)
// {
//     console.log("Grade : B");
// }
// else if(marks>=70 && marks<80)
// {
//     console.log("Grade : C");
// }
// else{
//     console.log("Fail");
// }



// let choice=5;
// switch(choice)
// {
//     case 1:console.log("Case 1 executed..");
//            break;
//     case 2:console.log("Case 2 executed..");
//            break;
//     case 3:console.log("Case 3 executed..");
//            break;
//     case 4:console.log("Case 4 executed..");
//            break;
//     default: console.log("Enter a valid input");

// }




// check this------------
// let x=123321
// a=x;
// let i=1;
// let z=0;
// y=0;
// while(a>0)
// {
//     y=a%10;
//     a=Math.floor(a/10);
//     z=z*(10**(i-1))+y;
//     console.log(z);
//     i++;
// }



//print 1-1000 palindrome numbers-----------------------------
// for(let i=1; i<=1000; i++)
// {
//     let temp=i;
//     let rev=0;
//     while(temp>0)
//     {
//         let rem=temp%10;
//         rev=rev*10+rem;
//         temp=Math.floor(temp/10);
//     }
//     if(i==rev)
//     {
//         console.log(i);
//     }
// }




// prime-------------------------
// let num=11;
// let flag=true;
// for(let i=2;i<=num/2;i++)
// {
//     if(num%i==0)
//     {
//         flag=false;
//         break;
//     }
// }
// if(flag==true)
// {
//     console.log("prime");
// }
// else{
//     console.log("not prime");
// }




// for(let i=1; i<=1000; i++)
// {
//     let flag=true;
//     for(let j=2;j<=i/2;j++)
//     {
//         if(i%j==0)
//         {
//             flag=false;
//             break;
//         }
//     }
//     if(flag==true)
//     {
//         console.log(i);
//     }
// }




// ----------------ARRAY-----------

// let num=[10,20,30,40];
// console.log(num); 

// let num=new Array(10,20,30,40);
// console.log(num);

// let data = [10,20,30,40, "ABC"];
// console.log(data);
// console.log(data[3]);
// console.log(data[4]);

// data[1]=100;

// console.log(data.length);

// for(let i=0;i<data.length;i++)
// {
//     console.log(data[i]);
// }

// for(let x of data)
// {
//     console.log(x);
// }



// let data = [90,60,40,70,10,80,20,30,50];
// console.log(data);

// data.push(200); at the end

// data.unshift(500);  at the beginning

// data.pop(); removes last element

// data.shift();  removes first element
// console.log(data);

// console.log(data.indexOf(10));

// console.log(data.lastIndexOf(10));

// data.sort();

// data.reverse();


// console.log(data);


let data=[10,200,300,210,1,100,5];
let a=data[0];
for(let i=0;i<data.length;i++)
{
    for(let j=1;j<data.length;j++)
    {
        if(data[j]<a)
        {
            let m=a;
            a=data[j];
            data[j]=data[i];
        }
    }
}
console.log(data);