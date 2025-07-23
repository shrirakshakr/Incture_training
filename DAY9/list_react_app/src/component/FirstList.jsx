function FirstList()
{
    const city=["Mangalore", "Mysore", "Bangalore", "Mumbai", "Delhi"];
    return(
        <div>
            <h2>City List :</h2>
            {
                city.map((c_name,c_index)=>
                <p key={c_index}>{c_name}</p>)
            }
        </div>
    )
}
export default FirstList;