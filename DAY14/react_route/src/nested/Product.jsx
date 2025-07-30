import { useSearchParams } from "react-router-dom";
function Product()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const category= searchParams.get("category");
    const price = searchParams.get("price");
    return(
        <div>
            <h2>Product page : </h2>
            <p><strong>Category : {category}</strong></p>
            <p><strong>Price : {price}</strong></p>
            <hr></hr>
            <button onClick={()=>setSearchParams({category:"Dell Laptop",price:"90000"})}>Dell Laptop</button>
            <button onClick={()=>setSearchParams({category:"HP Laptop",price:"70000"})}>HP Laptop</button>
        </div>
    )
}
export default Product;