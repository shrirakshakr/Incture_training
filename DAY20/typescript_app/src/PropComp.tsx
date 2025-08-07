// interface MyProps{
//     name : string;
// }
// const PropComp:React.FC<MyProps>=({name}) =>{

//     return(
//         <div>
//             <h2>PropComp in TypeScript :</h2>
//             <p>Name : {name}</p>
//         </div>
//     )
// }
// export default PropComp;



//---------------------------------DESTRUCTURING-------------------------------------------------

interface MyProps{
    name : string;
}
const PropComp=(props:MyProps)=>{

    return(
        <div>
            <h2>PropComp in TypeScript :</h2>
            <p>Name : {props.name}</p>
        </div>
    )
}
export default PropComp;