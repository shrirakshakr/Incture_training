import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../new_redux/action";

const products = [
  { id: 100, name: "IPhone", price: 150000 },
  { id: 200, name: "Dell_Laptop", price: 100000 },
  { id: 300, name: "HP_Laptop", price: 85000 },
  { id: 400, name: "Samsung Mobile", price: 75000 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products :</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} :: {product.price}
          </span>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(removeFromCart(product))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
