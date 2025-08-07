
function FirstError(props){
    // try{
    //     throw new Error("Something Broken !..........");
    // }
    // catch(error){
    //     return <p>Some error occured in First Error Component.....</p>
    // }
    return(
        <div>
            <h2>This is the First component from Error Folder</h2>
            <h3>{props.name}</h3>
        </div>
    )
}
export default FirstError;