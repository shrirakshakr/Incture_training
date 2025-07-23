// -----------------------TASK 1-----------------------------------

function NameList()
{
    const names=[
        {id:101, name:"Shriraksha"},
        {id:102, name:"Sameeksha"},
        {id:103, name:"Sinchana"},
        {id:104, name:"Venugopal"}
    ]
    return(
        <div>
            <h2>Students List : </h2>
            {
                names.map((s)=>
                    <ul key={s.id}>
                        <li>{s.name}</li>
                    </ul>
                )
            }
        </div>
    )
}
export default NameList;